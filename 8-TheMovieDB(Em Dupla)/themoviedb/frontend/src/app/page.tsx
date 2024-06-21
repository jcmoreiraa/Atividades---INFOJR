import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import './page.css';
import Movie from "@/components/movie/movie";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Header />

      <div className="homepage">
        <div className="lancamento">
          <p>aqui coloca um lançamento!!!! imagem</p>
          <p>titulo</p>
          <p>trecho sinopse</p>
        </div>

        <div className="carrossel">
          <Movie />
        </div>

        <div className="meio">
          <div className="tabela">
            <p>aqui faz a tabelinha com as categorias!!!</p>
            <p>o padrao sao os lançamentos</p>
          </div>

          <div className="filtrados">
            <Movie />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
