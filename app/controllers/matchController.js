// Importa el modelo de partida desde la base de datos
const { Partida } = require("../db/");

// Función para registrar una nueva partida
const registerMatch = async (req, res) => {
  // Extrae los datos necesarios del cuerpo de la solicitud
  const { JuegoID, duracion_partida, nombre_usuario, nombre_juego } = req.body;

  try {
    // Verifica si se proporcionaron todos los datos necesarios para registrar la partida
    if (!JuegoID || !nombre_usuario || !nombre_juego) {
      return res
        .status(400)
        .json({ error: "Datos incompletos para registrar la partida" });
    }

    // Crea una nueva partida en la base de datos con los datos proporcionados
    const nuevaPartida = await Partida.create({
      JuegoID,
      duracion_partida,
      nombre_usuario,
      nombre_juego,
    });

    // Devuelve la nueva partida creada como respuesta
    res.status(201).json(nuevaPartida);
  } catch (error) {
    // Maneja los errores al registrar la partida
    console.error("Error al registrar la partida:", error);
    res.status(500).json({ error: "Error al registrar la partida" });
  }
};

// Función para obtener las últimas partidas registradas
const getLastMatches = async (req, res) => {
  try {
    // Busca las últimas 20 partidas registradas en la base de datos, ordenadas por fecha de creación descendente
    const ultimasPartidas = await Partida.findAll({
      limit: 20, // [MOD] Para variar entre las filas a mostrar
      order: [["createdAt", "DESC"]],
    });

    // Devuelve las últimas partidas encontradas como respuesta
    res.json(ultimasPartidas);
  } catch (error) {
    // Maneja los errores al obtener las últimas partidas
    console.error("Error al obtener las últimas partidas:", error);
    res.status(500).json({ error: "Error al obtener las últimas partidas" });
  }
};

// Exporta las funciones registerMatch y getLastMatches para que puedan ser utilizadas en otros archivos
module.exports = { registerMatch, getLastMatches };
