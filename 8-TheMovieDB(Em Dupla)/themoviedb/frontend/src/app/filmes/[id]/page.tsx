"use client";
import { useRouter } from 'next/router';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import Star from '@/components/favorito/favorito';
import './filme.css';


interface FilmeProps {
    filme: {
        id: number;
        imageSrc: string;
        title: string;
        anoLancamento: string;
        bilheteria: string;
        idiomaOriginal: string;
        sinopse: string;
    };
}

const Filme = ({ filme }: FilmeProps) => {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Carregando...</div>;
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Header />

            <div className="corpo">
                <div className="filme">
                    <img src={filme.imageSrc} alt={filme.title} />

                    <div className="detalhes">
                        <div className="titulo">
                            <h2>Título: {filme.title}</h2>
                            <Star />
                        </div>
                        <p>Ano de Lançamento: {filme.anoLancamento}</p>
                        <p>Bilheteria: {filme.bilheteria}</p>
                        <p>Idioma Original: {filme.idiomaOriginal}</p>
                        <p>Sinopse: {filme.sinopse}</p>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
};

