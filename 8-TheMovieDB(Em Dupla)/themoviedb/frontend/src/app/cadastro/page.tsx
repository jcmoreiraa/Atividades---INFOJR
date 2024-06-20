import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Link from "next/link";
import './page.css'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />

      <form className="Login">
          <h2 className="Titulo">Crie sua conta</h2>
          
          <div className="FormFields">
          <input 
                  type="text" 
                  id="user" 
                  placeholder="User" 
                  name="user"
                  required />

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
              <button type="submit" className="Criar">Criar conta</button>
              <div className="Redirecionar">
                <p>Já tem uma conta?</p><Link className="Conecte" href="/login">Conecte-se.</Link>
              </div>
          </div>
        </form>
              
      <Footer />
    </main>
  );
};