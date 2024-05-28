// Importa Sequelize y DataTypes desde sequelize para la configuración de la base de datos
const { Sequelize, DataTypes } = require("sequelize");

// Configuración de la base de datos
const sequelize = new Sequelize("michigames", "usuario", "usuario", {
  // Se configura como database ya que es el nombre dado en el docker-compose
  host: "database",
  dialect: "mysql",
});

// Importa los modelos de usuario, juego y partida
const Usuario = require("../models/user")(sequelize, DataTypes);
const Juego = require("../models/game")(sequelize, DataTypes);
const Partida = require("../models/match")(sequelize, DataTypes);

// Autentica la conexión a la base de datos, en caso de que no se conecte envia un mensaje de error
sequelize
  .authenticate()
  .then(() => {
    console.log("Conectado a la base de datos");
  })
  .catch((error) => {
    console.error("No se pudo conectar a la base de datos:", error);
  });

// Exporta la instancia de sequelize y los modelos Usuario, Juego y Partida para su uso en otros archivos
module.exports = {
  sequelize,
  Usuario,
  Juego,
  Partida,
};
