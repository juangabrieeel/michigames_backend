// Importa el módulo db que contiene los modelos de la base de datos
const db = require("../db/");

// Función asincrónica para cargar juegos en la base de datos
async function cargarJuegos() {
  // Array de juegos a insertar en la base de datos
  const juegos = [
    {
      titulo: "Hoop World",
      descripcion:
        "Hoop World es un juego de baloncesto el cual consiste en hacer piruetas con el objetivo de encestar la pelota",
      categoria: "Deporte",
      url: "hoop-world-3d",
      imagen: "hope_world.jpg",
    },
    {
      titulo: "Galaxy Clicker",
      descripcion:
        "¡Recoge energía, compra más estrellas, aumenta tu eficiencia y crea tu propia galaxia! Cuantas más estrellas tengas, más energía obtendrás",
      categoria: "Juegos de clicks",
      url: "galaxy-clicker",
      imagen: "galaxy_clicker.jpg",
    },
    {
      titulo: "Space waves",
      descripcion:
        "Space Waves es un juego arcade en el que debes controlar una flecha para evitar obstáculos hasta llegar al final",
      categoria: "Arcade",
      url: "space-waves",
      imagen: "space_waves.jpg",
    },
    {
      titulo: "Tap-Tap Shots",
      descripcion:
        "Tap-Tap Shots es un adictivo juego de baloncesto sin fin en el que tocas la pelota para hacerla saltar. Calcula perfectamente tus toques para anotar antes de que se acabe el tiempo",
      categoria: "Deporte",
      url: "tap-tap-shots",
      imagen: "taptap.jpg",
    },
    {
      titulo: "8 Ball Billiards Classic",
      descripcion:
        "8-Ball Billiards es un juego de billar gratuito en línea. Puedes jugar solo contra la IA o desafiar a otros jugadores en el modo de dos jugadores",
      categoria: "Deporte",
      url: "8-ball-billiards-classic",
      imagen: "8billar.jpg",
    },
    {
      titulo: "Table Tennis World Tour",
      descripcion:
        "Table Tennis World Tour es un emocionante juego de deportes en el que juegas tenis de mesa contra varios oponentes. Elige tu nación y dirígete al mundo",
      categoria: "Deporte",
      url: "table-tennis-world-tour",
      imagen: "table_tennis_world_tour.jpg",
    },
    {
      titulo: "Elastic Man",
      descripcion:
        "Elastic Man es un personaje en 3D con una cara estirable que brinda una experiencia sensorial única y satisfactoria.",
      categoria: "3D",
      url: "elastic-man",
      imagen: "elastic_man.jpg",
    },
    {
      titulo: "New Year Makeup Trends",
      descripcion:
        "New Year Makeup Trends es un juego de moda gratuito en el que ayudas a Ellie, Olivia y Kiki a encontrar el look perfecto para el nuevo año. Mezcla y combina peinados, vestidos...",
      categoria: "Makeup",
      url: "new-year-makeup-trends",
      imagen: "new_year_makeup_trends.jpg",
    },
    {
      titulo: "Clock Clicker",
      descripcion:"Clock Clicker es un juego idle magistral que puedes disfrutar aquí en 1001juegos.com directamente en tu navegador. Este altamente adictivo juego idle funciona con tecnología HTML5 para funcionar rápidamente en cualquiera de los navegadores modernos.",
      categoria: "Arcade",
      url: "clock-clicker",
      imagen: "clock_clicker.jpg",
    },
  ];

  try {
    // Inserta los juegos en la base de datos utilizando el método bulkCreate de Sequelize
    const juegosInsertados = await db.Juego.bulkCreate(juegos);
    console.log(
      `Se insertaron ${juegosInsertados.length} juegos correctamente.`
    );
  } catch (error) {
    // Maneja los errores en caso de fallar la inserción de los juegos
    console.error("Error al insertar juegos:", error);
  }
}

// Invoca la función para cargar los juegos en la base de datos
cargarJuegos();
