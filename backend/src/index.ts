//backend/src/index.ts

import dotenv from 'dotenv';
dotenv.config(); // ✅ Esto debe ir primero
import path from 'path';

import express from 'express';
import cors from 'cors';

import categoriasRouter from './routes/categorias';
import slidesRouter from './routes/slides';
import infoRouter from './routes/info';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

app.use(cors());
app.use(express.json());

// ✅ Servir imágenes y frontend
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../dist')));

// ✅ Rutas API
app.use('/api/categorias', categoriasRouter);
app.use('/api/slides', slidesRouter);
app.use('/api/info', infoRouter);

// ✅ Ruta de health
app.get('/api/health', (req, res) => {
  res.status(200).send('OK');
});

// ✅ Redirigir SPA
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

// Configuración del servidor
const PORT = Number(process.env.PORT) || 3000;

const HOST = process.env.HOST || '0.0.0.0';

app.get('/api/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});