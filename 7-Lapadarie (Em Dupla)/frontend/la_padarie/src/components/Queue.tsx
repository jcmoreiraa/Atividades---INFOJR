import React from 'react'
import {AddUserDialog }from './AddUserDialog'
import UserCard from './UserCard'

export type User = {
  id: number,
  name: string,
  breads: number,
}

type Props = {
  users: User[],
  onDelete: (id: number) => void,
  onAddUser: (data: { name: string, breads: number }) => Promise<void>,
}

function Queue({ users, onDelete, onAddUser }: Props) {
  return (
    <section className={`flex flex-col items-start w-full max-w-[1250px] gap-1 sm:gap-3`}>
      <AddUserDialog onAddUser={onAddUser} />
      <ul className={`flex flex-col w-full gap-3`}>
        {users && users.map((user) => (
          <UserCard key={user.id} user={user} onDelete={onDelete} />
        ))}
      </ul>
    </section>
  )
}

export default Queue
