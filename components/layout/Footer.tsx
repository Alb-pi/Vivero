//src/components/layout/Footer.tsx

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';
import type { Info, RedSocial } from '@/types/info';

interface Props {
  info: Info;
  mostrarMapa?: boolean;
  mostrarRedes?: boolean;
  mostrarRegistro?: boolean;
}

const Footer = ({
  info,
  mostrarMapa = true,
  mostrarRedes = true,
  mostrarRegistro = true
}: Props) => {
  if (
    !info ||
    !info.redes ||
    !info.contacto ||
    !info.contacto.direccion ||
    !info.contacto.telefono ||
    !info.contacto.email ||
    !info.horarios ||
    !info.mapa
  ) {
    console.warn('Footer no se renderiza: falta información institucional.');
    return null;
  }

  return (
    <footer className="bg-green-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Contacto */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contacto</h3>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt /> {info.contacto.direccion.texto}
          </p>
          <p className="flex items-center gap-2">
            <FaPhone /> {info.contacto.telefono.texto}
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope /> {info.contacto.email.texto}
          </p>
          {mostrarRegistro && (
            <p className="flex items-center gap-2">
              <FaEnvelope /> {info.contacto.registro.texto}
            </p>
          )}
        </div>

        {/* Horarios y redes */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Horarios</h3>
          <p>{info.horarios.semana}</p>
          <p>{info.horarios.domingo}</p>
          {mostrarRedes && (
            <div className="mt-4 flex gap-4">
              {info.redes.map((red: RedSocial) => {
                const Icon =
                  red.icono.includes('facebook') ? FaFacebookF :
                  red.icono.includes('instagram') ? FaInstagram :
                  FaWhatsapp;

                return (
                  <a
                    key={red.nombre}
                    href={red.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-green-900 p-2 rounded-full hover:bg-green-700 hover:text-white transition"
                    aria-label={`Ir a ${red.nombre}`}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          )}
        </div>

        {/* Mapa */}
        {mostrarMapa && (
          <div>
            <h3 className="text-lg font-bold mb-4">{info.mapa.titulo}</h3>
            <iframe
              src={info.mapa.src}
              className="w-full h-[200px] rounded-lg border-0 shadow-md"
              loading="lazy"
              title="Ubicación del vivero"
            />
          </div>
        )}
      </div>

        {/* Línea final */}
        <div className="text-center mt-6 text-sm text-green-100">
          © 2025 Vivero El Carmelo. Todos los derechos reservados.
        </div>
    </footer>
  );
};

export default Footer;