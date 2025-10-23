//src/components/layout/Header.tsx

import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { categoriasMenu } from '@data/categorias.config';
import type { GrupoMenu } from '@data/categorias.config';
import Logo from '@components/layout/logo';
import { AnimatePresence } from 'framer-motion';
import { SubmenuGrupo } from '@components/layout/SubmenuGrupo';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [grupoActivo, setGrupoActivo] = useState<string | null>(null);
  const location = useLocation();
  const submenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMenuOpen(false);
    setGrupoActivo(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (submenuRef.current && !submenuRef.current.contains(e.target as Node)) {
        setGrupoActivo(null);
      }
    };
    const handleScroll = () => setGrupoActivo(null);

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleGrupo = (titulo: string) => {
    setGrupoActivo((prev) => (prev === titulo ? null : titulo));
  };

  return (
    <header className="bg-green-800 text-white px-4 py-6 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" aria-label="Ir al inicio">
          <Logo />
          <span className="text-lg font-bold">Vivero El Carmelo</span>
        </Link>

        {/* Botón hamburguesa */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          aria-controls="menuTop"
          className="text-white text-2xl md:hidden"
        >
          <i className="fas fa-bars"></i>
        </button>

        {/* Menú principal */}
        <nav
          id="menuTop"
          role="navigation"
          aria-label="Menú principal"
          className={`w-full md:w-auto ${menuOpen ? 'block' : 'hidden'} md:flex justify-center mt-4 md:mt-0`}
        >
          <ul className="flex flex-col md:flex-row gap-4 md:gap-6 items-center relative">
            {/* Inicio */}
            <li>
              <Link
                to="/"
                className="flex items-center gap-2 py-2 px-4 font-semibold hover:bg-green-700 rounded transition-colors duration-200"
              >
                <i className="fas fa-home"></i> Inicio
              </Link>
            </li>

            {/* Categorías por grupo */}
            {categoriasMenu.map((grupo: GrupoMenu, index: number) => (
              <li key={index} className="relative group">
                <button
                  onClick={() => toggleGrupo(grupo.titulo)}
                  aria-haspopup="true"
                  aria-expanded={grupoActivo === grupo.titulo}
                  aria-label={`Abrir submenú de ${grupo.titulo}`}
                  className="flex items-center gap-2 py-2 px-4 font-semibold hover:bg-green-700 rounded transition-colors duration-200"
                >
                  <i className={`fas ${grupo.icono}`}></i> {grupo.titulo}
                </button>

                {/* Submenú modularizado */}
                <AnimatePresence>
                  {grupoActivo === grupo.titulo && (
                    <SubmenuGrupo grupo={grupo} submenuRef={submenuRef} />
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;