import { defineCollection } from "astro:content";
import { glob, file } from "astro/loaders";
import { z } from "astro/zod";

// Cada artículo es un archivo .md en src/content/blog/
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string().max(70),            // título para Google (máx. ~60-70 caracteres)
    description: z.string().max(160),     // resumen que sale en Google
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tema: z.enum(["arqueologia", "playa", "ruta", "naturaleza", "comida"]),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),    // true = no se publica
    // Foto de portada (opcional). Si no hay, se usa la ilustración del tema.
    imagen: z.string().optional(),        // URL o ruta, ej. "/img/blog/caral.webp"
    imagenAlt: z.string().optional(),
    credito: z.object({ autor: z.string(), licencia: z.string(), url: z.string() }).optional(),
  }),
});

// Reseñas REALES de huéspedes. Se editan en src/content/resenas.json
const resenas = defineCollection({
  loader: file("src/content/resenas.json"),
  schema: z.object({
    nombre: z.string(),                    // como el huésped aceptó aparecer: "María T."
    origen: z.string().optional(),         // ciudad de donde vino
    fecha: z.coerce.date(),                // fecha de la estadía o de la reseña
    estrellas: z.number().int().min(1).max(5),
    texto: z.string().max(600),
    fuente: z.enum(["Google", "Booking", "Facebook", "WhatsApp", "Libro de visitas"]),
    viaje: z.enum(["Familia", "Pareja", "Amigos", "Solo", "Trabajo"]).optional(),
    publicada: z.boolean().default(true),  // false = guardada pero no se muestra
  }),
});

export const collections = { blog, resenas };
