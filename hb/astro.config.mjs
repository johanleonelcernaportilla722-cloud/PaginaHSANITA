import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://hostalanita.pe", // IMPORTANTE: cámbialo por tu dominio real antes de publicar
  trailingSlash: "always",
  integrations: [sitemap()],
  build: { inlineStylesheets: "always" },
});
