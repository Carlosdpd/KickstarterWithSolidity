"use strict";
//Dependencia utilizada para la interacción con la base de datos
var mongoose = require("mongoose");
//Dependencia utilizada para la creación de 'Schemas' que dan forma a los objetos a ser guardados en la base de datos
var Schema = mongoose.Schema;

//Modelo de finalización de una solicitud
class finalizedModel{

    //Constructor
    constructor(name, schema){
        this.name = name;
        this.schema = schema;
        this.model = mongoose.model(this.name, this.schema);
    }

    //Creación y guardado del objeto
    createFinalized (finalizedObj) {
            var newFinalized = new this.model({
                campaign: finalizedObj.campaign,
                campaignManager: finalizedObj.campaignManager,
                id: finalizedObj.id

            });

            //Guardar en la base de datos
            newFinalized.save(function(err, data) {
                if (err) console.log(err);
                console.log('Finalización almacenada');
            });
        }
}

//Modelo de finalización de una solicitud a ser guardada en la base de datos
var Finalized = new finalizedModel('Finalized', new Schema({
    campaign: String,
    campaignManager: String,
    id: String
}));

module.exports = Finalized;
