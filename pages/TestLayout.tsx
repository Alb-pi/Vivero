

import PageWrapper from '@components/shared/PageWrapper';
import Carrusel from '@components/ui/Carrusel';
import { infoPlaceholder } from '@/constants/infoPlaceholder';

const frasesLaterales = [
  '“Cultivar un jardín es creer en el mañana.”',
  '“Donde florecen las plantas, florece la esperanza.”'
];

const slides = [
  {
    img: '/assets/img/test1.jpg',
    alt: 'Rosales en floración',
    caption: 'Rosales en plena floración 🌹',
  },
  {
    img: '/assets/img/test2.jpg',
    alt: 'Macetas artesanales',
    caption: 'Macetas artesanales para tu jardín 🌿',
  },
];

export default function TestLayout() {
  return (
    <PageWrapper
      title="Test Layout"
      description="Depuración visual del layout"
      info={infoPlaceholder}
      mostrarFooter={true}
      animar={false} // desactivamos animación para evitar interferencias
    >
      {/* Encabezado institucional */}
      

      {/* Carrusel visual */}
      <section className="my-12 border border-red-500">
        <Carrusel slides={slides} frasesLaterales={frasesLaterales} />
      </section>

      {/* Botones destacados */}
      <section className="flex flex-col sm:flex-row justify-center gap-4 mt-10 border border-yellow-500 p-4">
        <button className="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800 transition">
          Ver Aromáticas 🌿
        </button>
        <button className="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800 transition">
          Ver Coníferas 🌲
        </button>
        <button className="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800 transition">
          Contáctanos 📞
        </button>
      </section>

      {/* Frase final */}
      <p className="mt-10 text-sm italic text-green-700 text-center border border-purple-500">
        🌿 Cultivamos vínculos con la tierra y con vos 🌱
      </p>
    </PageWrapper>
  );
}