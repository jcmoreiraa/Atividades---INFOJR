"use client";

import React, { useEffect,useState } from 'react';
import Image from "next/image";
import axios from 'axios';
import "../styles/queue.css";
import AddPessoa from './addpessoa';
import EditPessoa from './editpessoa';
import Historico from './historico';

interface Fila {
  id: number;
  nome: string;
  paes: number;
  valor: number;
}


export default function Queue() { 
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isEditModalVisible, setIsEditModalVisible] = useState(false);
    const [isHistoricoModalVisible, setIsHistoricoModalVisible] = useState(false);
    const [selectedCliente, setSelectedCliente] = useState<Fila | null>(null);
    const [fila, setFila] = useState<Fila[]>([]);

    const handleAddPessoaClick = () => {
        setIsModalVisible(true);
    };

    const handleEditPessoaClick = (cliente: Fila) => {
      setSelectedCliente(cliente);
      setIsEditModalVisible(true);
    };

    const handleHistoricoClick = () => {
      setIsHistoricoModalVisible(true);
    };

    const closeModal = () => {
      setIsModalVisible(false);
      fetchFila();
    };

    const closeEditModal = () => {
      setIsEditModalVisible(false);
      fetchFila();
    };

    const closeHistoricoModal = () => {
      setIsHistoricoModalVisible(false);
    };

    const fetchFila = async () => {
      try {
        const response = await axios.get('http://localhost:3001/fila');
          setFila(response.data);
      } catch (error) {
        console.error('Erro ao buscar fila: ', error);
      }
    };

    useEffect(() => {
      fetchFila();
    }, []);

    const handleRemoveCliente = async (id: number) => {
      try {
        await axios.delete(`http://localhost:3001/delete/${id}`);
        setFila(fila.filter(pessoa => pessoa.id !== id));
        window.location.reload();
      } catch (error) {
        console.error('Erro ao remover cliente: ', error);
      }
    };

    return (
        <div className="Queue">
          <div className='Edit'>
            <button className="AddPessoa Nome" onClick={handleAddPessoaClick}>+ Adicionar pessoa a fila</button>
            <button className="Historico Nome" onClick={handleHistoricoClick}>Histórico de pedidos</button>
          </div>

            <AddPessoa isVisible={isModalVisible} onClose={closeModal} />
            {selectedCliente && (
                <EditPessoa isVisible={isEditModalVisible} onClose={closeEditModal} cliente={selectedCliente} />
            )}
            <Historico isVisible={isHistoricoModalVisible} onClose={closeHistoricoModal} />

            <div className="Clientes">
                {fila.map((pessoa) => (
                <div className="Cliente" key={pessoa.id}>
                        <div className="Credencial">
                            <div className="Nome">
                                {pessoa.nome}
                            </div>

                            <div className="Info">
                                <div className='SubInfo'>
                                    <p className='Valor'>Total de pães:</p>
                                    <p>{pessoa.paes} pães</p>
                                </div>

                                <div className='SubInfo'>
                                    <p className='Valor'>Total a pagar:</p>
                                    <p>R$ {pessoa.valor.toFixed(2)}</p>
                                </div>
                            </div>
                        </div>

                        <div className="SVG">
                          <Image className="Lapis"
                              src="/Lapis.svg"
                              alt="Lapis Icon"
                              width={34}
                              height={35}
                              style={{ cursor: 'pointer' }}
                              onClick={() => handleEditPessoaClick(pessoa)}
                              />

                          <Image className="Lixeira"
                              src="/Lixeira.svg"
                              alt="Lixeira Icon"
                              width={24}
                              height={25}
                              style={{ cursor: 'pointer' }}
                              onClick={() => handleRemoveCliente(pessoa.id)}
                              />
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};
