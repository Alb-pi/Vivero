// src/data/footer.config.ts

import type { Info, ContactoItem, Horarios, Mapa, RedSocial } from '@/types/info';

// 🟢 Contacto institucional
export const contacto: Record<string, ContactoItem> = {
  direccion: {
    texto: 'Calle 1 y Víctor Abel Pinto, San Juan, Argentina',
    icono: 'fas fa-map-marker-alt',
  },
  telefono: {
    texto: '+54 9 264 589 7987',
    icono: 'fas fa-phone',
  },
  email: {
    texto: 'viveroelcarmelo@gmail.com',
    icono: 'fas fa-envelope',
  },
  registro: {
    texto: 'Senasa S20000062 / INASE 5102471',
    icono: 'fas fa-id-card',
  },
};

// 🟢 Horarios de atención
export const horarios: Horarios = {
  semana: 'Lunes a Sábado: 8:00 – 18:00',
  domingo: 'Domingos y feriados: 8:00 – 13:00',
};

// 🟢 Mapa embebido
export const mapa: Mapa = {
  src: 'https://www.google.com/maps/embed?...', // acortado para claridad
  titulo: 'Ubicación del vivero',
};

// 🟢 Redes sociales
export const redes: RedSocial[] = [
  {
    nombre: 'Facebook',
    icono: 'facebook',
    url: 'https://facebook.com/viveroelcarmelo',
  },
  {
    nombre: 'Instagram',
    icono: 'instagram',
    url: 'https://instagram.com/viveroelcarmelo',
  },
  {
    nombre: 'WhatsApp',
    icono: 'whatsapp',
    url: 'https://wa.me/5492645897987',
  },
];

// 🟢 Complemento modular para el Footer
export const footerComplemento = {
  mostrarMapa: true,
  mostrarRedes: true,
  mostrarRegistro: true,
  info: {
    contacto: {
      direccion: contacto.direccion,
      telefono: contacto.telefono,
      email: contacto.email,
      registro: contacto.registro,
    },
    horarios,
    mapa,
    redes,
  } satisfies Info,
};