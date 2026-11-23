# Cómo agregar reseñas de huéspedes

Las reseñas se guardan en `src/content/resenas.json`. **Publica solo opiniones reales** y con permiso del huésped.

1. Copia el bloque de la plantilla y cambia los datos:

```json
{
  "id": "maria-nov-2026",
  "nombre": "María T.",
  "origen": "Lima",
  "fecha": "2026-11-20",
  "estrellas": 5,
  "texto": "Lo que escribió el huésped, tal cual.",
  "fuente": "Google",
  "viaje": "Familia",
  "publicada": true
}
```

- `id`: único, sin espacios.
- `fuente`: Google, Booking, Facebook, WhatsApp o Libro de visitas.
- `viaje` (opcional): Familia, Pareja, Amigos, Solo o Trabajo.
- `publicada`: `false` si quieres guardarla sin mostrarla.

2. Separa cada bloque con una coma. El promedio y las estrellas se calculan solos.

## De dónde sacar reseñas
- **Google:** crea tu perfil en Google Business Profile, copia el enlace "Pedir reseñas" y pégalo en `resenaGoogle` dentro de `src/data/hostal.ts`.
- **WhatsApp:** los huéspedes que escriban con el botón "Contar mi experiencia" te llegan directo; pide permiso para publicarlas.
- **Libro de visitas:** pasa a la web las mejores, con nombre e inicial del apellido.

> No copies ni inventes reseñas: es engañoso para tus clientes y Google penaliza los sitios que lo hacen.
