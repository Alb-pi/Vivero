import type { Info } from '@/types/info';

export const infoPlaceholder: Info = {
  contacto: {
    direccion: { texto: 'Calle 11 y Vidart, San Juan, Argentina', icono: 'map-marker-alt' },
    telefono: { texto: '+54 264 589 7987', icono: 'phone' },
    email: { texto: 'viveroelcarmelo@gmail.com', icono: 'envelope' },
    registro: { texto: "Senasa S20000062 / INASE 5102471", icono: 'fa-id-card'}
  },
  horarios: {
    semana: 'Lunes a Sábado: 9 a 18 hs',
    domingo: 'Domingo: 10 a 13 hs',
  },
  mapa: {
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3426.764916438989!2d-68.5843217250986!3d-31.63347277416085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96814f5b2e2e6c3b%3A0x4c0a1e5e9e2b7c4a!2sVivero%20El%20Carmelo!5e0!3m2!1ses-419!2sar!4v1697051234567!5m2!1ses-419!2sar',
    titulo: 'Ubicación del vivero',
  },
  redes: [
    { nombre: 'Instagram', icono: 'instagram', url: 'https://instagram.com/viveroelcarmelo' },
    { nombre: 'Facebook', icono: 'facebook', url: 'https://facebook.com/viveroelcarmelo' },
    { nombre: 'WhatsApp', icono: 'WattsApp,', url: 'https://wa.me/5492645897987'},
  ],
  };