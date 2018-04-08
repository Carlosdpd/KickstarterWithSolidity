"use strict";
//Used for interaction with the database
var mongoose = require("mongoose");
//Used for the creating of schemas un mongoDB
var Schema = mongoose.Schema;


class finalizedModel{

    constructor(name, schema){
        this.name = name;
        this.schema = schema;
        this.model = mongoose.model(this.name, this.schema);
    }


    createFinalized (finalizedObj) {

            var newFinalized = new this.model({
                campaign: finalizedObj.campaign,
                campaignManager: finalizedObj.campaignManager,
                id: finalizedObj.id

            });
            newFinalized.save(function(err, data) {
                if (err) console.log(err);
                console.log('Finalized created');
            });
        }
}

var Finalized = new finalizedModel('Finalized', new Schema({
    campaign: String,
    campaignManager: String,
    id: String
}));

module.exports = Finalized;
