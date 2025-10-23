// src/components/layout/Layout.tsx

import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Info } from '@/types/info';

interface Props {
  children: ReactNode;
  info: Info;
  mostrarFooter?: boolean;
  mostrarHeader?: boolean;
  lang?: string;
  dir?: 'ltr' | 'rtl';
}

const Layout = ({
  children,
  info,
  mostrarFooter = true,
  mostrarHeader = true,
}: Props) => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-green-900">
      {mostrarHeader && <Header />}

      <main className="flex-grow">
        <div className="w-full max-w-[2000px] mx-auto px-4 py-8">
          {children}
        </div>
      </main>

      {mostrarFooter && <Footer info={info} />}
    </div>
  );
};

export default Layout;