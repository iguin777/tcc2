const db = require('../db');
const bcrypt = require('bcryptjs');

const User = {
  findByEmail: (email, callback) => {
    db.query('SELECT * FROM usuario WHERE email = ?', [email], callback);
  },
  create: (userData, callback) => {
    const hashedPassword = bcrypt.hashSync(userData.senha, 10);
    db.query(
      'INSERT INTO usuario (nome, fk_equipe_id, email, telefone, usuario_rm, senha, etec) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [userData.nome, userData.fk_equipe_id, userData.email, userData.telefone, userData.usuario_rm, hashedPassword, userData.etec],
      callback
    );
  },
  getAllUsers: (callback) => {
    db.query('SELECT * FROM usuario', callback);
  },
  updateUser: (id, data, callback) => {
    db.query(
      'UPDATE usuario SET nome = ?, email = ?, telefone = ?, etec = ? WHERE id_usuario = ?',
      [data.nome, data.email, data.telefone, data.etec, id],
      callback
    );
  },
  deleteUser: (id, callback) => {
    db.query('DELETE FROM usuario WHERE id_usuario = ?', [id], callback);
  }
};

module.exports = User;
