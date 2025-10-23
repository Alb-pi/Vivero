//backend/src/scripts/verificaimagenes.ts

import fs from 'fs';
import path from 'path';
import info from '../data/info.json'; // ✅ ruta relativa al script

const rutaPublic = path.resolve(__dirname, '../../public'); // ✅ apunta a la raíz

function verificarRuta(rutaRelativa: string): boolean {
  const rutaLocal = path.join(rutaPublic, rutaRelativa.replace(/^\//, ''));
  return fs.existsSync(rutaLocal);
}

function verificarImagenes() {
  const rutas: string[] = [];

  rutas.push('/assets/img/logo1.jpg');
  rutas.push('/assets/img/portada2.jpg');

  info.redes?.forEach((red) => {
    if (red.icono.includes('.jpg') || red.icono.includes('.png')) {
      rutas.push(red.icono);
    }
  });

  rutas.forEach((ruta) => {
    const existe = verificarRuta(ruta);
    console.log(`${ruta} → ${existe ? '✅ Existe' : '❌ No encontrada'}`);
  });
}

verificarImagenes();