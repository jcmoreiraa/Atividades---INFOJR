"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from next/router
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Star from "@/components/favorito/favorito";
import axios from "axios";
import "./filme.css";
import { useParams } from "next/navigation";

interface FilmeProps {
  id: number;
  imageSrc: string;
  title: string;
  anoLancamento: string;
  bilheteria: string;
  idiomaOriginal: string;
  sinopse: string;
}

const Filme = () => {
  const router = useRouter();
  const { id } = useParams(); // Use router.query instead of useParams()
  const [filme, setFilme] = useState<FilmeProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false); // New state for favorite status

  useEffect(() => {
    const fetchMovie = async (movieId: number) => {
      try {
        const TMDB_API_KEY = "04c35731a5ee918f014970082a0088b1";
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}&language=pt-BR`
        );
        const movie = res.data;

        const filmeData: FilmeProps = {
          id: movie.id,
          imageSrc: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          title: movie.title,
          anoLancamento: movie.release_date.split("-")[0],
          bilheteria: movie.revenue
            ? `$${movie.revenue.toLocaleString()}`
            : "N/A",
          idiomaOriginal: movie.original_language,
          sinopse: movie.overview,
        };

        setFilme(filmeData);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dado do filme:", error);
        setLoading(false);
      }
    };

    const fetchFavorites = async () => {
      try {
        const res = await axios.get(`http://localhost:1895/favorites`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const favorites = res.data;
        const isFav = favorites.some((fav: any) => fav.id === parseInt(id, 10));
        setIsFavorite(isFav);
      } catch (error) {
        console.error("Erro ao buscar favoritos:", error);
      }
    };

    if (typeof id === "string") {
      const movieId = parseInt(id, 10);
      fetchMovie(movieId);
      fetchFavorites();
    }
  }, [id]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!filme) {
    return <div>Filme não encontrado</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />

      <div className="corpo">
        <section className="filme">
          <img src={filme.imageSrc} alt={filme.title} />

          <div className="detalhes">
            <div className="titulo">
              <h2>Título: {filme.title}</h2>
              <Star tmdbId={filme.id} initialActive={isFavorite} /> {/* Pass isFavorite as initialActive */}
            </div>
            <p>Ano de Lançamento: {filme.anoLancamento}</p>
            <p>Bilheteria: {filme.bilheteria}</p>
            <p>Idioma Original: {filme.idiomaOriginal}</p>
            <p>Sinopse: {filme.sinopse}</p>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
};

export default Filme;
