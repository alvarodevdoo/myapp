const express = require('express');
const cors = require('cors');
const clientRoutes = require('./routes/clientRoutes');
const app = express();
const PORT = process.env.PORT || 3001;

// Requisição do frontend (http://localhost:3000) para o backend (http://localhost:3001), o CORS não deve mais bloquear a requisição
app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(express.json());


app.use('/clients', clientRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
