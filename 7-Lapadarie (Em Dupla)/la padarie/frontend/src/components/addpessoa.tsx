// Modal.tsx
import React, { useState } from 'react';
import '../styles/addpessoa.css';
import axios from "axios";

interface AddPessoaProps {
    isVisible: boolean;
    onClose: () => void;
}

const AddPessoa: React.FC<AddPessoaProps> = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    const [nome, setNome] = useState('');
    const [paes, setPaes] = useState(0);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
          await axios.post('http://localhost:3001/create', { nome, paes });
          onClose();
          window.location.reload();
        } catch (error) {
            console.error('Erro ao adicionar pessoa: ', error);
        }
        };
      

    return (
        <div className="Modal">
            <form className="ModalContent" onSubmit={handleSubmit}>
                <h2 className="Titulo">Adicionar pessoa a fila</h2>
                
                <div className="FormFields">
                    <input 
                        type="text" 
                        id="nome" 
                        placeholder="Nome completo do cliente:" 
                        name="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required />
                
                    <input 
                        type="number" 
                        id="paes" 
                        placeholder="Total de pães:" 
                        name="paes"
                        value={paes}
                        onChange={(e) => setPaes(parseInt(e.target.value))}
                        required />
                </div>

                <div className='Botoes'>
                    <button type="submit" className="Botao Enviar">Enviar</button>
                    <button className="Botao Cancelar" onClick={onClose}>Cancelar</button>
                </div>
            </form>
        </div>
    );
};

export default AddPessoa;
