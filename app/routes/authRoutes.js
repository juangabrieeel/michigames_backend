// Importa el módulo express para la creación de rutas
const express = require("express");

// Importa las funciones de registro y inicio de sesión desde el controlador de autenticación
const { register, login } = require("../controllers/authController");

// Crea un enrutador express
const router = express.Router();

// Define las rutas para el registro y el inicio de sesión de usuarios
router.post("/register", register); // Invoca la función de registro
router.post("/login", login); // Invoca la función de inicio de sesión

// Exporta el enrutador para que pueda ser utilizado en otros archivos
module.exports = router;
