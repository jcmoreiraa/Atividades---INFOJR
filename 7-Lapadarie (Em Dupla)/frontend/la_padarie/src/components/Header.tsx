import React from 'react'
import Logo from './Logo'

const Header = () => {
  return (
    <header
    className="flex flex-col w-full bg-[#965A1B] items-center py-[100px] sm:py-[120px]"
    >
      <Logo />
    </header>
  )
}

export default Header