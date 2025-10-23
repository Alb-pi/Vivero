import { useEffect, useState } from 'react';
import type { CategoriaGeneral, CategoriaEspecifica } from '@/data/categoriasIndex';

export function useCategoriasIndex() {
  const [data, setData] = useState<Record<CategoriaGeneral, CategoriaEspecifica[]>>({} as Record<CategoriaGeneral, CategoriaEspecifica[]>);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    fetch('/api/categorias', { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error('No se pudo cargar el índice de categorías');
        return res.json();
      })
      .then((json: Record<CategoriaGeneral, CategoriaEspecifica[]>) => {
        setData(json);
        setError(null);
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          console.error('Error al cargar categorías:', err);
          setError(err.message);
          setData({} as Record<CategoriaGeneral, CategoriaEspecifica[]>);
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return { data, loading, error };
}