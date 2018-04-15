"use strict";
//Dependencia utilizada para la interacción con la base de datos
var mongoose = require("mongoose");
//Dependencia utilizada para la creación de 'Schemas' que dan forma a los objetos a ser guardados en la base de datos
var Schema = mongoose.Schema;

//Modelo de creación de una campaña
class campaignModel{

    //Constructor
    constructor(name, schema){
        this.name = name;
        this.schema = schema;
        this.model = mongoose.model(this.name, this.schema);
    }

    //Creación y guardado del objeto
    createCampaign (campaignObj) {
            var newCampaign = new this.model({
                campaignManager: campaignObj.campaignManager,
                campaignAddress: campaignObj.campaignAddress,
                minimumContribution: campaignObj.minimumContribution,
                maximumContribution: campaignObj.maximumContribution,
                maximumCont: campaignObj.maximumCont,
                approveRate:campaignObj.approveRate,
                rejectRate:campaignObj.rejectRate
            });

            //Guardar en la base de datos
            newCampaign.save(function(err, data) {
                if (err) console.log(err);
                console.log('Campaña almacenada');
            });
        }
}

//Modelo de campaña a ser guardada en la base de datos
var Campaign = new campaignModel('Campaign', new Schema({
    campaignManager: String,
    campaignAddress: String,
    minimumContribution: String,
    maximumContribution: String,
    maximumCont: String,
    approveRate: String,
    rejectRate: String
}));

module.exports = Campaign;
