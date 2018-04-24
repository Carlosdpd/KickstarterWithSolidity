'use strict';

//Dependencias necesarias
var routes = require('next-routes')();

//Rutas de la aplicación web
routes
//:address representa la parte dinámica de la ruta, el segundo parametro, representa el archivo en el directorio 'pages' que será desplegado
.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBLElBQU0sU0FBUyxBQUFmOztBQUVBO0FBQ0E7QUFDRSxBQURGO0NBRUcsQUFGSCxJQUVPLEFBRlAsa0JBRXlCLEFBRnpCLGtCQUdHLEFBSEgsSUFHTyxBQUhQLHVCQUc4QixBQUg5QixtQkFJRyxBQUpILElBSU8sQUFKUCxnQ0FJdUMsQUFKdkMsNkJBS0csQUFMSCxJQUtPLEFBTFAsb0NBSzJDLEFBTDNDOztBQU9BLE9BQU8sQUFBUCxVQUFpQixBQUFqQiIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2hvcmFjaW9jb2xsL0Rlc2t0b3AvVGVzaXMvS2lja3N0YXJ0ZXJXaXRoU29saWRpdHkifQ==