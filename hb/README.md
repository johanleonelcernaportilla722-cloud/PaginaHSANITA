# Web del hostal en Barranca (Astro)

## Cómo usarlo
1. `npm install`
2. `npm run dev` → abre http://localhost:4321
3. Edita **src/data/hostal.ts** (nombre, WhatsApp, precios, dirección, redes).
4. Pon tus fotos en `public/img/` y reemplaza los bloques "Foto de la habitación".
5. `npm run build` genera la carpeta `dist/` lista para subir.

## Publicar
Igual que itsoluciones.biz: sitio estático. Sube `dist/` a Netlify, Vercel, Cloudflare Pages o tu hosting.
Cambia `site` en astro.config.mjs por tu dominio.
