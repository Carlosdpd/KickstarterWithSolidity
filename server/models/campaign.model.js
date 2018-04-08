"use strict";
//Used for interaction with the database
var mongoose = require("mongoose");
//Used for the creating of schemas un mongoDB
var Schema = mongoose.Schema;


class campaignModel{

    constructor(name, schema){
        this.name = name;
        this.schema = schema;
        this.model = mongoose.model(this.name, this.schema);
    }


    createCampaign (campaignObj) {
            var newCampaign = new this.model({
                campaignManager: campaignObj.campaignManager,
                campaignAddress: campaignObj.campaignAddress,
                minimumContribution: campaignObj.minimumContribution,
                maximumContribution: campaignObj.maximumContribution,
                maximumCont: campaignObj.maximumCont
            });
            newCampaign.save(function(err, data) {
                if (err) console.log(err);
                console.log('Campaign created');
            });
        }
}

var Campaign = new campaignModel('Campaign', new Schema({
    campaignManager: String,
    campaignAddress: String,
    minimumContribution: String,
    maximumContribution: String,
    maximumCont: String
}));

module.exports = Campaign;
