module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define("Usuario", {
    UserID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      // Metodo encargado de validar el email
      validate: {
        isEmail: true, 
      },
    },
  });

  return Usuario;
};
