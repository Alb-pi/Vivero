export function normalizeCategoria(categoria: string): string {
  return categoria
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}