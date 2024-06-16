"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import "../styles/header.css"

export default function Header() {
    const [totalPessoas, setTotalPessoas] = useState<number | null>(null);
    const [totalPaes, setTotalPaes] = useState<number | null>(null);
    const [totalEntrada, setTotalEntrada] = useState<number | null>(null);

    const fetchDados = async () => {
        try {
            const responsePessoas = await axios.get('http://localhost:3001/totalpessoas');
            setTotalPessoas(responsePessoas.data.totalPessoas);
            
            const responsePaes = await axios.get('http://localhost:3001/totalpaes');
            setTotalPaes(responsePaes.data.somaQuantidadePaes);

            const responseEntrada = await axios.get('http://localhost:3001/totalentrada');
            setTotalEntrada(responseEntrada.data.somaValorEntrada);
        } catch (error) {
            console.error('Erro ao buscar dados: ', error);
        }
    };
    
    useEffect(() => {
        fetchDados();
    }, []);

    return (
    <div className="header">
        <div className="HeaderBg">
            <div className="top-half" />
            <div className="bottom-half" />
        </div>
        <Image
            src="/Logo.svg"
            alt="La Padarie Logo"
            width={155}
            height={113}
            priority
            />

        <div className="TotalTransactions">
            <div className="Caixinha">
                <div className="Etiqueta">
                    <p>Pessoas na fila</p>
                    <Image
                        src="/Pessoas.svg"
                        alt="Pessoas Icon"
                        width={25}
                        height={22}
                        
                        />    
                </div>

                <div className="Total">
                    <p>{totalPessoas !== null ? totalPessoas : 'Carregando...'}</p>
                </div>
            </div>

            <div className="Caixinha">
                <div className="Etiqueta">
                    <p>Pães vendidos</p> 
                    <Image
                        src="/Carrinho.svg"
                        alt="CarrinhoIcon"
                        width={25}
                        height={22}
                        
                        />   
                </div>

                <div className="Total">
                    <p>{totalPaes !== null ? totalPaes : 'Carregando...'}</p>
                </div>
            </div>

            <div className="Caixinha AmountTotal TT2">
                <div className="Etiqueta">
                    <p>Entrada</p>
                    <Image
                        src="/Dinheiro.svg"
                        alt="Dinheiro Icon"
                        width={12}
                        height={22}
                        
                        />    
                </div>

                <div className="Total AmountTotal">
                    <p>{totalEntrada !== null ? `R$ ${totalEntrada.toFixed(2)}` : 'Carregando...'}</p>
                </div>
            </div>
        </div>

    </div>
    )
};