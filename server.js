//Dependencias necesarias
const { createServer } = require('http');
const next = require('next');
const app = next({
  dev: process.env.NODE_ENV !== 'production '
});

//Lista de módulos necesarios al momento de iniciar la aplicación web

//Lado del servidor encargado de manejar el servidor donde se encuentra la base datos MongoDB
const serverside = require('./server/app.js');

//Rutas de la aplicación
const routes = require('./routes');

//Manejo de peticiones
const handler = routes.getRequestHandler(app);

//Puerto 3000 en el que corre la aplicación
app.prepare().then(() => {
  createServer(handler).listen(3000, (err) => {
    if (err) throw err;
    console.log('Listo en localhost:3000');
  });
});
