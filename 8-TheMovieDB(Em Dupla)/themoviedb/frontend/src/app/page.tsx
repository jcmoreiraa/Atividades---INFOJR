"use client";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import './page.css';
import React, { useState } from 'react';
import MultiItemCarousel from "@/components/carousel/carousel";
import Checkbox from "@/components/checkbox/checkbox";
import Movie from "@/components/movie/movie";

interface Movie {
  id: number;
  imageSrc: string;
  title: string;
}

const moviesData: { [key: string]: Movie[] } = {
  "Ficção Científica": [
    { id: 1, imageSrc: "/images/image1.jpg", title: "Título do Filme 1" },
    { id: 2, imageSrc: "/images/image2.jpg", title: "Título do Filme 2" },
  ],
  "Comédia Romântica": [
    { id: 3, imageSrc: "/images/image3.jpg", title: "Título do Filme 3" },
    { id: 4, imageSrc: "/images/image4.jpg", title: "Título do Filme 4" },
  ],
  "Drama": [
    { id: 5, imageSrc: "/images/image5.jpg", title: "Título do Filme 5" },
    { id: 6, imageSrc: "/images/image6.jpg", title: "Título do Filme 6" },
    { id: 10, imageSrc: "/images/image10.jpg", title: "Título do Filme 10" },
    { id: 11, imageSrc: "/images/image11.jpg", title: "Título do Filme 11" },
    { id: 12, imageSrc: "/images/image12.jpg", title: "Título do Filme 12" },
    { id: 13, imageSrc: "/images/image13.jpg", title: "Título do Filme 13" },
    { id: 14, imageSrc: "/images/image14.jpeg", title: "Título do Filme 14" },
    { id: 15, imageSrc: "/images/image15.jpg", title: "Título do Filme 15" },
    { id: 16, imageSrc: "/images/image16.jpg", title: "Título do Filme 16" },
    { id: 17, imageSrc: "/images/image17.jpg", title: "Título do Filme 17" },
    { id: 18, imageSrc: "/images/image18.jpg", title: "Título do Filme 18" },
    { id: 19, imageSrc: "/images/image19.jpg", title: "Título do Filme 19" },
    { id: 20, imageSrc: "/images/image20.jpg", title: "Título do Filme 20" },
  ],
  "Ação": [
    { id: 7, imageSrc: "/images/image7.jpg", title: "Título do Filme 7" },
    { id: 8, imageSrc: "/images/image8.jpg", title: "Título do Filme 8" },
  ],
  "Romance": [
    { id: 9, imageSrc: "/images/image9.jpg", title: "Título do Filme 9" },
    { id: 10, imageSrc: "/images/image10.jpg", title: "Título do Filme 10" },
  ],
  "Animação": [
    { id: 11, imageSrc: "/images/image11.jpg", title: "Título do Filme 11" },
    { id: 12, imageSrc: "/images/image12.jpg", title: "Título do Filme 12" },
  ],
  "Suspense": [
    { id: 11, imageSrc: "/images/image11.jpg", title: "Título do Filme 11" },
    { id: 12, imageSrc: "/images/image12.jpg", title: "Título do Filme 12" },
  ],
  "Documentário": [
    { id: 11, imageSrc: "/images/image11.jpg", title: "Título do Filme 11" },
    { id: 12, imageSrc: "/images/image12.jpg", title: "Título do Filme 12" },
  ],
};

const categories = Object.keys(moviesData);

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCheckboxChange = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Header />

      <div className="homepage">
        <div className="lancamento">
          <img src="./images/poster.jpg" alt="Imagem de lançamento" />
          <div className="texto">
            <h1>Homem-Aranha 2</h1>
            <p>O Dr. Otto Octavius é transformado em Doutor Octopus quando uma falha em uma experiência de fusão nuclear resulta em uma explosão que mata sua esposa. Ele culpa o Homem-Aranha pelo acidente e deseja vingança. Enquanto isso, o alter ego do herói, Peter Parker, perde seus poderes. Para complicar as coisas, o seu melhor amigo odeia o Homem-Aranha e sua amada fica noiva.</p>
          </div>
        </div>

        <div className="carrossel">
          <MultiItemCarousel />
        </div>

        <div className="meio">

          <div className="tabela">
            
              {categories.map((category: string, index: number) => (
                <Checkbox 
                  key={index} 
                  label={category} 
                  checked={selectedCategory === category}
                  onChange={() => handleCheckboxChange(category)} 
                />
              ))}
            
          </div>

          <div className="filtrados">
            {selectedCategory && moviesData[selectedCategory].map((movie) => (
              <Movie key={movie.id} id={movie.id }imageSrc={movie.imageSrc} title={movie.title} />
            ))}
          </div>

        </div>

      </div>

      <Footer />
    </main>
  );
};
