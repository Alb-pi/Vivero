import { useEffect, useState } from 'react';
import type { Info } from '@/types/info';

export function useInfo() {
  const [info, setInfo] = useState<Info | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    fetch('/api/info', { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error('Error al cargar info institucional');
        return res.json();
      })
      .then((data: Info) => {
        console.log('Info recibida:', data);
        setInfo(data);
        setError(null);
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          console.error('Error en useInfo:', err);
          setError(err.message);
          setInfo(null);
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return { info, loading, error };
}