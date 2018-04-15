"use strict";
//Dependencia utilizada para la interacción con la base de datos
var mongoose = require("mongoose");
//Dependencia utilizada para la creación de 'Schemas' que dan forma a los objetos a ser guardados en la base de datos
var Schema = mongoose.Schema;

//Modelo de solicitud a una campaña
class requestModel{

    //Constructor
    constructor(name, schema){
        this.name = name;
        this.schema = schema;
        this.model = mongoose.model(this.name, this.schema);
    }

    //Creación y guardado del objeto
    createRequest (requestObj) {
            var newRequest = new this.model({
                campaignManager: requestObj.campaignManager,
                toAddress: requestObj.toAddress,
                value: requestObj.value,
                description: requestObj.description,
                createdAt: requestObj.createdAt

            });

            //Guardar en la base de datos
            newRequest.save(function(err, data) {
                if (err) console.log(err);
                console.log('Solicitud almacenada');
            });
        }
}

//Modelo de solicitud a ser guardada en la base de datos
var Request = new requestModel('Request', new Schema({
    campaignManager: String,
    toAddress: String,
    value: String,
    description: String,
    createdAt: Number
}));

module.exports = Request;
