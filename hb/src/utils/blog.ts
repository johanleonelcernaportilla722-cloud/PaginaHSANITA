import { getCollection } from "astro:content";

export const temas: Record<string, string> = {
  arqueologia: "Arqueología",
  playa: "Playas",
  ruta: "Rutas y guías",
  naturaleza: "Naturaleza",
  comida: "Gastronomía",
};

export async function posts() {
  const all = await getCollection("blog", ({ data }) => !data.draft);
  return all.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export const fecha = (d: Date) =>
  d.toLocaleDateString("es-PE", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export const minutos = (texto = "") => Math.max(2, Math.round(texto.split(/\s+/).length / 200));
