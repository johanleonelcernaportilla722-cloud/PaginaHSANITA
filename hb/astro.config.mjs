import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// GitHub Pages: https://johanleonelcernaportilla722-cloud.github.io/PaginaHSANITA/
// Cuando tengas tu propio dominio (por ejemplo hostalanita.pe):
//   site: "https://hostalanita.pe",  y borra la línea "base".
export default defineConfig({
  site: "https://johanleonelcernaportilla722-cloud.github.io",
  base: "/PaginaHSANITA",
  trailingSlash: "always",
  integrations: [sitemap()],
  build: { inlineStylesheets: "always" },
});
