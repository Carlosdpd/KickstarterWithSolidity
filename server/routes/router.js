module.exports = function (app) {

	//Ruta para el procesamiento de solicitudes
    app.use('/', require('../main.controller.js'));

};
