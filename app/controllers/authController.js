// Importa los módulos necesarios
const bcrypt = require("bcrypt");
const { Usuario } = require("../db/");

// Función para registrar nuevos usuarios
const register = async (req, res) => {
  try {
    // Extrae los datos del cuerpo de la solicitud
    const { username, email, password } = req.body;

    // Verifica si se proporcionó un nombre de usuario
    if (!username) {
      return res
        .status(400)
        .json({ message: "El nombre de usuario es requerido" });
    }

    // Busca si ya existe un usuario con el mismo correo electrónico
    const existingUser = await Usuario.findOne({ where: { email } });

    // Si ya existe un usuario con el mismo correo electrónico, devuelve un error
    if (existingUser) {
      return res.status(400).json({ message: "El email ya está registrado" });
    }

    // Hashea la contraseña proporcionada
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crea un nuevo usuario en la base de datos
    const newUser = await Usuario.create({
      nombre_usuario: username,
      email: email,
      password: hashedPassword,
    });

    // Devuelve una respuesta indicando que el usuario se registró correctamente
    res.status(201).json({
      message: "Usuario registrado correctamente",
      userId: newUser.UserID,
      username: newUser.nombre_usuario,
    });
  } catch (error) {
    // Maneja los errores durante el registro (PARA CONTROLAR LOS ERROES)
    console.error("Error al registrar el usuario:", error);
    handleSequelizeError(res, error);
  }
};

// Función para inicio de sesión de usuarios
const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Busca un usuario en la base de datos con el nombre de usuario proporcionado
    const user = await Usuario.findOne({ where: { nombre_usuario: username } });

    // Si no se encuentra ningún usuario devuelve un error
    if (!user) {
      return res.status(401).json({ message: "Usuario no encontrado" });
    }

    // Compara la contraseña proporcionada con la contraseña almacenada en la base de datos (ENCRIPTADA)
    const passwordMatch = await bcrypt.compare(password, user.password);

    // Si las contraseñas no coinciden, devuelve un error
    if (!passwordMatch) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    // Devuelve una respuesta indicando un inicio de sesión exitoso
    res.status(200).json({
      message: "Inicio de sesión exitoso",
      userId: user.UserID,
      username: user.nombre_usuario,
    });
  } catch (error) {
    // Maneja los errores durante el registro (PARA CONTROLAR LOS ERROES)
    console.error("Error al iniciar sesión:", error);
    res.status(500).json({ message: "Error al iniciar sesión" });
  }
};

// Función para manejar errores específicos de Sequelize (PARA CONTROLAR ERRORES DESDE LA CONSOLA)
const handleSequelizeError = (res, error) => {
  if (error.name === "SequelizeValidationError") {
    // Si hay errores de validación, mapea los errores y devuelve una respuesta de error
    const errors = error.errors.map((err) => ({
      field: err.path,
      message: err.message,
    }));
    res.status(400).json({
      message: "Error de validación al registrar el usuario",
      errors,
    });
  } else {
    // Si no son errores de validación, devuelve una respuesta de error genérico
    res.status(500).json({
      message: "Error al registrar el usuario",
      error: error.message,
    });
  }
};

// Exporta las funciones register y login para que puedan ser utilizadas en otros archivos
module.exports = { register, login };
