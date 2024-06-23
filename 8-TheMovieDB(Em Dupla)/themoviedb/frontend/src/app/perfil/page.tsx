"use client";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { CgProfile } from "react-icons/cg";
import './page.css';
import { useState } from "react";
import Movie from "@/components/movie/movie";

interface Movie {
  id: number;
  imageSrc: string;
  title: string;
}

const mockFavoriteMovies: Movie[] = [
    { id: 1, imageSrc: "/images/image5.jpg", title: "Título do Filme 5" },
    { id: 2, imageSrc: "/images/image6.jpg", title: "Título do Filme 6" },
    { id: 3, imageSrc: "/images/image10.jpg", title: "Título do Filme 10" },
    { id: 4, imageSrc: "/images/image11.jpg", title: "Título do Filme 11" },
    { id: 5, imageSrc: "/images/image12.jpg", title: "Título do Filme 12" },
    { id: 6, imageSrc: "/images/image13.jpg", title: "Título do Filme 13" },
    { id: 7, imageSrc: "/images/image14.jpeg", title: "Título do Filme 14" },
    { id: 8, imageSrc: "/images/image15.jpg", title: "Título do Filme 15" },
    { id: 9, imageSrc: "/images/image16.jpg", title: "Título do Filme 16" },
    { id: 10, imageSrc: "/images/image17.jpg", title: "Título do Filme 17" },
    { id: 11, imageSrc: "/images/image18.jpg", title: "Título do Filme 18" },
    { id: 12, imageSrc: "/images/image19.jpg", title: "Título do Filme 19" },
    { id: 13, imageSrc: "/images/image20.jpg", title: "Título do Filme 20" },
];

const mockRecommendedMovies: Movie[] = [
    { id: 14, imageSrc: "/images/image1.jpg", title: "Título do Filme 1" },
    { id: 15, imageSrc: "/images/image2.jpg", title: "Título do Filme 2" },
    { id: 16, imageSrc: "/images/image3.jpg", title: "Título do Filme 3" },
    { id: 17, imageSrc: "/images/image4.jpg", title: "Título do Filme 4" },
];

export default function Home() {
  const [favoriteMovies] = useState<Movie[]>(mockFavoriteMovies);
  const [recommendedMovies] = useState<Movie[]>(mockRecommendedMovies);

  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Header />

      <div className="perfil">
        <div className="identificacao">
          <CgProfile className="foto"/>

          <div className="infoperfil">
            <h1>usuario</h1>
          </div>
        </div>

        <div className="corpo">
          <div className="favoritos">
            <hr />
              <h2>Favoritos (quantidade)</h2>
            <hr />
            
            <div className="favfilmes">
              {favoriteMovies.map(movie => (
                <Movie key={movie.id} imageSrc={movie.imageSrc} title={movie.title} />
              ))}
            </div>
          </div>
    
          <div className="recomendados">
            <hr />
              <h2>Recomendados</h2>
            <hr />
    
            <div className="recfilmes">
              {recommendedMovies.map(movie => (
                <Movie key={movie.id} imageSrc={movie.imageSrc} title={movie.title} />
              ))}
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
};