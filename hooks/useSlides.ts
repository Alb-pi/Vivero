import { useEffect, useState } from 'react';

interface Slide {
  img: string;
  alt: string;
  caption?: string;
}

export function useSlides() {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    fetch('/api/slides', { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error('No se pudieron cargar los slides');
        return res.json();
      })
      .then((data: Slide[]) => {
        setSlides(data);
        setError(null);
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          console.error('Error en useSlides:', err);
          setError(err.message);
          setSlides([]);
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return { slides, loading, error };
}