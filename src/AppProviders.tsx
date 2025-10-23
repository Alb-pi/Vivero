// src/AppProviders.tsx

import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

interface Props {
  children: React.ReactNode;
}

export const AppProviders = ({ children }: Props) => (
  <HelmetProvider>
    <BrowserRouter>{children}</BrowserRouter>
  </HelmetProvider>
);