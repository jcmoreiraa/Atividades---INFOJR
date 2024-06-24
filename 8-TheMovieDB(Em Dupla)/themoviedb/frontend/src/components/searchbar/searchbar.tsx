import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";
import axios from "axios";
import "./searchbar.css";

const apiKey = "04c35731a5ee918f014970082a0088b1";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [suggestions, setSuggestions] = useState<
    { id: number; title: string; poster_path?: string }[]
  >([]);
  const router = useRouter();
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setSuggestions([]);
      }
    };

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSuggestions([]);
      }
    };

    document.body.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.body.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

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
          poster_path: movie.poster_path,
        }));
        setSuggestions(results);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
        setSuggestions([]);
      }
    } else {
      setSuggestions([]);
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
    router.push(`/filmes/${suggestion.id}`);
  };

  return (
    <div className="search-container" ref={searchContainerRef}>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          className="search-input"
          placeholder="Search..."
        />
        <button type="submit" className="search-button">
          <FaSearch />
        </button>
      </form>
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.id}
              onMouseDown={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w92/${suggestion.poster_path}`}
                  alt={`${suggestion.title} Poster`}
                />
              ) : (
                <div className="no-image-placeholder">No Image Available</div>
              )}
              <span>{suggestion.title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
