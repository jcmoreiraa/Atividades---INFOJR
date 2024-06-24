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
    <Link href={`/filmes/${id}`}>
      <div className="movie">
        <img src={imageSrc} alt={title} />
        <div className='hover'>
          <div className="infofilme">
            <p>{title}</p>
            <Star tmdbId={id} initialActive={isFavorite} /> {/* Pass the isFavorite prop */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Movie;
