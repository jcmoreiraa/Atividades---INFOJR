"use client";

import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import "./page.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [formData, setFormData] = useState({ email: "", senha: "" });
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:1895/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.senha,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Login bem sucedido");
        localStorage.setItem("token", result.token);
        router.push("/");
      } else {
        setMessage(result.error || "Falha ao logar usuário");
      }
    } catch (error) {
      setMessage("Falha ao logar usuário");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />

      <form className="Login" onSubmit={handleSubmit}>
        <h2 className="Titulo">Log in</h2>

        <div className="FormFields">
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
            type="text"
            id="senha"
            placeholder="Senha"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            required
          />
        </div>
        <div className="Botoes">
          <button type="submit" className="Criar">
            Entrar
          </button>
          <div className="Redirecionar">
            <p>Não tem uma conta?</p>
            <Link className="Conecte" href="/cadastro">
              Cadastre-se.
            </Link>
          </div>
        </div>
        {message && <p>{message}</p>}
      </form>

      <Footer />
    </main>
  );
}
