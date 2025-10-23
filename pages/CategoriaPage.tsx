import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PageWrapper from '@components/shared/PageWrapper';
import Galeria from '@components/ui/Galeria';
import ListaItems from '@components/ui/ListaItems';
import { useCategoriaAPI } from '@hooks/useCategoriaAPI';
import { formatNombre } from '@utils/formatNombre';
import { mapToGeneral } from '@utils/mapCategoria';
import { useInfo } from '@/context/InfoContext';
import { infoPlaceholder } from '@/constants/infoPlaceholder';
import { Producto } from '@/types/Producto';

const CategoriaPage: React.FC = () => {
  const { nombre } = useParams<{ nombre?: string }>();
  const categoria = nombre ?? '';
  const categoriaGeneral = mapToGeneral(categoria);
  const { productos, loading, error } = useCategoriaAPI(categoria);
  const { info } = useInfo();
  const [productoSeleccionado, setProductoSeleccionado] = useState<Producto | null>(null);

  return (
    <PageWrapper
      title={`Categoría: ${formatNombre(categoria)}`}
      description={`Explorá nuestros productos en esta categoría 🌿`}
      info={info ?? infoPlaceholder}
    >
      <section className="w-full max-w-[1200px] mx-auto px-4 py-8 space-y-6">
        {/* Subtítulo y tipo general */}
        <div className="text-center">
          <p className="text-sm text-green-700 italic">
            Tipo general: {categoriaGeneral}
          </p>
        </div>

        {/* Estado de carga o error */}
        {loading && (
          <p className="text-center text-green-700">Cargando productos...</p>
        )}
        {error && (
          <p className="text-center text-red-600">Error: {error}</p>
        )}

        {/* Galería y detalles */}
        {!loading && !error && (
          <>
            <Galeria
              productos={productos}
              tipo={categoria}
              onSelect={(producto) => setProductoSeleccionado(producto)}
            />
            <div className="mt-10">
              <ListaItems item={productoSeleccionado} />
            </div>
          </>
        )}
      </section>
    </PageWrapper>
  );
};

export default CategoriaPage;