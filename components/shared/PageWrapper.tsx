// src/components/shared/PageWrapper.tsx

import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@components/layout/Layout';
import { Info } from '@/types/info';
import { infoPlaceholder } from '@/constants/infoPlaceholder';

interface PageWrapperProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  mostrarHeader?: boolean;
  mostrarFooter?: boolean;
  lang?: string;
  dir?: 'ltr' | 'rtl';
  info?: Info;
  animar?: boolean;
  carrusel?: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  title = 'Vivero El Carmelo',
  description = 'Explorá nuestras categorías de plantas y productos para tu jardín.',
  mostrarHeader = true,
  mostrarFooter = true,
  lang = 'es',
  dir = 'ltr',
  info,
  carrusel,
}) => {
  return (
    <>
      <Helmet>
        <html lang={lang} dir={dir} />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`/${lang}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Helmet>

      <Layout
        mostrarHeader={mostrarHeader}
        mostrarFooter={mostrarFooter}
        lang={lang}
        dir={dir}
        info={info ?? infoPlaceholder}
      >
        <section className="space-y-8 px-4">
          <div className="max-w-4xl mx-auto">
            <header className="text-center">
               <h1 className="text-3xl font-bold text-green-800">{title}</h1>
                <p className="mt-2 text-gray-700 text-lg text-center">{description}</p>
              </header>
          </div>
           {/* Carrusel opcional */}
          {carrusel && <div className="my-8">{carrusel}</div>}

          <div>{children}</div>

         
        </section>
      </Layout>
    </>
  );
};

export default PageWrapper;