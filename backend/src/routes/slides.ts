// backend/routes/slides.ts

import express from 'express';
const router = express.Router();

const slides = [
  {
    img: "/assets/img/background21.jpg",
    alt: "Rosales en flor",
    caption: "Rosales en plena floración 🌹",
  },
  {
    img: "/assets/img/background41.jpg",
    alt: "Macetas decorativas",
    caption: "Macetas artesanales para tu jardín 🪴",
  },
  {
    img: "/assets/img/background31.jpg",
    alt: "Coníferas verdes",
    caption: "Coníferas resistentes todo el año 🌲",
  },
];

router.get('/', (req, res) => {
  res.json(slides);
});

export default router;