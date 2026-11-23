// Antepone la ruta base del sitio (por ejemplo "/PaginaHSANITA" en GitHub Pages).
// Si mañana usas tu propio dominio, cambia "base" en astro.config.mjs y todo se ajusta solo.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");
export const u = (ruta: string) => `${BASE}${ruta.startsWith("/") ? ruta : `/${ruta}`}`;
