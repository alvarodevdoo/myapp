const fs = require('fs');
const path = require('path');
const clientePath = path.join(__dirname, '..', 'data', 'clientes.json');

// Verifica se o arquivo existe, caso contrário, cria um novo arquivo vazio
if (!fs.existsSync(clientePath)) {
    fs.writeFileSync(clientePath, '[]', 'utf8');
}

// Função para ler o arquivo JSON
exports.getAllClientes = (req, res) => {
    const data = fs.readFileSync(clientePath, 'utf8');
    const clientes = JSON.parse(data);
    res.json(clientes);
};

// Função para criar um novo cliente
exports.createCliente = (req, res) => {
    const { name, phone } = req.body;
    const clientes = JSON.parse(fs.readFileSync(clientePath, 'utf8'));

    const clienteExistente = clientes.find(
        (cliente) => cliente.name === name || cliente.phone === phone
    );

    if (clienteExistente) {
        return res.status(409).json({ clienteExistente });
    }

    const newCliente = { id: Date.now(), name, phone };
    clientes.push(newCliente);
    fs.writeFileSync(clientePath, JSON.stringify(clientes, null, 2));

    res.status(201).json(newCliente);
};

// Função para atualizar um cliente existente
exports.updateCliente = (req, res) => {
    const { id } = req.params;
    const { name, phone } = req.body;
    const clientes = JSON.parse(fs.readFileSync(clientePath, 'utf8'));
    const index = clientes.findIndex((cliente) => cliente.id == id);
    if (index === -1) {
        return res.status(404).json({ message: 'Cliente não encontrado' });
    }

    clientes[index] = { id: Number(id), name, phone };
    fs.writeFileSync(clientePath, JSON.stringify(clientes, null, 2));

    res.json(clientes[index]);
};

exports.updateCliente = (req, res) => {
    try {
        const { id } = req.params;
        const { name, phone } = req.body;
        
        //console.log('Iniciando atualização do cliente...');
        
        const clientes = JSON.parse(fs.readFileSync(clientePath, 'utf8'));

        //console.log('dados req', id, name, phone);
        //console.log('dados json', clientes);

        const index = clientes.findIndex((cliente) => cliente.id == id);

        if (index === -1) {
            console.log('Cliente não encontrado');
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }

        clientes[index] = { id: Number(id), name, phone };

        fs.writeFileSync(clientePath, JSON.stringify(clientes, null, 2));

        //console.log('Cliente atualizado com sucesso:', clientes[index]);
        
        res.json(clientes[index]);
    } catch (error) {
        console.error('Erro ao atualizar cliente:', error);
        res.status(500).json({ message: 'Erro ao atualizar cliente' });
    }
};
