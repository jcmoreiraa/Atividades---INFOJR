"use client";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import "./page.css";
import React, { useEffect, useState } from "react";
import MultiItemCarousel from "@/components/carousel/carousel";
import Checkbox from "@/components/checkbox/checkbox";
import Movie from "@/components/movie/movie";
import axios from "axios";
import { useRouter } from "next/navigation";
import ReactPaginate from "react-paginate";

interface Movie {
  id: number;
  imageSrc: string;
  title: string;
}

const categories: { [key: string]: number } = {
  Animação: 16,
  Aventura: 12,
  Ação: 28,
  Comédia: 35,
  Crime: 80,
  Documentário: 99,
  Drama: 18,
  Família: 10751,
  Fantasia: 14,
  Faroeste: 37,
  "Ficção Científica": 878,
  Guerra: 10752,
  História: 36,
  Mistério: 9648,
  Música: 10402,
  Romance: 10749,
  Terror: 27,
  Thriller: 53,
};

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const router = useRouter();
  const apiKey = "04c35731a5ee918f014970082a0088b1";

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    } else {
    }
  });

  const handleCheckboxChange = (category: string) => {
    const newCategory = selectedCategory === category ? null : category;
    setSelectedCategory(newCategory);
    setCurrentPage(0);
  };

  useEffect(() => {
    const accioFavoriteMovies = async () => {
      try {
        const response = await axios.get("http://localhost:1895/favorites", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const favoriteMovies = response.data.map((movie: any) => ({
          id: movie.id,
          imageSrc: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          title: movie.title,
        }));
        setFavoriteMovies(favoriteMovies);
      } catch (error) {
        console.error("Erro ao buscar filmes favoritos:", error);
      }
    };

    accioFavoriteMovies();
  }, []);

  useEffect(() => {
    const accioMoviesByCategory = async (category: string) => {
      try {
        const genreId = categories[category];
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie`,
          {
            params: {
              api_key: apiKey,
              with_genres: genreId,
              language: "pt-BR",
            },
          }
        );
        const acciodMovies = response.data.results.map((movie: any) => ({
          id: movie.id,
          imageSrc: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          title: movie.title,
        }));
        setMovies(acciodMovies);
      } catch (error) {
        console.error("Erro ao pegar filmes por categoria", error);
      }
    };

    if (selectedCategory) {
      accioMoviesByCategory(selectedCategory);
    } else {
      setMovies([]);
    }
  }, [selectedCategory]);

  useEffect(() => {
    const calculateItemsPerPage = () => {
      if (window.innerWidth <= 455) {
        return 2;
      } else if (window.innerWidth <= 614) {
        return 3;
      } else if (window.innerWidth <= 748) {
        return 4;
      } else if (window.innerWidth <= 986) {
        return 8;
      } else {
        return 18
      }
    };

    const handleResize = () => {
      const newItemsPerPage = calculateItemsPerPage();
      setItemsPerPage(newItemsPerPage);
    };

    setItemsPerPage(calculateItemsPerPage());

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  

  const isFavorite = (movieId: number) => favoriteMovies.some((movie) => movie.id === movieId);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentMovies = movies.slice(offset, offset + itemsPerPage);

  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Header />

      <div className="homepage">
        <a className="lancamento" href="/filmes/558">
          <img src="./images/poster.jpg" alt="Imagem de lançamento" />
          <div className="texto">
            <h1>Homem-Aranha 2</h1>
            <p>
              O Dr. Otto Octavius é transformado em Doutor Octopus quando uma
              falha em uma experiência de fusão nuclear resulta em uma explosão
              que mata sua esposa. Ele culpa o Homem-Aranha pelo acidente e
              deseja vingança. Enquanto isso, o alter ego do herói, Peter
              Parker, perde seus poderes. Para complicar as coisas, o seu melhor
              amigo odeia o Homem-Aranha e sua amada fica noiva.
            </p>
          </div>
        </a>

        <section className="carrossel">
          <MultiItemCarousel />
        </section>

        <div className="meio">
          <section className="tabela">
            {Object.keys(categories).map((category: string, index: number) => (
              <Checkbox
                key={index}
                label={category}
                checked={selectedCategory === category}
                onChange={() => handleCheckboxChange(category)}
              />
            ))}
          </section>

          <section className="filtrados">
            <div className="pagina">
              {selectedCategory &&
                currentMovies.map((movie) => (
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    imageSrc={movie.imageSrc}
                    title={movie.title}
                    isFavorite={isFavorite(movie.id)}
                  />
                ))}
              </div>

          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={Math.ceil(movies.length / itemsPerPage)}
            marginPagesDisplayed={1}
            pageRangeDisplayed={1}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
};
