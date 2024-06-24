import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";
import axios from "axios";
import "./searchbar.css";

const apiKey = "04c35731a5ee918f014970082a0088b1";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [suggestions, setSuggestions] = useState<
    { id: number; title: string }[]
  >([]);
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value) {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/search/movie",
          {
            params: {
              api_key: apiKey,
              query: value,
              language: "pt-BR",
            },
          }
        );
        const results = response.data.results.map((movie: any) => ({
          id: movie.id,
          title: movie.title,
        }));
        setSuggestions(results);
        setExpanded(true);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
        setSuggestions([]);
        setExpanded(false);
      }
    } else {
      setSuggestions([]);
      setExpanded(false);
    }
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (suggestions.length > 0) {
      const closestMatch = suggestions[0];
      router.push(`/filmes/${closestMatch.id}`);
    } else {
      console.log("Nenhum resultado para:", searchTerm);
    }
  };

  const handleSuggestionClick = (suggestion: { id: number; title: string }) => {
    setSearchTerm(suggestion.title);
    setSuggestions([]);
    setExpanded(false);
    router.push(`/filmes/${suggestion.id}`);
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
    <div className={`search-container ${expanded ? "expanded" : ""}`}>
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
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.id}
              onMouseDown={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
