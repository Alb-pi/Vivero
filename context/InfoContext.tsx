// src/context/InfoContext.tsx

import { createContext, useContext, useEffect, useState } from 'react';
import type { Info } from '@/types/info';

interface InfoContextType {
  info: Info | null;
  setInfo: React.Dispatch<React.SetStateAction<Info | null>>;
  loading: boolean;
}

const InfoContext = createContext<InfoContextType | undefined>(undefined);

export const InfoProvider = ({ children }: { children: React.ReactNode }) => {
  const [info, setInfo] = useState<Info | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/info')
      .then((res) => res.json())
      .then((data: Info) => {
        setInfo(data);
      })
      .catch((err) => {
        console.error('Error al cargar info:', err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <InfoContext.Provider value={{ info, setInfo, loading }}>
      {children}
    </InfoContext.Provider>
  );
};

export const useInfo = () => {
  const context = useContext(InfoContext);
  if (!context) throw new Error('useInfo debe usarse dentro de InfoProvider');
  return context;
};