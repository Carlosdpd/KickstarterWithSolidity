"use strict";
//Used for interaction with the database
var mongoose = require("mongoose");
//Used for the creating of schemas un mongoDB
var Schema = mongoose.Schema;


class contributionModel{

    constructor(name, schema){
        this.name = name;
        this.schema = schema;
        this.model = mongoose.model(this.name, this.schema);
    }


    createContribution (contributionObj) {
            var newContribution = new this.model({
                campaignAddress: contributionObj.campaignAddress,
                value: contributionObj.value,
                fromAddress: contributionObj.fromAddress
            });
            newContribution.save(function(err, data) {
                if (err) console.log(err);
                console.log('Contribution created');
            });
        }
}

var Contribution = new contributionModel('Contribution', new Schema({
    campaignAddress: String,
    value: String,
    fromAddress: String
}));

module.exports = Contribution;
