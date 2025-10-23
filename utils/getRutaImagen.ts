export const getRutaImagen = (rutaRelativa: string): string =>
  `${import.meta.env.BASE_URL}${rutaRelativa.replace(/^\//, '')}`;

const rutaLogo = getRutaImagen('/assets/img/logo1.jpg');
console.log('Ruta generada:', rutaLogo);