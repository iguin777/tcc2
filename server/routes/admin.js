// server/routes/userRoutes.js
import express from 'express';
import db from '../db.js';


const router = express.Router();

router.get('/usuarios', async (req, res) => {
  const query = 'SELECT * FROM usuario';
  try {
    const [usuarios] = await db.query(query);
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
});

export default router;
