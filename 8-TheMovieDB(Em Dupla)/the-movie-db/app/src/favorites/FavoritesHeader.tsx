'use client'

import React, { useState } from 'react';
import Link from 'next/link'; 
import SearchIcon from '@/components/HeaderIcons/SearchIcon';
import UserIcon from '@/components/HeaderIcons/UserIcon';
import FavoriteIcon from '@/components/MovieIcons/FavoriteIcon';



function FavoritesHeader() {
  return (
        <header className="flex justify-around md:justify-between px-10 items-center bg-gray-900 text-white py-4 shadow-lg">
          <div className='md:hidden'>
            <UserIcon/>
          </div>
          <h1
            className="text-2xl hidden font-dunerise font-bold leading-11 tracking-wide cursor-pointer md:flex"
          >
            O M N I
          </h1>
          <nav className=" md:flex font-bold md:justify-between justify-center md:space-x-16 space-x-8 items-center">
            <Link href="/">
              Home
            </Link>
            <Link href="/src/favorites">
            Favorites
            </Link>
          </nav>
         
    
        </header>
      );
    }

export default FavoritesHeader

  