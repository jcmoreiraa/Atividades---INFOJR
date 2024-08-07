import React from 'react'
import { User } from './Queue'
import { Button } from './ui/button'
import DeleteIcon from './icons/DeleteIcon'

type Props = {
  user: User,
  onDelete:(id:number) => void
}

const UserCard = ({ user, onDelete }: Props) => {
  return (
    <li className={`flex justify-between items-center p-4 bg-background text-[hsl(31,90%,20%)] rounded-lg`}>
      <div className="flex flex-col font-bold">
        <h2 className="text-lg">{user.name}</h2>
        <div className="flex flex-col gap-x-3 sm:flex-row">
          <p>Total breads: <span className="font-normal">{user.breads}</span></p>
          <p>Sum to pay: <span className="font-normal">{`$ ${(user.breads*0.5).toFixed(2)}`}</span></p>
        </div>
      </div>
      <Button variant="ghost" onClick={()=> onDelete(user.id)}><DeleteIcon /></Button>
    </li>
  )
}

export default UserCard