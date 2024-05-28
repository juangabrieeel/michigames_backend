// Configuración CORS acerca del puerto a usar en la aplicación
const corsOptions = {
  origin: "http://localhost", // La ruta desde donde llegan las peticiones
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
