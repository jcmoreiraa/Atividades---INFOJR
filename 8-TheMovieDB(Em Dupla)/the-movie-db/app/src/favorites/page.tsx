'use client';
import React, { useState, useEffect } from 'react';
import FavoritesHeader from './FavoritesHeader';
import Footer from '@/components/footer';
import { getFavorites, removeFavorite } from '@/app/src/services/service';

interface Movie {
  title: string;
  description: string;
  releaseDate: string;
  posterPath: string;
  vote: number;
  id: number;
}

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        if (userId) {
          const userFavorites = await getFavorites(userId);

          const TMDB_API_KEY = '04c35731a5ee918f014970082a0088b1';
          const requests = userFavorites.map((fav: any) =>
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(fav.title)}&language=en-US`)
          );

          const responses = await Promise.all(requests);
          const data = await Promise.all(responses.map((response: { json: () => any; }) => response.json()));

          const favoriteMovies = data.map((result: any) => {
            const movie = result.results[0]; // Pega o primeiro resultado
            return {
              title: movie.title,
              description: movie.overview,
              releaseDate: movie.release_date,
              posterPath: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
              vote: movie.vote_average,
              id: movie.id,
            };
          });

          setFavorites(favoriteMovies);
        } else {
          setError('User ID not found in local storage.');
        }
      } catch (error) {
        console.error('Error fetching favorite movies:', error);
        setError('Failed to fetch favorite movies');
      }
    };

    fetchFavorites();
  }, [userId]);

  const removeFromFavorites = async (favoriteTitle: string) => {
    try {
      await removeFavorite(userId!, favoriteTitle);
      setFavorites(favorites.filter(fav => fav.title !== favoriteTitle));
      console.log(`Removed favorite with title: ${favoriteTitle}`);
    } catch (error) {
      console.error('Error removing favorite:', error);
      setError('Failed to remove favorite');
    }
  };

  return (
    <>
      <FavoritesHeader />
      <div className="container w-[90%] mx-auto px-4 my-4">
        {error && <p className="text-red-500">{error}</p>}
        <h2 className="text-2xl font-bold mb-4 text-white">Favorite Movies</h2>
        {favorites.length === 0 && <h3 className="text-gray-600 font-bold text-4xl">No favorite movies added yet.</h3>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
          {favorites.map((movie, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-4 space-y-1">
              <img src={movie.posterPath} alt={movie.title} className="w-full h-auto mb-2 rounded-xl" />
              <h3 className="text-lg font-bold mb-2">{movie.title}</h3>
              <p className="text-gray-500 text-sm">Release Date: {movie.releaseDate}</p>
              <p className="text-yellow-600 text-sm">Rating: {Number(movie.vote).toFixed(1)}</p>
              <button
                className="py-1 px-2 rounded-lg text-white font-bold bg-red-500 hover:bg-red-700"
                onClick={() => removeFromFavorites(movie.title)}
              >
                Remove from Favorites
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Favorites;
