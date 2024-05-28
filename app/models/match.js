module.exports = (sequelize, DataTypes) => {
  const Partida = sequelize.define("Partida", {
    PartidaID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    duracion_partida: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nombre_usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nombre_juego: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  // Asociación con la tabla Usuario y Juego de la base de datos
  Partida.associate = (models) => {
    Partida.belongsTo(models.Usuario, { foreignKey: "UserID" });
    Partida.belongsTo(models.Juego, { foreignKey: "JuegoID" });
  };

  return Partida;
};
