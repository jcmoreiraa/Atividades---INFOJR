import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import './page.css';
import React from 'react';
import MultiItemCarousel from "@/components/carousel/carousel";



export default function Home() {

  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Header />

      <div className="homepage">
        <div className="lancamento">
          <img src="./images/poster.jpg" alt="Imagem de lançamento" />
          <div className="texto">
            <h1>Homem-Aranha 2</h1>
            <p>O Dr. Otto Octavius é transformado em Doutor Octopus quando uma falha em uma experiência de fusão nuclear resulta em uma explosão que mata sua esposa. Ele culpa o Homem-Aranha pelo acidente e deseja vingança. Enquanto isso, o alter ego do herói, Peter Parker, perde seus poderes. Para complicar as coisas, o seu melhor amigo odeia o Homem-Aranha e sua amada fica noiva.</p>
          </div>
        </div>

        <div className="carrossel">
          <MultiItemCarousel />
        </div>

        <div className="meio">
          <div className="tabela">
            <p>aqui faz a tabelinha com as categorias!!!</p>
            <p>o padrao sao os lançamentos</p>
          </div>

          <div className="filtrados">
            
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
