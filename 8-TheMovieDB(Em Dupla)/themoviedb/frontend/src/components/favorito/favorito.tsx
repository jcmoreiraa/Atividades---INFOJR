import { useEffect, useState } from 'react';
import axios from 'axios';
import './favorito.css';

const Star: React.FC<{tmdbId: number; initialActive?: boolean;}> = ({tmdbId, initialActive = false}) => {
  const [isActive, setIsActive] = useState(initialActive);

  useEffect(() => {
    setIsActive(initialActive);
  }, [initialActive]);

const handleClick = async () => {
    try {
      if (isActive) {
        await axios.delete(`http://localhost:1895/favorites/${tmdbId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setIsActive(false);
      } else {
        await axios.post(`http://localhost:1895/favorites`, { tmdbId }, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setIsActive(true);
      }
    } catch (error) {
      console.error("Erro ao atualizar favoritos:", error);
    }
  };

  return (
    <button
      className={`star-button ${isActive ? 'active' : ''}`}
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="star-icon"
      >
        <path
          fill={isActive ? '#f0c419' : 'none'}
          stroke="#f0c419"
          strokeWidth="2"
          d="M12 2l1.9 5.8h6.1l-4.9 3.6 1.9 5.8-4.9-3.6-4.9 3.6 1.9-5.8-4.9-3.6h6.1z"
        />
      </svg>
    </button>
  );
};

export default Star;
