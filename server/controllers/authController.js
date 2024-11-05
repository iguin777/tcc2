const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.register = (req, res) => {
  const { nome, fk_equipe_id, email, telefone, usuario_rm, senha, etec } = req.body;
  User.findByEmail(email, (err, result) => {
    if (result.length) return res.status(400).json({ message: 'Email já cadastrado' });

    User.create({ nome, fk_equipe_id, email, telefone, usuario_rm, senha, etec }, (err) => {
      if (err) return res.status(500).json({ message: 'Erro ao registrar' });
      res.status(201).json({ message: 'Usuário registrado com sucesso' });
    });
  });
};

exports.login = (req, res) => {
  const { email, senha } = req.body;
  User.findByEmail(email, (err, result) => {
    if (err || !result.length) return res.status(400).json({ message: 'Usuário não encontrado' });

    const user = result[0];
    if (!bcrypt.compareSync(senha, user.senha)) {
      return res.status(400).json({ message: 'Senha incorreta' });
    }

    const token = jwt.sign({ id: user.id_usuario }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, user });
  });
};
