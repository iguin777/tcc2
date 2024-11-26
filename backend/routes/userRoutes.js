const express = require('express');
const router = express.Router();
const db = require('../config/database');

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

module.exports = router;
