import { getCollection } from "astro:content";

export async function resenas() {
  const all = await getCollection("resenas", ({ data }) => data.publicada);
  return all.sort((a, b) => b.data.fecha.valueOf() - a.data.fecha.valueOf());
}

export function resumen(lista: { data: { estrellas: number } }[]) {
  const total = lista.length;
  const promedio = total ? lista.reduce((s, r) => s + r.data.estrellas, 0) / total : 0;
  return { total, promedio: Math.round(promedio * 10) / 10 };
}

export const mes = (d: Date) => d.toLocaleDateString("es-PE", { month: "long", year: "numeric", timeZone: "UTC" });
