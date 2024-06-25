"use client"

import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Link from "next/link";
import { useState } from "react";
import './page.css';

export default function Home() {
  const [formData, setFormData] = useState({ user: '', email: '', senha: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:1895/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.user,
          email: formData.email,
          password: formData.senha,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('Usuário criado com sucesso');
      } else {
        setMessage(result.error || 'Falha ao registrar usuário');
      }
    } catch (error) {
      setMessage('Falha ao registrar usuário');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />

      <form className="Login" onSubmit={handleSubmit}>
        <h2 className="Titulo">Crie sua conta</h2>

        <div className="FormFields">
          <input 
            type="text" 
            id="user" 
            placeholder="User" 
            name="user"
            value={formData.user}
            onChange={handleChange}
            required
          />

          <input 
            type="text" 
            id="email" 
            placeholder="Email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        
          <input 
            type="password" 
            id="senha" 
            placeholder="Senha" 
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            required
          />
        </div>
        <div className='Botoes'>
          <button type="submit" className="Criar">Criar conta</button>
          <div className="Redirecionar">
            <p>Já tem uma conta?</p><Link className="Conecte" href="/login">Conecte-se.</Link>
          </div>
        </div>
        {message && <p>{message}</p>}
      </form>
              
      <Footer />
    </main>
  );
}
