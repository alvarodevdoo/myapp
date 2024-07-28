const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../data/clients.json');

// Função para ler o arquivo JSON
const readDataFromFile = () => {
    try {
        if (!fs.existsSync(filePath)) {
            return [];
        }
        const data = fs.readFileSync(filePath, 'utf-8');
        if (!data) {
            return [];
        }
        return JSON.parse(data);
    } catch (error) {
        console.error('Erro ao ler o arquivo JSON:', error);
        return [];
    }
};

// Função para escrever no arquivo JSON
const writeDataToFile = (data) => {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Erro ao escrever no arquivo JSON:', error);
    }
};

exports.getAll = () => {
    return readDataFromFile();
};

exports.create = (cliente) => {
    const clientes = readDataFromFile();
    clientes.push(cliente);
    writeDataToFile(clientes);
};

exports.writeDataToFile = writeDataToFile;
