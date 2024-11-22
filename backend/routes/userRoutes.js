const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Rota para criar um novo usuário
router.post('/create', (req, res) => {
    const { nome, fk_equipe_id, email, telefone, usuario_rm, senha, etec } = req.body;

    const sql = `
        INSERT INTO usuario (nome, fk_equipe_id, email, telefone, usuario_rm, senha, etec) 
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(sql, [nome, fk_equipe_id, email, telefone, usuario_rm, senha, etec], (err, result) => {
        if (err) {
            console.error('Erro ao criar usuário:', err);
            return res.status(500).json({ message: 'Erro ao criar usuário.' });
        }
        res.status(201).json({ message: 'Usuário criado com sucesso!' });
    });
});

module.exports = router;
