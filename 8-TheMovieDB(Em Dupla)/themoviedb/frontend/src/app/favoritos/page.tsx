import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { CgProfile } from "react-icons/cg";
import './page.css';
import Movie from "@/components/movie/movie";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Header />

      <div className="perfil">
        <div className="identificacao">
          <CgProfile className="foto"/>

          <div className="infoperfil">
            <p>usuario</p>
          </div>
        </div>

        <div className="corpo">
          <div className="favoritos">
            <hr />
              <p>omggg filmes favoritos titulo (quantidade)</p>
            <hr />
            
            <div className="favfilmes">
              <Movie />
            </div>
          </div>
    
          <div className="recomendados">
            <hr />
              <p>tem que ter recomendação nekkkkk titulo</p>
            <hr />
    
            <div className="recfilmes">
              <Movie />
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}