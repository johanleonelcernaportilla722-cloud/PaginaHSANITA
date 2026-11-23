// Lugares del mapa interactivo de la provincia de Barranca.
// x, y = posición en el mapa ilustrado (lienzo de 900 x 1000). No son coordenadas GPS.
// lado = de qué lado del pin va el nombre ("d" derecha, "i" izquierda).
// blog = slug de un artículo del blog relacionado (opcional).

export const categorias = {
  arqueologia: { nombre: "Arqueología", color: "#b5743d" },
  playa: { nombre: "Playas", color: "#0b9fa3" },
  historia: { nombre: "Historia y ciudad", color: "#0a5263" },
} as const;

export type Lugar = {
  id: string;
  nombre: string;
  distrito: string;
  cat: keyof typeof categorias;
  x: number;
  y: number;
  lado?: "d" | "i";
  icono: "piramide" | "fortaleza" | "casa" | "monolito" | "plaza" | "ola" | "pozas" | "cristo" | "barco";
  km?: number;
  texto: string;
  blog?: string;
  maps: string;
};

const m = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

export const lugares: Lugar[] = [
  // ---- Paramonga ----
  { id: "fortaleza", icono: "fortaleza", nombre: "Fortaleza de Paramonga", distrito: "Paramonga", cat: "arqueologia", x: 352, y: 214, lado: "i", km: 204,
    texto: "Templo de adobe escalonado construido por la cultura Chimú (1100–1400 d. C.) y luego ocupado por los incas. Desde arriba se ve todo el valle.",
    blog: "fortaleza-de-paramonga", maps: m("Fortaleza de Paramonga") },
  { id: "brujas", icono: "casa", nombre: "Casa de las Brujas", distrito: "Paramonga", cat: "historia", x: 452, y: 150, lado: "d",
    texto: "Construcción de 1920 en Paramonga, rodeada de leyendas. Uno de los lugares más curiosos de la provincia.",
    maps: m("Casa de las Brujas Paramonga") },
  { id: "cerroblanco", icono: "fortaleza", nombre: "Fortaleza Cerro Blanco", distrito: "Paramonga", cat: "arqueologia", x: 585, y: 112, lado: "d",
    texto: "Sitio arqueológico declarado Patrimonio Cultural de la Nación, en el centro poblado Cerro Blanco.",
    maps: m("Sitio Arqueológico Cerro Blanco Paramonga") },
  { id: "huaricanga", icono: "monolito", nombre: "Huaricanga y sus huancas", distrito: "Valle de Fortaleza", cat: "arqueologia", x: 660, y: 205, lado: "d",
    texto: "Uno de los asentamientos más antiguos del Norte Chico, con dos piedras ceremoniales (huancas) junto al montículo mayor. Lo cruza la carretera Pativilca–Huaraz.",
    maps: m("Huaricanga Pativilca") },
  // ---- Pativilca ----
  { id: "pativilca", icono: "plaza", nombre: "Pativilca y Museo Bolivariano", distrito: "Pativilca", cat: "historia", x: 395, y: 338, lado: "d", km: 200,
    texto: "Aquí descansó Simón Bolívar en 1824 para recuperar su salud. Visita la plaza de armas, el Museo Bolivariano y el Museo de la Cultura del Norte Chico.",
    maps: m("Museo Bolivariano Pativilca") },
  // ---- Barranca ----
  { id: "puertochico", icono: "ola", nombre: "Puerto Chico", distrito: "Barranca", cat: "playa", x: 262, y: 424, lado: "i",
    texto: "Bahía tranquila, ideal para desconectarte y ver el atardecer.",
    blog: "playas-de-barranca", maps: m("Playa Puerto Chico Barranca") },
  { id: "chorrillos", icono: "ola", nombre: "Playa Chorrillos", distrito: "Barranca", cat: "playa", x: 246, y: 458, lado: "i",
    texto: "Junto al puerto pesquero de Barranca. Ambiente familiar y el mejor lugar para comer ceviche frente al mar.",
    blog: "playas-de-barranca", maps: m("Playa Chorrillos Barranca") },
  { id: "miraflores", icono: "ola", nombre: "Playa Miraflores", distrito: "Barranca", cat: "playa", x: 236, y: 490, lado: "i",
    texto: "Vecina de Chorrillos, con malecón y mucha vida en verano.",
    blog: "playas-de-barranca", maps: m("Playa Miraflores Barranca") },
  { id: "cristo", icono: "cristo", nombre: "Cristo Redentor", distrito: "Barranca", cat: "historia", x: 226, y: 524, lado: "i",
    texto: "Escultura de 20 metros en lo alto del Cerro Colorado, al sur de Chorrillos. Tiene un mirador con las mejores vistas de la ciudad y sus playas.",
    maps: m("Cristo Redentor Barranca") },
  // ---- Supe Puerto ----
  { id: "aspero", icono: "piramide", nombre: "Áspero", distrito: "Supe Puerto", cat: "arqueologia", x: 228, y: 600, lado: "i", km: 191,
    texto: "La ciudad pesquera de la civilización Caral, junto al mar. Entrada general para adultos: S/ 11 según la tarifa publicada en gob.pe.",
    blog: "como-llegar-a-caral-desde-barranca", maps: m("Sitio Arqueológico Áspero Supe Puerto") },
  { id: "laisla", icono: "pozas", nombre: "La Isla", distrito: "Supe Puerto", cat: "playa", x: 176, y: 640, lado: "i",
    texto: "Detrás de la isla, el mar formó pozas naturales de agua salada para bañarse con calma. A unos 10 minutos de Supe Puerto.",
    blog: "playas-de-barranca", maps: m("Playa La Isla Supe Puerto") },
  { id: "colorado", icono: "ola", nombre: "El Colorado y Atarraya", distrito: "Supe Puerto", cat: "playa", x: 160, y: 700, lado: "d",
    texto: "Playas del sur de la provincia, con menos gente que las del centro de Barranca.",
    blog: "playas-de-barranca", maps: m("Playa El Colorado Supe Puerto") },
  { id: "caletavidal", icono: "barco", nombre: "Caleta Vidal", distrito: "Supe Puerto", cat: "playa", x: 128, y: 800, lado: "d",
    texto: "Pequeña comunidad de pescadores rodeada de chacras y cerros. Tranquilidad pura.",
    maps: m("Caleta Vidal Supe") },
  // ---- Supe ----
  { id: "supe", icono: "plaza", nombre: "Plaza de Armas de Supe", distrito: "Supe", cat: "historia", x: 298, y: 650, lado: "d",
    texto: "Con el monumento a Francisco de Vidal, nacido en Supe y reconocido por San Martín como el Primer Soldado del Perú. Cerca está el Museo Comunitario de Supe.",
    maps: m("Plaza de Armas de Supe") },
  { id: "caral", icono: "piramide", nombre: "Ciudad Sagrada de Caral", distrito: "Supe (valle)", cat: "arqueologia", x: 610, y: 705, lado: "d", km: 184,
    texto: "La ciudad más antigua de América, con unos 5000 años, y Patrimonio Mundial. Abre todos los días de 9:00 a. m. a 4:00 p. m.",
    blog: "como-llegar-a-caral-desde-barranca", maps: m("Ciudad Sagrada de Caral") },
];
