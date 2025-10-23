//backend/src/routes/info.ts

import { Router } from 'express';

const info = require('../data/info.json');

const router = Router();

router.get('/', (req, res) => {
  res.json(info);
});

export default router;
