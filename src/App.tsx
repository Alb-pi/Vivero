// src/App.tsx

import { Routes, Route } from 'react-router-dom';
import Inicio from '@pages/inicio';
import { InfoProvider } from '@/context/InfoContext';
import CategoriaPage from '@/pages/CategoriaPage';
import Nosotros from '@/pages/Nosotros';
import Contacto from '@/pages/Contacto';




export default function App() {
  return (
    <InfoProvider>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/categoria/:nombre" element={<CategoriaPage />} />
        <Route path="/nosotros" element={<Nosotros />} /> {/* ← esta línea */}
        <Route path="/contacto" element={<Contacto />} /> {/* ← esta línea */}



      </Routes>
    </InfoProvider>

  );
}






