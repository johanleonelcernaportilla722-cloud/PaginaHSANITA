import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { posts } from "../utils/blog";
import { hostal } from "../data/hostal";

export async function GET(context: APIContext) {
  const lista = await posts();
  return rss({
    title: `Blog de ${hostal.nombre}`,
    description: "Guías para viajar a Barranca y el Norte Chico del Perú",
    site: context.site!,
    items: lista.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.pubDate,
      link: `/blog/${p.id}/`,
    })),
    customData: "<language>es-pe</language>",
  });
}
