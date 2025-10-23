// src/utils/formatNombre.ts

/**
 * Convierte un slug en un nombre legible.
 * Si existe en el mapa de nombres personalizados, lo usa.
 * Si no, reemplaza guiones por espacios y capitaliza cada palabra.
 */
export function getNombreLegible(
  slug: string,
  nombresLegibles: Record<string, string>
): string {
  if (nombresLegibles[slug]) {
    return nombresLegibles[slug];
  }

  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (l) => l.toUpperCase());
}

export function formatNombre(slug: string): string {
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}