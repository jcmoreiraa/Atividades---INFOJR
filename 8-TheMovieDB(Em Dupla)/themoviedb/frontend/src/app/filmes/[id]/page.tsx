"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Star from "@/components/favorito/favorito";
import axios from "axios";
import "./filme.css";

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
  const { id } = useParams();
  const [filme, setFilme] = useState<FilmeProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const TMDB_API_KEY = "04c35731a5ee918f014970082a0088b1";
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}&language=pt-BR`
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

    if (id) {
      fetchMovie();
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
        <div className="filme">
          <img src={filme.imageSrc} alt={filme.title} />

          <div className="detalhes">
            <div className="titulo">
              <h2>Título: {filme.title}</h2>
              <Star />
            </div>
            <p>Ano de Lançamento: {filme.anoLancamento}</p>
            <p>Bilheteria: {filme.bilheteria}</p>
            <p>Idioma Original: {filme.idiomaOriginal}</p>
            <p>Sinopse: {filme.sinopse}</p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Filme;
