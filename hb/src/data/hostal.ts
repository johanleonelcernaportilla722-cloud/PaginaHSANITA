// ============================================================
//  DATOS DEL HOSTAL — edita SOLO este archivo para personalizar
//  Todo lo marcado "EJEMPLO" debe reemplazarse con datos reales.
// ============================================================

export const hostal = {
  nombre: "Hostal Anita",
  lema: "Tu refugio en Barranca",
  bendicion: "Mil Mil Mil Bendiciones",
  whatsapp: "51983355689", // 51 + número, sin espacios
  telefonoVisible: "+51 983 355 689",
  email: "reservas@tuhostal.pe", // EJEMPLO
  direccion: "Pedro Reyes Barboza, Barranca 15169",
  calle: "Pedro Reyes Barboza",
  codigoPostal: "15169",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Hostal+Anita+Pedro+Reyes+Barboza+Barranca+15169", // puedes cambiarlo por el link "Compartir" de Google Maps
  // Hoja de Google Sheets publicada como CSV (precios y cuartos ocupados).
  // Si está vacía, la web usa los precios de abajo.
  hojaDatos: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSCc_IjA0FYVCgGjOJrI2qsv38BUcSCPxG7VLmsVzAT0Yeb87PdhMq9CT2t-ZYl6T2scw2l-EuYo4Za/pub?output=csv",
  // Hoja de Google publicada como CSV con la agenda de eventos de Barranca.
  hojaEventos: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSpYIId7pBO-K5lduWwBTpyyLhGvstWt_r47xUpwwzUxn0HWefC9VcKDgvErnmD8r_WKgSu0F9P-qus/pub?output=csv",
  checkIn: "1:00 p. m.",
  checkOut: "11:00 a. m.",
  // Link para que te dejen reseña en Google (Google Business Profile → "Pedir reseñas")
  resenaGoogle: "https://g.page/r/TU-CODIGO/review", // EJEMPLO
  redes: {
    facebook: "https://facebook.com/", // EJEMPLO
    instagram: "https://instagram.com/", // EJEMPLO
    tiktok: "https://tiktok.com/", // EJEMPLO
  },
};

// Habitaciones (EJEMPLO: cambia tipos, capacidad y precios)
// ===== TIPOS DE HABITACIÓN Y PRECIOS =====
// precio = soles por noche. Cámbialo aquí y se actualiza en toda la web
// (tarjetas, edificio 3D, leyenda, totales y mensaje de WhatsApp).
export const habitaciones = [
  {
    id: "matrimonial",
    nombre: "Matrimonial",
    capacidad: "2 personas",
    precio: 50,
    detalle: "Cama de 2 plazas, baño privado con agua caliente, TV y wifi.",
  },
  {
    id: "familiar",
    nombre: "Familiar",
    capacidad: "4 personas",
    precio: 90,
    detalle: "Dos camas de 2 plazas, baño privado con agua caliente, TV y wifi. Ideal para familias o amigos.",
  },
];

// Edificio 3D: distribución real del Hostal Anita (los números de cuarto son EJEMPLO, cámbialos)
// frente = cuarto frontal (vista a la calle). costado = espacios del frente hacia el fondo.
// Un espacio con "etiqueta" y sin "num" se dibuja pero no se puede reservar.
export const edificio = {
  ancho: 1.7,   // proporción del frente
  largo: 3.6,   // proporción del fondo
  pisos: [
    { piso: 1, ingreso: true },
    { piso: 2, frente: { num: "201", tipo: "familiar" }, costado: [
      { etiqueta: "Recepción" }, { etiqueta: "Reservado" }, { num: "202", tipo: "familiar" },
    ]},
    { piso: 3, frente: { num: "301", tipo: "familiar" }, costado: [
      { num: "302", tipo: "familiar" }, { num: "303", tipo: "familiar" },
    ]},
    { piso: 4, frente: { num: "401", tipo: "familiar" }, costado: [
      { num: "402", tipo: "matrimonial" }, { num: "403", tipo: "matrimonial" }, { num: "404", tipo: "matrimonial" },
    ]},
    { piso: 5, frente: { num: "501", tipo: "familiar" }, costado: [
      { num: "502", tipo: "matrimonial" }, { num: "503", tipo: "matrimonial" }, { num: "504", tipo: "matrimonial" },
    ]},
  ],
};

// Lo que hace distinto al hostal
export const tranquilidad = [
  { t: "Puerta controlada", d: "La puerta principal se abre de 6:00 a. m. a 12:00 de la noche. ¿Llegas más tarde? Llamas a recepción y te abrimos." },
  { t: "Cámaras de seguridad", d: "En la entrada y afuera del hostal, para que descanses tranquilo." },
  { t: "Cochera al frente", d: "Hay dos cocheras justo al frente del hostal para dejar tu carro mientras paseas." },
  { t: "Te armamos la ruta", d: "Te decimos cómo llegar a Caral, Áspero o Paramonga y a qué hora salir." },
  { t: "A una cuadra de la plaza", d: "Cerca del mercado, farmacias, supermercados y la playa. Todo lo que necesitas, a pocos pasos." },
];

// La ruta del Norte Chico, ordenada por kilómetro de la Panamericana Norte.
// Fuentes: gob.pe (Zona Arqueológica Caral), Andina, El Peruano.
export const ruta = [
  {
    km: 146,
    nombre: "Vichama",
    corto: "Vichama",
    lugar: "Végueta, Huaura",
    tipo: "Arqueología",
    texto:
      "Ciudad de la civilización Caral junto al mar. Desde su mirador se ve buena parte del litoral del Norte Chico.",
  },
  {
    km: 175,
    nombre: "Albufera de Medio Mundo",
    corto: "Albufera",
    lugar: "Huaura",
    tipo: "Naturaleza",
    texto:
      "Humedal protegido como Área de Conservación Regional desde 2007. Kayak, aves, atardeceres y artesanía de junco y totora.",
  },
  {
    km: 184,
    nombre: "Ciudad Sagrada de Caral",
    corto: "Caral",
    lugar: "Valle de Supe",
    tipo: "Arqueología",
    texto:
      "La ciudad más antigua de América, con unos 5000 años, y Patrimonio Mundial. Abre todos los días de 9:00 a. m. a 4:00 p. m.",
  },
  {
    km: 190,
    nombre: "Barranca y sus playas",
    corto: "Tu hostal",
    lugar: "Distrito de Barranca",
    tipo: "Playa",
    texto:
      "Chorrillos, Miraflores y Puerto Chico al norte; El Colorado, Bandurria y Atarraya al sur. Malecón, ceviche y tacu tacu.",
    base: true,
  },
  {
    km: 191,
    nombre: "Áspero y La Isla",
    corto: "Áspero",
    lugar: "Supe Puerto",
    tipo: "Arqueología y playa",
    texto:
      "Áspero fue la ciudad pesquera de Caral. Muy cerca, detrás de la isla, el mar formó pozas naturales para bañarse.",
  },
  {
    km: 200,
    nombre: "Pativilca",
    corto: "Pativilca",
    lugar: "Distrito de Barranca",
    tipo: "Historia",
    texto:
      "Aquí descansó Simón Bolívar en 1824. Visita el Museo de la Cultura del Norte Chico y la campiña.",
  },
  {
    km: 204,
    nombre: "Fortaleza de Paramonga",
    corto: "Paramonga",
    lugar: "Paramonga",
    tipo: "Arqueología",
    texto:
      "Templo de adobe de la cultura Chimú (1100–1400 d. C.), luego ocupado por los incas. En la zona está también la Casa de las Brujas, de 1920.",
  },
];

export const comida = [
  { n: "Tacu tacu barranquino", d: "El plato que no puedes dejar de probar en Barranca." },
  { n: "Ceviche y chicharrón de pescado", d: "Pesca del día en Chorrillos y Puerto Chico." },
  { n: "Ceviche de pato", d: "Clásico del Norte Chico para el almuerzo." },
  { n: "Salchicha huachana", d: "Desayuno de campeones si pasas por Huacho." },
];

export const faq = [
  {
    q: "¿Cómo llego desde Lima?",
    a: "Son unos 190 km por la Panamericana Norte, cerca de 3 horas en bus o en carro. Hay buses frecuentes desde Lima hacia Barranca y Huacho.",
  },
  {
    q: "¿Cómo voy a Caral desde el hostal?",
    a: "El desvío está en el km 184, a la altura de Supe Pueblo, y desde ahí se entra por el valle. Te recomendamos salir temprano: el sitio abre a las 9:00 a. m. y el último ingreso es a las 4:00 p. m.",
  },
  {
    q: "¿Y a la Fortaleza de Paramonga?",
    a: "Salen colectivos desde Barranca hacia Paramonga, unos 25 minutos de viaje. Pregunta en recepción y te indicamos el paradero.",
  },
  {
    q: "¿Cuál es la mejor época?",
    a: "El verano (diciembre a abril) es temporada de playa. El resto del año es ideal para Caral, Áspero y la Albufera, con menos gente.",
  },
  {
    q: "¿A qué hora cierra la puerta?",
    a: "La puerta principal se abre de 6:00 a. m. a 12:00 de la noche, para que todos descansen tranquilos. Si llegas más tarde, llama a recepción y te abrimos sin problema.",
  },
  {
    q: "¿Cómo reservo?",
    a: "Escríbenos por WhatsApp con tus fechas y el número de personas. Te confirmamos disponibilidad y precio al momento.",
  },
];
