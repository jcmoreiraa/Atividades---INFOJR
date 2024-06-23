import { useState } from 'react';
import './favorito.css';

const Star: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(prevState => !prevState);
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
