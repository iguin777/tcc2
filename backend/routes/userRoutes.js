const express = require('express');
const router = express.Router();
const db = require('../config/database');


// Rota para buscar os dados do usuário pelo ID
router.get('/usuario/:id', (req, res) => {
    const { id } = req.params;

    const sql = 'SELECT * FROM usuario WHERE id = ?';
    db.query(sql, [id], (err, results) => {
        if (err) {
            console.error('Erro ao buscar dados do usuário:', err);
            return res.status(500).json({ message: 'Erro ao buscar dados do usuário.' });
        }
        if (results.length > 0) {
            res.status(200).json(results[0]);
        } else {
            res.status(404).json({ message: 'Usuário não encontrado.' });
        }
    });
});


// Rota para autenticar usuário
router.post('/login', (req, res) => {
    const { email, senha } = req.body;

    const sql = 'SELECT * FROM usuario WHERE email = ? AND senha = ?';
    db.query(sql, [email, senha], (err, results) => {
        if (err) {
            console.error('Erro ao autenticar usuário:', err);
            return res.status(500).json({ message: 'Erro ao autenticar usuário.' });
        }
        if (results.length > 0) {
            res.status(200).json({ message: 'Login bem-sucedido!', user: results[0] });
        } else {
            res.status(401).json({ message: 'Credenciais inválidas.' });
        }
    });
});

router.post('/create', (req, res) => {
    const { nome, fk_equipe_id, email, telefone, usuario_rm, senha, etec } = req.body;

    const sql = `INSERT INTO usuario (nome, fk_equipe_id, email, telefone, usuario_rm, senha, etec) 
                 VALUES (?, ?, ?, ?, ?, ?, ?)`;
    db.query(sql, [nome, fk_equipe_id, email, telefone, usuario_rm, senha, etec], (err, result) => {
        if (err) {
            console.error('Erro ao cadastrar usuário:', err);
            return res.status(500).json({ message: 'Erro ao cadastrar usuário.' });
        }
    });
});


module.exports = router;
