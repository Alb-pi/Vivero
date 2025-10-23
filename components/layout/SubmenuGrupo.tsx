// src/components/layout/SubmenuGrupo.tsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { GrupoMenu } from '@data/categorias.config';

function getRuta(cat: { slug: string }, grupo: GrupoMenu) {
  const slug = cat.slug.toLowerCase();
  return grupo.titulo === 'Otro' && ['nosotros', 'contacto'].includes(slug)
    ? `/${slug}`
    : `/categoria/${slug}`;
}

export function SubmenuGrupo({
  grupo,
  submenuRef,
}: {
  grupo: GrupoMenu;
  submenuRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <motion.div
      ref={submenuRef}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.2 }}
      role="menu"
      aria-label={`Submenú de ${grupo.titulo}`}
      className="absolute left-full top-0 mt-0 bg-white text-green-800 rounded shadow-lg z-10 min-w-[220px] p-2"
    >
      <ul>
        {grupo.categorias.map((cat, idx) => (
          <li key={idx}>
            <Link
              to={getRuta(cat, grupo)}
              className="block px-4 py-2 hover:bg-green-100 transition-colors duration-150"
            >
              {cat.nombre}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}