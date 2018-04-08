"use strict";
//Used for interaction with the database
var mongoose = require("mongoose");
//Used for the creating of schemas un mongoDB
var Schema = mongoose.Schema;


class approvedModel{

    constructor(name, schema){
        this.name = name;
        this.schema = schema;
        this.model = mongoose.model(this.name, this.schema);
    }


    createApproved (approvedObj) {

            var newApproved = new this.model({
                campaign: approvedObj.campaign,
                approverAddress: approvedObj.approverAddress,
                id: approvedObj.id

            });
            newApproved.save(function(err, data) {
                if (err) console.log(err);
                console.log('Approved created');
            });
        }
}

var Approved = new approvedModel('Approved', new Schema({
    campaign: String,
    approverAddress: String,
    id: String
}));

module.exports = Approved;
