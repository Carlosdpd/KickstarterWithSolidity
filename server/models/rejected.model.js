"use strict";
//Dependencia utilizada para la interacción con la base de datos
var mongoose = require("mongoose");
//Dependencia utilizada para la creación de 'Schemas' que dan forma a los objetos a ser guardados en la base de datos
var Schema = mongoose.Schema;

//Modelo de rechazo a solicitud
class rejectedModel{

    //Constructor
    constructor(name, schema){
        this.name = name;
        this.schema = schema;
        this.model = mongoose.model(this.name, this.schema);
    }


    //Creación y guardado del objeto
    createRejected (rejectedObj) {

            var newRejected = new this.model({
                campaign: rejectedObj.campaign,
                rejecterAddress: rejectedObj.rejecterAddress,
                id: rejectedObj.id

            });

            //Guardar en la base de datos
            newRejected.save(function(err, data) {
                if (err) console.log(err);
                console.log('Rechazo almacenado');
            });
        }
}

//Modelo de solicitud rechazada a ser guardada en la base de datos
var Rejected = new rejectedModel('Rejected', new Schema({
    campaign: String,
    approverAddress: String,
    id: String
}));

module.exports = Rejected;
