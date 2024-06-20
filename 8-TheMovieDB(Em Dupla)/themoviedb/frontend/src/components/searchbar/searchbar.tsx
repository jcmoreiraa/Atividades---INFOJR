"use client";
import React, { useState } from "react";
import { FaSearch } from 'react-icons/fa';
import './searchbar.css';

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    };
  
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log('Buscando por:', searchTerm);
    };

    return (
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            className="search-input"
            placeholder="Search..."
          />
          <button
            type="submit"
            className="search-button"
          >
            <FaSearch />
          </button>
        </form>
    )
};
