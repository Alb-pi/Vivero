// src/components/Galeria.tsx

import { useState } from 'react';
import { Producto } from '@/types/Producto';
import { getRutaImagen } from '@/utils/getRutaImagen';

interface Props {
  productos: Producto[];
  tipo: string;
  onSelect: (producto: Producto) => void;
}

export default function Galeria({ productos, tipo, onSelect }: Props) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-green-800 mb-4">
        Categoría: {tipo}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productos.map((producto) => {
          const [fallbackActivo, setFallbackActivo] = useState(false);
          const rutaFinal = fallbackActivo
            ? getRutaImagen('/assets/img/portada2.jpg')
            : getRutaImagen(producto.imagen);

          return (
            <button
              key={producto.id}
              onClick={() => onSelect(producto)}
              className="border rounded-md p-4 bg-white shadow hover:shadow-lg transition text-left"
            >
              {producto.imagen ? (
                <img
                  src={rutaFinal}
                  alt={`Imagen de ${producto.nombre}`}
                  className="w-full h-32 object-cover rounded mb-2"
                  onError={() => {
                    console.warn(`Imagen no encontrada: ${producto.imagen}`);
                    setFallbackActivo(true);
                  }}
                />
              ) : (
                <div className="h-32 flex items-center justify-center bg-gray-100 text-sm italic text-gray-500 rounded mb-2">
                  Sin imagen
                </div>
              )}
              <h3 className="text-green-800 font-semibold">{producto.nombre}</h3>
            </button>
          );
        })}
      </div>
    </div>
  );
}