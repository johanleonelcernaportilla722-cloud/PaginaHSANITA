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
  // Condición de reserva (se muestra junto al botón de reservar y en preguntas frecuentes)
  condicionReserva: "La separación de la habitación se hace mediante pago adelantado.",
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
    detalle: "Cama de 2 plazas, baño privado con agua caliente, TV, wifi y ventilador.",
  },
  {
    id: "familiar",
    nombre: "Familiar",
    capacidad: "4 personas",
    precio: 90,
    detalle: "Dos camas de 2 plazas, baño privado con agua caliente, TV, wifi y ventilador. Ideal para familias o amigos.",
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
  { t: "Espacio para la familia", d: "Habitaciones familiares con dos camas de 2 plazas, TV, wifi y ventilador." },
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

// Platos típicos. momento: desayuno | almuerzo | antojo.
// foto: imagen libre de Wikimedia Commons (se muestra con su crédito). Si tienes tus propias fotos,
// ponlas en public/img/comida/ y cambia "foto" por "/img/comida/archivo.webp" y borra "credito".
const C = "https://upload.wikimedia.org/wikipedia/commons/";
export const comida = [
  { n: "Tamal supano", de: "Supe", momento: "desayuno", d: "El desayuno clásico de Supe: tamal con pan, salsa criolla y un café caliente.",
    foto: C + "thumb/8/82/Tamal_peruano_envuelto.jpg/500px-Tamal_peruano_envuelto.jpg", ancho: 3, alto: 4,
    credito: { autor: "Miguel Alan Córdova Silva", licencia: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Tamal_peruano_envuelto.jpg" } },
  { n: "Chicharrón con camote", de: "Norte Chico", momento: "desayuno", d: "Chicharrón de cerdo, camote frito y pan: el desayuno de domingo, con tamal al lado.",
    foto: C + "thumb/b/bf/Desayuno_dominical_lime%C3%B1o.jpg/500px-Desayuno_dominical_lime%C3%B1o.jpg", ancho: 4, alto: 3,
    credito: { autor: "Miguel Alan Córdova Silva", licencia: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Desayuno_dominical_lime%C3%B1o.jpg" } },
  { n: "Salchicha huachana", de: "Huacho", momento: "desayuno", d: "Roja, frita y con huevo. Un desayuno contundente para un día largo.",
    foto: C + "8/86/Salchicha_huachana_por_ditafel.jpg", ancho: 4, alto: 3,
    credito: { autor: "ditafel", licencia: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Salchicha_huachana_por_ditafel.jpg" } },
  { n: "Tacu tacu barranquino", de: "Barranca", momento: "almuerzo", d: "El plato bandera de Barranca: arroz y frejol dorados, con pescado, mariscos o carne.",
    foto: C + "thumb/a/ac/Tacu_tacu_ba%C3%B1ado_en_sala_de_mariscos.JPG/500px-Tacu_tacu_ba%C3%B1ado_en_sala_de_mariscos.JPG", ancho: 4, alto: 3,
    credito: { autor: "Dtarazona", licencia: "Dominio público", url: "https://commons.wikimedia.org/wiki/File:Tacu_tacu_ba%C3%B1ado_en_sala_de_mariscos.JPG" } },
  { n: "Ceviche y chicharrón de pescado", de: "Puerto Chico", momento: "almuerzo", d: "Pesca del día frente al mar, en Chorrillos y Puerto Chico.",
    foto: C + "0/05/Hora_del_almuerzo_ceviche_chicharron.jpg", ancho: 4, alto: 3,
    credito: { autor: "Go!Pymes Fotos", licencia: "CC BY-SA 2.0", url: "https://commons.wikimedia.org/wiki/File:Hora_del_almuerzo_ceviche_chicharron.jpg" } },
  { n: "Carapulcra", de: "Costa peruana", momento: "almuerzo", d: "Guiso de papa seca con cerdo, maní y ají panca. Sale en almuerzos de fiesta y de domingo.",
    foto: C + "thumb/5/55/Carapulca.jpg/500px-Carapulca.jpg", ancho: 4, alto: 3,
    credito: { autor: "tacowitte", licencia: "CC BY 2.0", url: "https://commons.wikimedia.org/wiki/File:Carapulca.jpg" } },
  { n: "Arroz con pato", de: "Norte Chico", momento: "almuerzo", d: "Clásico del Norte Chico. Pruébalo también en ceviche de pato: cocido y sazonado con ají.",
    foto: C + "thumb/c/c5/2021-02-07_Arroz_pato_ceviche.jpg/500px-2021-02-07_Arroz_pato_ceviche.jpg", ancho: 3, alto: 4,
    credito: { autor: "MiguelAlanCS", licencia: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:2021-02-07_Arroz_pato_ceviche.jpg" } },
  { n: "Dulces de Barranca", de: "Barranca", momento: "antojo", d: "Alfajores, buñuelos, turrones e higos rellenos.",
    foto: C + "thumb/3/3f/Alfajores_peruanos_2018.jpg/500px-Alfajores_peruanos_2018.jpg", ancho: 4, alto: 3,
    credito: { autor: "MiguelAlanCS", licencia: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Alfajores_peruanos_2018.jpg" } },
  { n: "Pisco y vino de la zona", de: "Barranca", momento: "antojo", d: "Hechos por productores locales, para acompañar los dulces o brindar en un pisco sour.",
    foto: C + "thumb/3/37/Pisco_sour_%28buffet%29.JPG/500px-Pisco_sour_%28buffet%29.JPG", ancho: 4, alto: 3,
    credito: { autor: "Dtarazona", licencia: "CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:Pisco_sour_(buffet).JPG" } },
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
    a: "Salen colectivos desde Barranca hacia Paramonga, unos 25 minutos de viaje. Los colectivos salen del centro de Barranca.",
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
    a: "Elige tus habitaciones en el edificio y envíanos el mensaje por WhatsApp con tus fechas. La separación de la habitación se hace mediante pago adelantado; sin pago, la habitación no queda reservada.",
  },
];
