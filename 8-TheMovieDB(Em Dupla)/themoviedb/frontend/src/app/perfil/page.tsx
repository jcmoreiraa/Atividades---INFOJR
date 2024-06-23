"use client";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { CgProfile } from "react-icons/cg";
import "./page.css";
import { useEffect, useState } from "react";
import Movie from "@/components/movie/movie";
import axios from "axios";

interface Movie {
  id: number;
  imageSrc: string;
  title: string;
}

export default function Home() {
  const [username, setUsername] = useState<string | null>(null);
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);
  const [recommendedMovies, setRecommendedMovies] = useState<Movie[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:1895/user", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setUsername(response.data.username);
      })
      .catch((error) => {
        console.error("Falha ao buscar usuário:", error);
      });
    axios
      .get("http://localhost:1895/favorites", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        const favoriteMovies = response.data.map((movie: any) => ({
          id: movie.id,
          imageSrc: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          title: movie.title,
        }));
        setFavoriteMovies(favoriteMovies);
      })
      .catch((error) => {
        console.error("Erro ao buscar filmes favoritos:", error);
      });
    axios
      .get("/recommended", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        const recommendedMovies = response.data.map((movie: any) => ({
          id: movie.id,
          imageSrc: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          title: movie.title,
        }));
        setRecommendedMovies(recommendedMovies);
      })
      .catch((error) => {
        console.error("Erro ao buscar filmes recomendados:", error);
      });
  }, []);

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
          <div className="favoritos">
            <hr />
            <h2>Favoritos ({favoriteMovies.length})</h2>
            <hr />

            <div className="favfilmes">
              {favoriteMovies.map((movie) => (
                <Movie
                  key={movie.id}
                  imageSrc={movie.imageSrc}
                  title={movie.title}
                />
              ))}
            </div>
          </div>

          <div className="recomendados">
            <hr />
            <h2>Recomendados</h2>
            <hr />

            <div className="recfilmes">
              {recommendedMovies.map((movie) => (
                <Movie
                  key={movie.id}
                  imageSrc={movie.imageSrc}
                  title={movie.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
