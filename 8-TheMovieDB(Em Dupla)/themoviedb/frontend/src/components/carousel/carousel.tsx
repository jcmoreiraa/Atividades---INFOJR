"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Movie from "../movie/movie";

const calculateItemsToShow = (containerWidth) => {
  const itemWidth = 120;

  const spacing = 16;

  const availableWidth = containerWidth - spacing;

  let maxItemsDesktop = Math.floor(availableWidth / (itemWidth + spacing));
  let maxItemsTablet = Math.floor(availableWidth / (itemWidth + spacing));
  let maxItemsMobile = Math.floor(availableWidth / itemWidth);

  maxItemsDesktop = Math.max(maxItemsDesktop, 1);
  maxItemsTablet = Math.max(maxItemsTablet, 1);
  maxItemsMobile = Math.max(maxItemsMobile, 1);

  return {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: maxItemsDesktop,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: maxItemsTablet,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: maxItemsMobile,
    },
  };
};

const MultiItemCarousel = () => {
  const [containerWidth, setContainerWidth] = React.useState(window.innerWidth);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setContainerWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const responsive = calculateItemsToShow(containerWidth);

  useEffect(() => {
    const accioFilmes = async () => {
      try {
        const apiKey = "04c35731a5ee918f014970082a0088b1";
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&language=pt-BR`
        );
        const acciodFilmes = response.data.results.map((movie: { id: any; poster_path: any; title: any; }) => ({
          id: movie.id,
          imageSrc: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          title: movie.title,
        }));
        setMovies(acciodFilmes);
      } catch (error) {
        console.error("Erro ao dar fetch nos filmes", error);
      }
    };

    accioFilmes();
  });

  return (
    <Carousel responsive={responsive} autoPlay={true} infinite={true}>
      {movies.map((movie) => (
        <Movie key={movie.id} id={movie.id} imageSrc={movie.imageSrc} title={movie.title} />
      ))}
    </Carousel>
  );
};

export default MultiItemCarousel;
