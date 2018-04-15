"use strict";
//Dependencia utilizada para la interacción con la base de datos
var mongoose = require("mongoose");
//Dependencia utilizada para la creación de 'Schemas' que dan forma a los objetos a ser guardados en la base de datos
var Schema = mongoose.Schema;

//Modelo de contribución a una campaña
class contributionModel{

    //Constructor
    constructor(name, schema){
        this.name = name;
        this.schema = schema;
        this.model = mongoose.model(this.name, this.schema);
    }

    //Creación y guardado del objeto
    createContribution (contributionObj) {
            var newContribution = new this.model({
                campaignAddress: contributionObj.campaignAddress,
                value: contributionObj.value,
                fromAddress: contributionObj.fromAddress
            });
            newContribution.save(function(err, data) {
                if (err) console.log(err);
                console.log('Contribución almacenada');
            });
        }
}

//Modelo de contribución a ser guardada en la base de datos
var Contribution = new contributionModel('Contribution', new Schema({
    campaignAddress: String,
    value: String,
    fromAddress: String
}));

module.exports = Contribution;
