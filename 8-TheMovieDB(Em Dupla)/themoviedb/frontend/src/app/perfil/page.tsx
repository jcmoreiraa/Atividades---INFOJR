"use client";

import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { CgProfile } from "react-icons/cg";
import "./page.css";
import { useEffect, useState } from "react";
import Movie from "@/components/movie/movie";
import axios from "axios";

interface MovieData {
  id: number;
  poster_path: string;
  title: string;
}

export default function Home() {
  const [username, setUsername] = useState<string | null>(null);
  const [favoriteMovies, setFavoriteMovies] = useState<MovieData[]>([]);
  const [recommendedMovies, setRecommendedMovies] = useState<MovieData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setError("Token não encontrado. Necessário fazer login.");
      return;
    }

    axios
      .get("http://localhost:1895/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUsername(response.data.username);
      })
      .catch((error) => {
        console.error("Erro ao buscar usuário:", error);
        setError("Erro ao buscar dados do usuário.");
      });

    axios
      .get("http://localhost:1895/favorites", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const favoriteMovies = response.data.map((movie: any) => ({
          id: movie.id,
          poster_path: movie.poster_path,
          title: movie.title,
        }));
        setFavoriteMovies(favoriteMovies);
      })
      .catch((error) => {
        console.error("Falha ao buscar filmes favoritos:", error);
        setError("Falha ao buscar filmes favoritos.");
      });

    axios
      .get("https://api.themoviedb.org/3/trending/movie/week", {
        params: {
          api_key: "04c35731a5ee918f014970082a0088b1",
        },
      })
      .then((response) => {
        const trendingMovies = response.data.results.slice(0, 4).map((movie: any) => ({
          id: movie.id,
          poster_path: movie.poster_path,
          title: movie.title,
        }));
        setRecommendedMovies(trendingMovies);
      })
      .catch((error) => {
        console.error("Falha ao buscar filmes em alta:", error);
        setError("Falha ao buscar filmes em alta.");
      });
  }, []);

  const isFavorite = (movieId: number) => favoriteMovies.some((movie) => movie.id === movieId);

  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Header />

      <div className="perfil">
        <div className="identificacao">
          <CgProfile className="foto" />
          <div className="infoperfil">
            <h1>{username || "usuário"}</h1>
          </div>
        </div>

        <div className="corpo">
          <section className="favoritos">
            <hr />
            <h2>Favoritos ({favoriteMovies.length})</h2>
            <hr />
            <div className="favfilmes">
              {favoriteMovies.map((movie) => (
                <Movie
                  key={movie.id}
                  imageSrc={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  title={movie.title}
                  id={movie.id}
                  isFavorite={true}
                />
              ))}
            </div>
          </section>

          <section className="recomendados">
            <hr />
            <h2>Recomendados</h2>
            <hr />
            <div className="recfilmes">
              {recommendedMovies.map((movie) => (
                <Movie
                  key={movie.id}
                  imageSrc={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  title={movie.title}
                  id={movie.id}
                  isFavorite={isFavorite(movie.id)}
                />
              ))}
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
