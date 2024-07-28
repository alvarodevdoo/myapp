import React from 'react';
/*import './ClienteList.css';*/

const ClienteList = ({ clientes }) => {
    return (
        <div className="cliente-list">
            <h2>Lista de Clientes</h2>
            <ul>
                {clientes.map(cliente => (
                    <li key={cliente.id}>
                        <p>Nome: {cliente.name}</p>
                        <p>Telefone: {cliente.phone}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClienteList;
