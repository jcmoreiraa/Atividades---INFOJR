import React, { useState } from 'react'
import {AddUserDialog }from './AddUserDialog'
import UserCard from './UserCard'


export type User = {
  id: number,
  name: string,
  breads: number,
}
interface lista {
  nome: string,
  idade:number
}





type Props = {
  users: User[],
  

  onDelete: (id: number) => void,
  onAddUser: (data: { name: string, breads: number }) => Promise<void>,
}


function Queue({ users, onDelete, onAddUser, }: Props) {
  const [list, setList] = useState <lista[]>([
    {nome:'julio', idade:1},
   { nome:'maria', idade:1}
    
  ]);

  const mockUsers: User[] = [
    { id: 1, name: 'João', breads: 5 },
    { id: 2, name: 'Ana', breads: 8 },
    { id: 3, name: 'Pedro', breads: 3 }
  ];
  console.log(users)
  console.log(mockUsers)
  
  


  return (
    <section className={`flex flex-col items-start w-full max-w-[1250px] gap-1 sm:gap-3`}>
      <AddUserDialog onAddUser={onAddUser} />
      <ul className={`flex flex-col w-full gap-3`}>
        {users.map((user) => (
          <UserCard key={user.id} user={user} onDelete={onDelete} />
        ))}
      </ul>
      <ul className='flex  gap-3'>
        {list && list.map((item,index)=>(
          <li key={index}>
        <p> {item.idade} </p>
        <p> {item.nome} </p>
        </li>
        ))}
        
      </ul>
      <ul className='flex  gap-3'>
        {mockUsers && mockUsers.map((item,index)=>(
          <li key={index}>
        <p> {item.breads} </p>
        <p> {item.name} </p>
        </li>
        ))}
        
      </ul>
    </section>
  )
}

export default Queue
