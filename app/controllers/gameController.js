// Importa el modelo de juego desde la base de datos
const { Juego } = require("../db/");

// Función para obtener todos los juegos
const getGames = async (req, res) => {
  try {
    // Busca todos los juegos en la base de datos
    const juegos = await Juego.findAll();

    // Devuelve los juegos en formato JSON como respuesta
    res.json(juegos);
  } catch (error) {
    // Maneja los errores al obtener los juegos
    console.error("Error al obtener los juegos:", error);
    res.status(500).json({ error: "Error al obtener los juegos" });
  }
};

// Exporta la función getGames para que pueda ser utilizada en otros archivos
module.exports = { getGames };
