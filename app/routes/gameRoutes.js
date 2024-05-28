// Importa el módulo express para la creación de rutas
const express = require("express");

// Importa la función para obtener juegos desde el controlador de juegos
const { getGames } = require("../controllers/gameController");

// Crea un enrutador express
const router = express.Router();

// Define la ruta para obtener juegos
router.get("/juegos", getGames); // Invoca la función para obtener juegos

// Exporta el enrutador para que pueda ser utilizado en otros archivos
module.exports = router;
