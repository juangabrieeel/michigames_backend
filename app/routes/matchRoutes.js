// Importa el módulo express para la creación de rutas
const express = require("express");

// Importa las funciones para registrar partidas y obtener las últimas partidas desde el controlador de partidas
const {
  registerMatch,
  getLastMatches,
} = require("../controllers/matchController");

// Crea un enrutador express
const router = express.Router();

// Define la ruta para registrar una partida
router.post("/partidas/registrar", registerMatch); // Invoca la función para registrar una partida

// Define la ruta para obtener las últimas partidas
router.get("/partidas/ultimas", getLastMatches); // Invoca la función para obtener las últimas partidas

// Exporta el enrutador para que pueda ser utilizado en otros archivos
module.exports = router;
