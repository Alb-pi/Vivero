export type CategoriaGeneral = "plantas" | "estructuras" | "productos" | "otros";

const plantas = new Set([
  "arboles", "coniferas", "rosales", "arbustos", "plantines",
  "plantas-nativas", "aromaticas", "gramineas",
  "frutales-de-carozo", "frutales-de-pepita", "frutales-secos"
  
]);

const estructuras = new Set([
  "estructura-budista", "estructura-hinduista", "juegos-de-jardin"
]);

const productos = new Set([
  "sustrato", "fertilizantes", "insecticidas", "herbicidas", "compost", "macetas","bonsai"
]);

export const mapToGeneral = (cat: string): CategoriaGeneral => {
  if (plantas.has(cat)) return "plantas";
  if (estructuras.has(cat)) return "estructuras";
  if (productos.has(cat)) return "productos";
  return "otros";
};