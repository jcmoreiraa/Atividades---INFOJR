import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import './page.css';
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />

      <form className="Login">
          <h2 className="Titulo">Log in</h2>
          
          <div className="FormFields">
              <input 
                  type="text" 
                  id="email" 
                  placeholder="Email" 
                  name="email"
                  required />
          
              <input 
                  type="text" 
                  id="senha" 
                  placeholder="Senha" 
                  name="senha"
                  required />
          </div>
          <div className='Botoes'>
              <button type="submit" className="Criar">Entrar</button>
              <div className="Redirecionar">
                <p>Não tem uma conta?</p><Link className="Conecte" href="/cadastro">Cadastre-se.</Link>
              </div>
          </div>
      </form>

      <Footer />
    </main>
  );
}