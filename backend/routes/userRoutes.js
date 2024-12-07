const express = require('express');
const router = express.Router();
const getDatabase = require('../config/database');

// Rota para buscar os dados do usuário pelo ID
router.get('/usuario/:id', async (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM usuario WHERE id_usuario = ?';

    try {
        const db = await getDatabase();
        const [results] = await db.query(sql, [id]);

        if (results.length > 0) {
            res.status(200).json(results[0]);
        } else {
            res.status(404).json({ message: 'Usuário não encontrado.' });
        }
    } catch (err) {
        console.error('Erro ao buscar dados do usuário:', err);
        res.status(500).json({ message: 'Erro ao buscar dados do usuário.' });
    }
});

// Rota para autenticar usuário
router.post('/login', async (req, res) => {
    const { email, senha } = req.body;
    const sql = 'SELECT * FROM usuario WHERE email = ? AND senha = ?';

    try {
        const db = await getDatabase();
        const [results] = await db.query(sql, [email, senha]);

        if (results.length > 0) {
            res.status(200).json({ message: 'Login bem-sucedido!', user: results[0] });
        } else {
            res.status(401).json({ message: 'Credenciais inválidas.' });
        }
    } catch (err) {
        console.error('Erro ao autenticar usuário:', err);
        res.status(500).json({ message: 'Erro ao autenticar usuário.' });
    }
});

router.post('/create', async (req, res) => {
    const { nome, fk_equipe_id, email, telefone, usuario_rm, senha, etec } = req.body;
    const sql = `INSERT INTO usuario (nome, fk_equipe_id, email, telefone, usuario_rm, senha, etec) 
                 VALUES (?, ?, ?, ?, ?, ?, ?)`;

    try {
        const db = await getDatabase();
        const [result] = await db.query(sql, [nome, fk_equipe_id, email, telefone, usuario_rm, senha, etec]);
        
        // Handle result
        res.status(201).json({ message: 'Usuário criado com sucesso!', userId: result.insertId });
    } catch (err) {
        console.error('Erro ao cadastrar usuário:', err);
        res.status(500).json({ message: 'Erro ao cadastrar usuário.' });
    }
});


module.exports = router;
