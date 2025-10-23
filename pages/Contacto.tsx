// src/pages/Contacto.tsx

import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageWrapper from '@components/shared/PageWrapper';
import { useInfo } from '@/context/InfoContext';
import { infoPlaceholder } from '@/constants/infoPlaceholder';

export default function Contacto() {
  const navigate = useNavigate();
  const { info, } = useInfo();

  return (
    <PageWrapper
      title="Contacto"
      description="Consultas, presupuestos y mensajes para Vivero El Carmelo."
      info={info ?? infoPlaceholder}
    >
      <motion.section
        className="py-12 px-4 max-w-4xl mx-auto text-green-900"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Breadcrumbs */}
        <nav className="mb-6 text-sm text-green-700 text-center">
          <button onClick={() => navigate('/')} className="hover:underline">
            Inicio
          </button>{' '}
          / Contacto
        </nav>

        {/* Título */}
        <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-2">
          <i className="fas fa-envelope"></i> Contacto
        </h2>

        {/* Introducción */}
        <p className="mb-6 text-center text-lg">
          ¿Querés hacer una consulta, pedir un presupuesto o simplemente saludarnos? Completá el formulario y te respondemos a la brevedad 🌿
        </p>

        {/* Formulario de Google */}
        <div className="rounded overflow-hidden shadow-lg">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfTuFormularioID/viewform?embedded=true"
            width="100%"
            height="700"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Formulario de contacto"
          >
            Cargando…
          </iframe>
        </div>

        {/* Otros medios */}
        <div className="mt-8 text-center text-sm space-y-2">
          <p>
            También podés escribirnos por{' '}
            <a
              href="https://wa.me/549XXXXXXXXXX"
              className="underline text-green-700 hover:text-green-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>{' '}
            o seguirnos en{' '}
            <a
              href="https://www.instagram.com"
              className="underline text-green-700 hover:text-green-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>.
          </p>
        </div>

        {/* Botón volver */}
        <div className="mt-10 text-center">
          <button
            onClick={() => navigate(-1)}
            className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition flex items-center gap-2 mx-auto"
          >
            <i className="fas fa-arrow-left"></i> Volver
          </button>
        </div>
      </motion.section>
    </PageWrapper>
  );
}