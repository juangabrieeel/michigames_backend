// Importa los módulos fs, path y Sequelize
const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");

// Importa la configuración de la base de datos desde el archivo config
const config = require("./config");

// Crea una instancia de Sequelize para interactuar con la base de datos
const db = new Sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  config.db
);

// Exporta la instancia de Sequelize para que pueda ser utilizada en otros archivos
module.exports = db;
