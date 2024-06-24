import Link from "next/link";
import "./menu.css";
import { useEffect, useState } from "react";

interface ProfileProps {
  isVisible: boolean;
  onClose: () => void;
}

const Profile: React.FC<ProfileProps> = ({ isVisible, onClose }) => {
  const profileClassName = isVisible ? "profile open" : "profile";
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
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

  const handleOverlayClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    onClose();
  };

  const isLoggedIn = !!localStorage.getItem("token");

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <>
      {isVisible && (
        <div className="profile-overlay" onClick={handleOverlayClick}></div>
      )}
      <div className={profileClassName}>
        <nav>
          <ul>
            {!isLoggedIn && (
              <>
                <li>
                  <Link href="/cadastro">Cadastre-se</Link>
                </li>
                <li>
                  <Link href="/login">Conecte-se</Link>
                </li>
              </>
            )}
            {isLoggedIn && (
              <>
                <li>
                  <Link href="/perfil">Perfil</Link>
                </li>
                <li>
                  <Link href="/login">Conecte com outra conta</Link>
                </li>
              </>
            )}
            <hr />
            <button onClick={toggleTheme}>
              {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Profile;
