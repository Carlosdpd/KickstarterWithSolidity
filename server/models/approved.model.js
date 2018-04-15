"use strict";
//Dependencia utilizada para la interacción con la base de datos
var mongoose = require("mongoose");
//Dependencia utilizada para la creación de 'Schemas' que dan forma a los objetos a ser guardados en la base de datos
var Schema = mongoose.Schema;

//Modelo de aprobación a solicitud
class approvedModel{

    //Constructor
    constructor(name, schema){
        this.name = name;
        this.schema = schema;
        this.model = mongoose.model(this.name, this.schema);
    }


    //Creación y guardado del objeto
    createApproved (approvedObj) {

            var newApproved = new this.model({
                campaign: approvedObj.campaign,
                approverAddress: approvedObj.approverAddress,
                id: approvedObj.id

            });

            //Guardar en la base de datos
            newApproved.save(function(err, data) {
                if (err) console.log(err);
                console.log('Aprobación almacenada');
            });
        }
}

//Modelo de solicitud aprobada a ser guardada en la base de datos
var Approved = new approvedModel('Approved', new Schema({
    campaign: String,
    approverAddress: String,
    id: String
}));

module.exports = Approved;
