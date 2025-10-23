// src/data/categorias.config.ts

export interface GrupoMenu {
  titulo: string;
  icono: string;
  categorias: {
    nombre: string;
    slug: string;
  }[];
}

export const categoriasMenu: GrupoMenu[] = [
  {
    titulo: 'Plantas',
    icono: 'fa-seedling',
    categorias: [
      { nombre: 'Arboles', slug: 'arboles' },
      { nombre: 'Arbustos', slug: 'arbustos' },
      { nombre: 'Aromaticas', slug: 'aromaticas' },
      { nombre: 'Coniferas', slug: 'coniferas' },
      { nombre: 'Frutales de carozo', slug: 'frutales-de-carozo' },
      { nombre: 'Frutales de pepita', slug: 'frutales-de-pepita' },
      { nombre: 'Frutos secos', slug: 'frutos-secos' },
      { nombre: 'Gramineas', slug: 'gramineas' },
      { nombre: 'Plantas nativas', slug: 'plantas-nativas' },
      { nombre: 'Plantines', slug: 'plantines' },
      { nombre: 'Rosales', slug: 'rosales' },
    ],
  },
  {
    titulo: 'Productos',
    icono: 'fa-box-open',
    categorias: [
      { nombre: 'Macetas', slug: 'macetas' },
      { nombre: 'Fertilizantes', slug: 'fertilizantes' },
      { nombre: 'Herbicidas', slug: 'herbicidas' },
      { nombre: 'Sustrato', slug: 'sustrato' },
      { nombre: 'Bonsai', slug: 'bonsai' },
      { nombre: 'Compost', slug: 'compost' },
      { nombre: 'Insecticidas', slug: 'insecticidas' },
    ],
  },
  {
    titulo: 'Estructuras',
    icono: 'fa-warehouse',
    categorias: [
      { nombre: 'Estructura budista', slug: 'estructura-budista' },
      { nombre: 'Estructura hinduistas', slug: 'estructura-hinduista' },
      { nombre: 'Juegos de jardin', slug: 'juegos-de-jardin' },
    ],
  },
  {
    titulo: 'Otro',
    icono: 'fa-ellipsis-h',
    categorias: [
      { nombre: 'Contacto', slug: 'contacto' },
      { nombre: 'Sobre Nosotros', slug: 'nosotros' },
    ],
  }
];