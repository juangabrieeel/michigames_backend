# Usa una imagen base de Node.js (elige la versión deseada)
FROM node:20

# Instala las herramientas de compilación necesarias
RUN apt-get update && apt-get install -y build-essential && \
    rm -rf /var/lib/apt/lists/*

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install --production

# Copia el resto de los archivos del proyecto al directorio de trabajo
COPY . .

# Expone el puerto en el que se ejecuta tu servidor (si es necesario)
EXPOSE 3000

# Comando para iniciar tu aplicación al arrancar el contenedor
CMD ["bash", "-c", "node server.js"]
