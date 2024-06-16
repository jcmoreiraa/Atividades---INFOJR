"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeaderCard from "@/components/HeaderCard";
import Queue, { User } from "@/components/Queue";
import CartIcon from "@/components/icons/CartIcon";
import CurrencyIcon from "@/components/icons/CurrencyIcon";
import PeopleIcon from "@/components/icons/PeopleIcon";
import { deleteUser, getUsers, createUser } from "@/service/services";

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [breads, setBreads] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        setUsers(response);
      } catch (error: any) {
        console.error('Error fetching users:', error.message);
      }
    };

    fetchUsers();
  }, []);

  const calculateBreadsAndTotal = (userBreads: number) => {
    setBreads(prevState => prevState + userBreads);
    setTotal(prevState => prevState + userBreads*0.5);

  };

  const removeUser = async (id: number) => {
    try {
      await deleteUser(id);
      const newUsers = await getUsers();
      setUsers(newUsers);
    } catch (error: any) {
      console.error('Error deleting user:', error.message);
    }
  };

  const addUser = async (data: { name: string, breads: number }) => {
    try {
      await createUser(data);
      calculateBreadsAndTotal(data.breads); 
      const newUsers = await getUsers();
      setUsers(newUsers);
    } catch (error: any) {
      console.error('Error adding user:', error.message);
    }
  };

  return (
    <>
      <Header />
      <main className="flex flex-col items-center w-full px-5 max-w-[1250px]">
        <section className="flex flex-col w-full gap-4 relative top-[-50px] sm:flex-row sm:justify-between">
          <HeaderCard title="Queue length" value={users.length} icon={PeopleIcon()} />
          <HeaderCard title="Sold breads" value={breads} icon={CartIcon()} />
          <HeaderCard title="Sum total" value={total} icon={CurrencyIcon()} total={true} />
        </section>
        <Queue onDelete={removeUser} users={users} onAddUser={addUser} />
        <footer className="font-bold py-20">
          <p>Com 💛 Info Jr UFBA 2024</p>
        </footer>
      </main>
    </>
  );
}
