import { useEffect, useState } from 'react';
import type { Producto } from '@/types/Producto';

export function useCategoriaAPI(nombre: string) {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const trimmedNombre = nombre.trim();

    if (!trimmedNombre) {
      setProductos([]);
      setError('Nombre de categoría vacío');
      setLoading(false);
      return;
    }

    const safeNombre = encodeURIComponent(trimmedNombre);
    setLoading(true);

    fetch(`/api/categorias/${safeNombre}`, { signal: controller.signal })
      .then((res) => {
        console.log('Respuesta del backend:', res);
        if (!res.ok) {
          console.error(`Error ${res.status}: ${res.statusText}`);
          throw new Error('Categoría no encontrada');
        }
        return res.json() as Promise<Producto[]>;
      })
      .then((data) => {
        console.log('Datos recibidos:', data);
        setProductos(data);
        setError(null);
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          console.error('Error al cargar categoría:', err);
          setError(err.message);
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [nombre]);

  const empty = !loading && productos.length === 0 && !error;

  return { productos, loading, error, empty };
}