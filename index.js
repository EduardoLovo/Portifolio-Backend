if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

// Importa express
const express = require('express');
// Importa mongoose
const mongoose = require('mongoose');
// Importa cors
const cors = require('cors');

// Importa modulo
const Certificado = require('./models/certificado');
const Stack = require('./models/stack');
const conn = require('./models/conn/conn');

// Importa Rotas
const certificadosRouter = require('./routes/certificados.routes');
const stacksRouter = require('./routes/stacks.routes')

// =========================================================

const app = express();

const port = 3000;

app.use(express.json());
app.use(cors());


// Get
app.get('/', (req, res) => {
    res.send('Api Portfólio');
})


app.use('/certificados', certificadosRouter);
app.use('/stacks', stacksRouter);



//Conexão local com mongodb

const db_url = process.env.DB_URL;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_data = process.env.DB_DATA;

conn(db_url, db_user, db_pass, db_data);


// app.listen(process.env.PORT, () => {
//     console.log(`Rodando com banco`);
// });

app.listen(port, () => {
    console.log(`Rodando na porta http://localhost:${port}`);
})

