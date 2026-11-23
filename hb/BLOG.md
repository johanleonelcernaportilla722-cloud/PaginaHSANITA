# Cómo publicar un artículo en el blog

1. Crea un archivo nuevo en `src/content/blog/`, por ejemplo `albufera-de-medio-mundo.md`.
   El nombre del archivo será la dirección: `/blog/albufera-de-medio-mundo/`.
   Usa minúsculas, guiones y palabras que la gente busca en Google.
2. Copia esta cabecera y llénala:

```
---
title: "Albufera de Medio Mundo: cómo llegar y qué hacer"   # máx. 70 caracteres
description: "Resumen que aparece en Google, máx. 160 caracteres."
pubDate: 2026-12-01
tema: naturaleza        # arqueologia | playa | ruta | naturaleza | comida
tags: [Albufera de Medio Mundo, Huacho, Norte Chico]
draft: false            # true para guardarlo sin publicar
---
```

3. Escribe el texto en Markdown: `## Subtítulo`, `**negrita**`, listas con `-`, tablas y enlaces a otros artículos `[texto](/blog/playas-de-barranca/)`.
4. Guarda: con `npm run dev` lo ves al instante. El sitemap, el RSS y la portada se generan solos.

## Consejos para salir en Google
- Un tema por artículo y que responda una pregunta concreta ("cómo llegar a…", "qué hacer en…").
- Pon la palabra clave en el título, la descripción y el primer párrafo.
- Enlaza tus artículos entre sí y siempre termina invitando a reservar.
- Publica seguido (1 o 2 por semana) y actualiza datos como horarios y precios.
- Cuando publiques el sitio, registra el dominio en Google Search Console y envía `/sitemap-index.xml`.
