import { useState, useEffect } from 'react';
import type { Producto } from '@/types/Producto';

export function useCategoriaData(nombre: string) {
  const [data, setData] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const safeNombre = encodeURIComponent(nombre.trim());

    if (!safeNombre) {
      setData([]);
      setError('Nombre de categoría vacío');
      setLoading(false);
      return;
    }

    setLoading(true);
    fetch(`/data/${safeNombre}.json`, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error('Archivo no encontrado');
        return res.json();
      })
      .then((json: Producto[]) => {
        setData(json);
        setError(null);
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          console.error('Error al cargar archivo local:', err);
          setData([]);
          setError(err.message);
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [nombre]);

  return { data, loading, error };
}