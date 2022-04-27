if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

// Importa express
const express = require('express');
// Importa mongoose
const mongoose = require('mongoose');
// Importa cors
const cors = require('cors');

// Importa models
const Certificado = require('./models/certificado');
const Stack = require('./models/stack');
const conn = require('./models/conn/conn');
const User = require('./models/usuario');

// Importa Rotas
const certificadosRouter = require('./routes/certificados.routes');
const stacksRouter = require('./routes/stacks.routes');
const projetosRouter = require('./routes/projetos.routes');
const usuariosRouter = require('./routes/usuario.routes');
const loginRouter = require('./routes/login.routes');


// Import autenticação
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// =========================================================

const app = express();

const port = 3000;

app.use(express.json());
app.use(cors());




// --------------------------

// Private Route
// app.get('/user/:id', checkToken, async (req, res) => {
//     const id = req.params.id

//     // chheck if user existe
//     const user = await User.findById(id, '-senha')

//     if (!user) {
//         return res.status(404).json({ msg: "Usuario não encontrado" })
//     }

//     res.status(200).json({ user })
// })

// function checkToken(req, res, next) {

//     const authHeader = req.headers['authorization']
//     const token = authHeader && authHeader.split(' ')[1]

//     if (!token) {
//         return res.status(401).json({ msg: "Acesso negado" })
//     }

//     try {
//         const secret = process.env.SECRET

//         jwt.verify(token, secret)

//         next()

//     } catch (error) {
//         res.status(400).json({ msg: "Token invalido" })
//     }
// }

// =========================================================


// Rotas ==============================
// Get
app.get('/', (req, res) => {
    res.send('Api Portfólio');
})

app.use('/certificados', certificadosRouter);
app.use('/stacks', stacksRouter);
app.use('/projetos', projetosRouter);
app.use('/usuarios', usuariosRouter);
app.use('/login', loginRouter);



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

// npm run dev