import React from 'react';
import './movie.css';

interface MovieProps {
    imageSrc: string;
    title: string;
}

const Movie: React.FC<MovieProps> = ({ imageSrc, title }) => {
    return (
        <div className="movie">
            <div className='hover'>
                <img src={imageSrc} alt={title} />
                <div className="infofilme">
                    <p>{title}</p>
                </div>
                
            </div>
        </div>
    );
};

export default Movie;
