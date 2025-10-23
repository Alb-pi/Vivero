// src/pages/Inicio.tsx

import PageWrapper from '@components/shared/PageWrapper';
import Carrusel from '@components/ui/Carrusel';
import { useSlides } from '@hooks/useSlides';
import { useInfo } from '@/context/InfoContext';
import { infoPlaceholder } from '@/constants/infoPlaceholder';

const frasesLaterales = {
  izquierda: '“Cultivar un jardín es creer en el mañana.” 🌱',
  derecha: '“Donde florecen las plantas, florece la esperanza.” 🌸',
};

export default function Inicio() {
  const { info } = useInfo();
  const { slides, loading: loadingSlides } = useSlides();

  return (
    <PageWrapper
      title="Vivero El Carmelo"
     
      
      info={info ?? infoPlaceholder}
      carrusel={
        !loadingSlides && slides.length > 0 ? (
          <Carrusel slides={slides} frasesLaterales={frasesLaterales} />
        ) : null
      }
    >
      <p className="mt-10 text-sm italic text-green-700 text-center">
        🌿 Cultivamos vínculos con la tierra y con vos 🌱
      </p>
    </PageWrapper>
  );
}