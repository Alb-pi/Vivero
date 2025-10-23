// src/data/categoriasIndex.ts

/**
 * Mapa de categorías específicas agrupadas por tipo general.
 * Se usa para navegación, filtrado, visualización y lógica de agrupamiento.
 */
export const categoriasPorTipo = {
  plantas: [
    "arboles",
    "coniferas",
    "frutales-de-carozo",
    "frutales-de-pepita",
    "frutales-secos",
    "gramineas",
    "arbustos",
    "aromaticas",
    "plantines",
    "plantas-nativas",
    "rosales",
  ],
  estructuras: [
    "estructura-budista",
    "estructura-hinduista",
    "juegos-de-jardin",
  ],
  productos: [
    "sustrato",
    "fertilizantes",
    "insecticidas",
    "herbicidas",
    "compost",
    "macetas",
    "bonsai",
  ],
  otros: [], // Podés agregar más si aparecen categorías nuevas
} as const;

/**
 * Tipo que representa los grupos generales de categorías.
 */
export type CategoriaGeneral = keyof typeof categoriasPorTipo;

/**
 * Tipo que representa cualquier categoría específica válida.
 */
export type CategoriaEspecifica = typeof categoriasPorTipo[CategoriaGeneral][number];