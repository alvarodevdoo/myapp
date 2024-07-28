import React, { useState } from 'react';
import axios from 'axios';
import './ClienteForm.css';

const ClienteForm = ({ addCliente, updateCliente }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [existingCliente, setExistingCliente] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newCliente = { name, phone };

        try {
            const response = await axios.post('http://localhost:3001/clients', newCliente);
            addCliente(response.data);
            setName('');
            setPhone('');
            setExistingCliente(null);
        } catch (error) {
            if (error.response && error.response.status === 409) {
                setExistingCliente(error.response.data.clienteExistente);
            } else {
                console.error('Erro ao cadastrar cliente', error);
            }
        }
    };

    const handleUpdate = async () => {
        const updatedCliente = { ...existingCliente, name, phone };
        try {
            const response = await axios.put(`http://localhost:3001/clients/${existingCliente.id}`, updatedCliente);
            updateCliente(response.data);
            setExistingCliente(null);
            setName('');
            setPhone('');
        } catch (error) {
            console.error('Erro ao atualizar cliente', error);
        }
    };

    const handleFillForm = () => {
        setName(existingCliente.name);
        setPhone(existingCliente.phone);
        setExistingCliente(null);
    };

    const handleCancel = () => {
        setExistingCliente(null);
    };

    return (
        <div>
            {existingCliente ? (
                <div className="popup">
                    <h3>Cliente já existe</h3>
                    <div className="popup-content">
                        <div className="cliente-atual">
                            <h4>Cliente Atual:</h4>
                            <p>Nome: {existingCliente.name}</p>
                            <p>Telefone: {existingCliente.phone}</p>
                        </div>
                        <div className="cliente-novo">
                            <h4>Novo Cliente:</h4>
                            <p>Nome: {name}</p>
                            <p>Telefone: {phone}</p>
                        </div>
                    </div>
                    <button onClick={handleFillForm}>Ir para Cadastro</button>
                    <button onClick={handleUpdate}>Atualizar Cadastro</button>
                    <button onClick={handleCancel}>Cancelar</button>
                </div>
            ) : (
                <form className="cliente-form" onSubmit={handleSubmit}>
                    <div>
                        <label>Nome:</label>
                        <input 
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                        />
                    </div>
                    <div>
                        <label>Telefone:</label>
                        <input 
                            type="text" 
                            value={phone} 
                            onChange={(e) => setPhone(e.target.value)} 
                            required 
                        />
                    </div>
                    <button type="submit">Cadastrar</button>
                </form>
            )}
        </div>
    );
};

export default ClienteForm;
