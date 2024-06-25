
import React, { useEffect, useState} from 'react';
import axios from 'axios';
import '../styles/historico.css';


interface HistoricoProps {
    isVisible: boolean;
    onClose: () => void;
}

interface HistoricoItem {
    id: number;
    nome: string;
    paes: number;
    valor: number;
    createdAt: string;
}

const Historico: React.FC<HistoricoProps> = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    const [historico, setHistorico] = useState<HistoricoItem[]>([]);
      
    useEffect(() => {
        const fetchHistorico = async () => {
            try {
                const response = await axios.get('http://localhost:3001/historico');
                setHistorico(response.data);
            } catch (error) {
                console.error('Erro ao buscar histórico: ', error);
            }
        };
        if (isVisible) {
            fetchHistorico();
        }
    }, [isVisible]);

    return (
        <div className="Modal">
            <div className='HistoricoContent'>
                <div className='Topo'>
                    <button className="BotaoHistorico" onClick={onClose}>X</button>

                    <p className='TituloHistorico'>Histórico</p>
                </div>

                <div className="ClientesHistorico">
                    {historico.map(item => (
                        <div className="ClienteH" key={item.id}>
                            <div className="CredencialH">
                                <div className="NomeH">
                                    <p>{item.nome}</p>
                                </div>
                    
                                <div className="InfoH">
                                    <div className='SubInfoH'>
                                        <p className='Valor'>Total de pães:</p>
                                        <p>{item.paes} pães</p>
                                    </div>
                    
                                    <div className='SubInfoH'>
                                        <p className='Valor'>Total a pagar:</p>
                                        <p>R$ {item.valor.toFixed(2)}</p>
                                    </div>
                                    
                                    <div className='SubInfoH'>
                                        <p className='Valor'>Data:</p>
                                        <p>{new Date(item.createdAt).toLocaleString()}</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    ))};   
                </div>
            
            </div>
        </div>
    );
};

export default Historico;
