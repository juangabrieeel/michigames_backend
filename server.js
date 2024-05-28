// Se importan en constantes modelos, configuración y otras caracteristicas
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./app/db/");
const corsConfig = require("./config/corsConfig");

const app = express();

// Middlewares
app.use(express.json());
app.use(bodyParser.json());
app.use(cors(corsConfig));

// Rutas
const authRoutes = require("./app/routes/authRoutes");
const gameRoutes = require("./app/routes/gameRoutes");
const matchRoutes = require("./app/routes/matchRoutes");

app.use("/api", authRoutes);
app.use("/api", gameRoutes);
app.use("/api", matchRoutes);

// Puerto donde se ejecuta el servidor
const PORT = 3000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express corriendo en http://localhost:${PORT}`);
});

// Sincronización de los modelos con la base de datos
db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Tablas sincronizadas con la base de datos");
  })
  .catch((error) => {
    console.error("Error al sincronizar tablas:", error);
  });
