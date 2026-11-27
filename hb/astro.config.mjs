import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Dominio propio: https://hostalanita.net.pe (configurado en GitHub → Settings → Pages)
export default defineConfig({
  site: "https://hostalanita.net.pe",
  trailingSlash: "always",
  integrations: [sitemap()],
  build: { inlineStylesheets: "always" },
});
