'use strict';

//Dependencias necesarias
var routes = require('next-routes')();

//Rutas de la aplicación web
routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBLElBQU0sU0FBUyxBQUFmOztBQUVBO0FBQ0EsT0FDRyxBQURILElBQ08sQUFEUCxrQkFDeUIsQUFEekIsa0JBRUcsQUFGSCxJQUVPLEFBRlAsdUJBRThCLEFBRjlCLG1CQUdHLEFBSEgsSUFHTyxBQUhQLGdDQUd1QyxBQUh2Qyw2QkFJRyxBQUpILElBSU8sQUFKUCxvQ0FJMkMsQUFKM0M7O0FBTUEsT0FBTyxBQUFQLFVBQWlCLEFBQWpCIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9jYXJsb3NkcGQvRGVza3RvcC9raWNrc3RhcnQifQ==