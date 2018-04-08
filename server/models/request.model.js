"use strict";
//Used for interaction with the database
var mongoose = require("mongoose");
//Used for the creating of schemas un mongoDB
var Schema = mongoose.Schema;


class requestModel{

    constructor(name, schema){
        this.name = name;
        this.schema = schema;
        this.model = mongoose.model(this.name, this.schema);
    }


    createRequest (requestObj) {

            var newRequest = new this.model({
                campaignManager: requestObj.campaignManager,
                toAddress: requestObj.toAddress,
                value: requestObj.value,
                description: requestObj.description,

            });
            newRequest.save(function(err, data) {
                if (err) console.log(err);
                console.log('Request created');
            });
        }
}

var Request = new requestModel('Request', new Schema({
    campaignManager: String,
    toAddress: String,
    value: String,
    description: String,
}));

module.exports = Request;
