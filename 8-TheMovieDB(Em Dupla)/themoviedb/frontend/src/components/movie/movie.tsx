import React from 'react';
import './movie.css';
import Link from 'next/link';
import Star from '../favorito/favorito';

interface MovieProps {
  imageSrc: string;
  title: string;
  id: number;
  isFavorite: boolean;
}

const Movie: React.FC<MovieProps> = ({ imageSrc, title, id, isFavorite }) => {
  return (
    <div className="movie">
      <Link href={`/filmes/${id}`}>
          <img src={imageSrc} alt={title} className="movie-img" />
      </Link>
      <div className="infofilme">
        <Link href={`/filmes/${id}`}>
          <p>{title}</p>
        </Link>
        <Star tmdbId={id} initialActive={isFavorite} /> {/* Pass the isFavorite prop */}
      </div>
    </div>
  );
};

export default Movie;
