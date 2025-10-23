// src/pages/Nosotros.tsx

import { useNavigate } from 'react-router-dom';
import PageWrapper from '@components/shared/PageWrapper';
import { useInfo } from '@/context/InfoContext';
import { infoPlaceholder } from '@/constants/infoPlaceholder';
import { motion } from 'framer-motion';

export default function Nosotros() {
  const navigate = useNavigate();
  const { info } = useInfo();

  return (
    <PageWrapper
      title="Sobre Nosotros"
      description="Conocé la historia, el equipo y las alianzas detrás del Vivero El Carmelo."
      info={info ?? infoPlaceholder}
    >
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="py-12 px-4 max-w-4xl mx-auto text-green-900"
      >
        {/* Breadcrumbs */}
        <nav className="mb-6 text-sm text-green-700 text-center">
          <button onClick={() => navigate('/')} className="hover:underline">
            Inicio
          </button>{' '}
          / Sobre Nosotros
        </nav>

        {/* Título */}
        <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-2">
          <i className="fas fa-users"></i> Sobre Nosotros
        </h2>

        {/* Contenido */}
        <div className="space-y-6 text-justify leading-relaxed">
          <p>
            En <strong>Vivero El Carmelo</strong> cultivamos más que plantas: cultivamos comunidad, respeto por la naturaleza y vínculos duraderos. Desde nuestros inicios en San Juan, hemos trabajado con pasión para ofrecer especies nativas, asesoramiento personalizado y un espacio donde cada visitante se sienta parte de algo vivo.
          </p>
          <p>
            Nuestro equipo está formado por personas comprometidas con el cuidado del medio ambiente, la educación verde y el desarrollo sostenible. Creemos que cada jardín cuenta una historia, y queremos ayudarte a contar la tuya.
          </p>
        </div>

        {/* Empresas asociadas */}
        <section className="mt-12 border-t pt-10">
          <h3 className="text-2xl font-bold mb-6 text-center text-green-800">
            Empresas con las que trabajamos
          </h3>
          <p className="text-center max-w-2xl mx-auto mb-8 text-green-900">
            En Vivero El Carmelo creemos en el trabajo colaborativo. A lo largo de los años hemos construido relaciones con empresas, instituciones y productores locales que comparten nuestro compromiso con la naturaleza y el desarrollo sostenible.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-green-800 font-medium text-center">
            <li>Municipalidad de Pocito</li>
            <li>Escuelas rurales y agrotécnicas</li>
            <li>Productores de San Juan</li>
            <li>Empresas de paisajismo</li>
            <li>Ferreterías y viveros asociados</li>
            <li>Clientes mayoristas de Mendoza y La Rioja</li>
          </ul>
        </section>

        {/* Carrusel de logos */}
        <section className="mt-12 border-t pt-10">
          <h3 className="text-2xl font-bold mb-6 text-center text-green-800">
            Instituciones destacadas
          </h3>
          <p className="text-center max-w-2xl mx-auto mb-8 text-green-900">
            A lo largo de los años hemos colaborado con instituciones públicas, educativas y empresas de paisajismo que comparten nuestra visión verde.
          </p>

          <div className="flex overflow-x-auto gap-6 px-2 py-4 scrollbar-hide">
            <a href="https://www.facebook.com/municipalidad.pocito/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-40 h-40 bg-white rounded shadow flex items-center justify-center p-4">
              <img src="https://www.facebook.com/photo.php?fbid=287896930104431&set=a.287896893437768&type=3" alt="Municipalidad de Pocito" className="max-h-full max-w-full object-contain" />
            </a>
            <a href="https://www.facebook.com/www.agrotecnicaperezciani.com.ar/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-40 h-40 bg-white rounded shadow flex items-center justify-center p-4">
              <img src="https://www.facebook.com/www.agrotecnicaperezciani.com.ar/" alt="Agrotécnica Pérez Ciani" className="max-h-full max-w-full object-contain" />
            </a>
            <a href="https://www.facebook.com/acacia.mza/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-40 h-40 bg-white rounded shadow flex items-center justify-center p-4">
              <img src="https://www.facebook.com/acacia.mza/" alt="Acacia Paisajismo" className="max-h-full max-w-full object-contain" />
            </a>
          </div>
        </section>

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