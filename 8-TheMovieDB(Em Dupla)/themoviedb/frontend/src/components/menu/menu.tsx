
import Link from "next/link";
import './menu.css';
import { useEffect } from "react";

interface ProfileProps {
    isVisible: boolean;
    onClose: () => void;
}


const Profile: React.FC<ProfileProps> = ({ isVisible, onClose }) => {
    const profileClassName = isVisible ? "profile open" : "profile";
    
    useEffect(() => {
      const handleEscape = (event: KeyboardEvent) => {
          if (event.key === 'Escape') {
              onClose(); 
          }
      };

      const handleClickOutside = (event: MouseEvent) => {
          const target = event.target as HTMLElement;
          if (!target.closest(".profile")) {
              onClose(); 
          }
      };

      if (isVisible) {
          document.addEventListener("keydown", handleEscape);
          document.addEventListener("mousedown", handleClickOutside);
      } else {
          document.removeEventListener("keydown", handleEscape);
          document.removeEventListener("mousedown", handleClickOutside);
      }

      return () => {
          document.removeEventListener("keydown", handleEscape);
          document.removeEventListener("mousedown", handleClickOutside);
      };
  }, [isVisible, onClose]);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation(); 
    onClose(); 
};

    return (
     <>
      {isVisible && (
                <div className="profile-overlay" onClick={handleOverlayClick}></div>
            )}     
      <div className={profileClassName}>


          <nav>
              <ul>
                <li>
                  <Link href="/cadastro">
                    Cadastre-se
                  </Link>
                </li>
                <li>
                  <Link href="/login">
                    Conecte-se
                  </Link>
                </li>
                <li>
                  <Link href="/perfil">
                    Perfil
                  </Link>
                </li>
                <li>
                  <Link href="/filmes">
                    Filmes
                  </Link>
                </li>
              </ul>
          </nav>

      </div>
    </>
    )
};

export default Profile;
