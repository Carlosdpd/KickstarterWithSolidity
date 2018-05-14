//Uso de express
const express = require('express');
const app = express();

//Mongo Plugin
var mongoose = require("mongoose");

//Conexión a la base de datos
mongoose.connect('mongodb://localhost/campaignDB');
var db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", function() {
    console.log("Conectado a la base de datos.");
});

// Permitir solicitudes HTTP interactuar con el servidor
app.use(function(req, res, next) {
res.header('Access-Control-Allow-Credentials', true);
res.header('Access-Control-Allow-Origin', req.headers.origin);
res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Authorization');
if ('OPTIONS' == req.method) {
     res.sendStatus(200);
 } else {
     next();
 }
});

//Router
const router = require("./routes/router.js")(app);

//Puerto en el que corre el servidor que maneja la base de datos
app.listen(8000, function () {
  console.log('Escuchando en el puerto 8000');
});
