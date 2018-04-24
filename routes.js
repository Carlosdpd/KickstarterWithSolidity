//Dependencias necesarias
const routes = require('next-routes')();

//Rutas de la aplicación web
routes
  //:address representa la parte dinámica de la ruta, el segundo parametro, representa el archivo en el directorio 'pages' que será desplegado
  .add('/campaigns/new', '/campaigns/new')
  .add('/campaigns/:address', '/campaigns/show')
  .add('/campaigns/:address/requests', '/campaigns/requests/index')
  .add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
