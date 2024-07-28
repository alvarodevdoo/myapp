import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ClienteList from '../components/ClienteList';
import ClienteForm from '../components/ClienteForm';

const Page1 = () => {
  const [clientes, setClientes] = useState([]);
    const [showForm, setShowForm] = useState(false);

    //UseEffect para buscar os clientes
    useEffect(() => {
        fetchClientes();
    }, []);

    const fetchClientes = async () => {
        try {
            const response = await axios.get('http://localhost:3001/clients');
            setClientes(response.data);
        } catch (error) {
            console.error('Erro ao buscar clientes', error);
        }
    };

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const addCliente = (newCliente) => {
        setClientes([...clientes, newCliente]);
    };

    return (
        <div className="page-content">
            <h2>Clientes</h2>
            <button onClick={toggleForm}>
                {showForm ? 'Fechar Formulário' : 'Cadastrar Novo Cliente'}
            </button>
            {showForm && <ClienteForm addCliente={addCliente} />}
            <ClienteList clientes={clientes} />
        </div>
    );
};

export default Page1;
