import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './CarouselStyles.css'; 

interface Movie {
  title: string;
  
  posterPath: string;
  vote: number;
  id: number;
}

interface MovieListProps {
  searchTerm: string;
}

export const Carrossel: React.FC<MovieListProps> = ({ searchTerm }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const TMDB_API_KEY = '04c35731a5ee918f014970082a0088b1';
        const TMDB_API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`;

        const response = await fetch(TMDB_API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch data from TMDB');
        }

        const data = await response.json();

        const moviesData = data.results.map((movie: any) => ({
          title: movie.title,
          description: movie.overview,
          releaseDate: movie.release_date,
          posterPath: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          vote: movie.vote_average,
          id: movie.id,
        }));

        setMovies(moviesData);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setError('Failed to fetch movies');
      }
    };

    fetchMovies();
  }, []);

  const carouselResponsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1000 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <div className="container w-[80%] px-2 mt-4">
      {error && <p className="text-red-500">{error}</p>}
      <Carousel
        responsive={carouselResponsive}
        infinite={true}
        autoPlay={true}
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        autoPlaySpeed={1300}

        
      >
        {movies.map((movie, index) => (
          <div key={index} className="carousel-item-container bg-white rounded-xl shadow-md p-2 space-y-1">
            <img src={movie.posterPath} alt={movie.title} className="w-full h-auto rounded-xl" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
