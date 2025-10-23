//src/components/ui/Listaitems

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Producto } from '@/types/Producto';
import { getRutaImagen } from '@/utils/getRutaImagen';

interface Props {
  item: Producto | null;
}

export default function ListaItems({ item }: Props) {
  const [fallbackActivo, setFallbackActivo] = useState(false);

  return (
    <section className="detalle p-4 border rounded-md bg-white shadow-md">
      <AnimatePresence mode="wait">
        {item ? (
          <motion.div
            key={item.nombre}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {item.imagen ? (
              <img
                src={
                  fallbackActivo
                    ? getRutaImagen('/assets/img/portada2.jpg')
                    : getRutaImagen(item.imagen)
                }
                alt={`Imagen de ${item.nombre}`}
                className="w-full h-auto rounded-md object-cover"
                onError={() => {
                  console.warn(`Imagen no encontrada: ${item.imagen}`);
                  setFallbackActivo(true);
                }}
              />
            ) : (
              <div className="imagen-fallback text-center text-sm italic text-gray-500">
                Sin imagen disponible
              </div>
            )}
            <h3 className="text-xl font-semibold text-green-800">{item.nombre}</h3>
            <p className="text-gray-700">
              {item.descripcion || 'Sin descripción disponible.'}
            </p>
          </motion.div>
        ) : (
          <motion.p
            key="placeholder"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center text-gray-500 italic"
          >
            Seleccioná un ítem para ver detalles
          </motion.p>
        )}
      </AnimatePresence>
    </section>
  );
}