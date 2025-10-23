//backend/src/routes/categorias.ts

import { Router } from 'express';
import fs from 'fs';
import path from 'path';

const router = Router();

router.get('/:nombre', (req, res) => {
  const { nombre } = req.params;
  const filePath = path.join(__dirname, '../data', `${nombre}.json`);

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: 'Categoría no encontrada' });
  }

  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  res.json(data);
});

router.get('/', (req, res) => {
  const filePath = path.join(__dirname, '../data/categoriasIndex.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  res.json(data);
});

export default router;