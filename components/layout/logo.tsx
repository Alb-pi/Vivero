// src/components/layout/logo.tsx

import { useState } from 'react';
import { getRutaImagen } from '@/utils/getRutaImagen';

function Logo() {
  const [fallbackActivo, setFallbackActivo] = useState(false);

  return (
    <div>
      <img
        src={
          fallbackActivo
            ? getRutaImagen('/assets/img/portada2.jpg')
            : getRutaImagen('/assets/img/logo1.jpg')
        }
        alt="Logo"
        className="h-24"
        onError={() => {
          console.warn('Logo no encontrado');
          setFallbackActivo(true);
        }}
      />
    </div>
  );
}

export default Logo;