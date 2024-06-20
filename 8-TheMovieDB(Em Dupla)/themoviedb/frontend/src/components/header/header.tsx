import Link from "next/link";
import './header.css';
import SearchBar from "../searchbar/searchbar";

export default function Header() {
    return (
    <div className="header">

        <Link href="/">
            Home
        </Link>

        <nav>
            <ul>
              <SearchBar />

              <li>
                <Link href="/favoritos">
                  Favoritos
                </Link>
              </li>
              <li>
                <Link href="/login">
                  Login
                </Link>
              </li>
              
              <p>toggle button</p>
            </ul>
        </nav>
        
    </div>
    )
};
