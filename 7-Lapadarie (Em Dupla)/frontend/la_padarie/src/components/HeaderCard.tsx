import React from 'react'
import Image from 'next/image'

type Props = {
  title: string,
  value: number,
  icon: React.JSX.Element,
  total?: boolean
}

const HeaderCard = (props: Props) => {
  return (
    <div
      className={`
        ${props.total ? "bg-[#5F3305]" : "bg-white"}
        ${props.total ? "text-white" : "text-[#5F3305]"}
        gap-2 p-4 rounded-lg shadow-md flex flex-col w-full 
      `}
    >
      <div className="flex justify-between">
        <h1 className="font-semibold">{props.title}</h1>
        {props.icon}
      </div>
      <p className="text-4xl">{props.total ? `$ ${props.value.toFixed(2)}` : props.value}</p>
    </div>
  )
}

export default HeaderCard