import React, { useState } from "react";
import { FaSearch } from 'react-icons/fa';
import './searchbar.css';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [expanded, setExpanded] = useState(false); 

  const allSuggestions: string[] = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value) {
      const filteredSuggestions = allSuggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      setExpanded(true); 
    } else {
      setSuggestions([]);
      setExpanded(false); 
    }
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Buscando por:', searchTerm);
    
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
    setExpanded(false); 
  };

  const handleInputFocus = () => {
    if (searchTerm) {
      setExpanded(true); 
    }
  };

  const handleInputBlur = () => {
    if (!searchTerm) {
      setExpanded(false); 
    }
  };

  return (
    <div className={`search-container ${expanded ? 'expanded' : ''}`}>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          className="search-input"
          placeholder="Search..."
        />
        <button type="submit" className="search-button">
          <FaSearch />
        </button>
      </form>
      {expanded && suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
