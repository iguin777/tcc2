import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conexão com o banco de dados
const db = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Definindo rota para registrar usuários
app.post('/auth/register', async (req, res) => {
    const { nome, fk_equipe_id, email, telefone, usuario_rm, senha, etec } = req.body;

    try {
        const [result] = await db.query(
            'INSERT INTO usuario (nome, fk_equipe_id, email, telefone, usuario_rm, senha, etec) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [nome, fk_equipe_id, email, telefone, usuario_rm, senha, etec]
        );
        res.status(201).json({ id: result.insertId, ...req.body });
    } catch (error) {
        console.error('Erro ao registrar usuário:', error);
        res.status(500).json({ error: 'Erro ao registrar usuário' });
    }
});

// Definindo rota para buscar usuários
app.get('/usuarios', async (req, res) => {
    try {
        const [usuarios] = await db.query('SELECT * FROM usuario');
        res.json(usuarios);
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
});

// Iniciando o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
