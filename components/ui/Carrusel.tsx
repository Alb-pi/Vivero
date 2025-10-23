// src/components/ui/Carrusel.tsx

import React from 'react';

export interface Slide {
  img: string;
  alt: string;
  caption?: string;
}

interface CarruselProps {
  slides: Slide[];
  frasesLaterales: {
    izquierda: string;
    derecha: string;
  };
}

const Carrusel: React.FC<CarruselProps> = ({ slides, frasesLaterales }) => {
  if (slides.length === 0) return null;

  return (
    <div className="hidden md:flex justify-center items-center gap-6">
      {/* Frase izquierda */}
      <div className="w-1/4 text-right pr-4 text-green-700 italic font-medium">
        {frasesLaterales.izquierda}
      </div>

      {/* Carrusel centrado */}
      <div className="w-[600px] max-w-full overflow-hidden rounded shadow">
        <div className="relative w-full h-[300px]">
          {slides.map((slide, index) => (
            <div key={index} className="absolute inset-0 transition-opacity duration-700 opacity-100">
              <img
                src={slide.img}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
              {slide.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center text-sm">
                  {slide.caption}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Frase derecha */}
      <div className="w-1/4 text-left pl-4 text-green-700 italic font-medium">
        {frasesLaterales.derecha}
      </div>
    </div>
  );
};

export default Carrusel;