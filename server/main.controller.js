const express = require('express');
const router = express.Router();

//Models used in Mongoose (located in core)
const mongoose = require('mongoose');
const Contribution = require('./models/contribution.model.js');
const Campaign = require('./models/campaign.model.js');
const Request = require('./models/request.model.js');
const Finalized = require('./models/finalized.model.js');
const Approved = require('./models/approved.model.js');

//Body Parser
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post('/contribution', function (req, res) {

  let contributionObj = {};

  contributionObj.campaignAddress = req.body.campaignAddress;
  contributionObj.value = req.body.value;
  contributionObj.fromAddress = req.body.fromAddress;

  Contribution.createContribution(contributionObj);


});

router.post('/campaign', function (req, res) {

  let campaignObj = {};

  campaignObj.campaignManager = req.body.campaignManager;
  campaignObj.campaignAddress = req.body.campaignAddress;
  campaignObj.minimumContribution = req.body.minimumContribution;
  campaignObj.maximumContribution = req.body.maximumContribution;
  campaignObj.maximumCont = req.body.maximumCont;

  Campaign.createCampaign(campaignObj);

});

router.post('/request', function (req, res) {

  let requestObj = {};

  requestObj.campaignManager = req.body.campaignManager;
  requestObj.toAddress = req.body.toAddress;
  requestObj.value = req.body.value;
  requestObj.description = req.body.description;


  Request.createRequest(requestObj);

});

router.post('/finalized', function (req, res) {

  let finalizedObj = {};

  finalizedObj.campaign = req.body.campaign;
  finalizedObj.campaignManager = req.body.campaignManager;
  finalizedObj.id = req.body.id;



  Finalized.createFinalized(finalizedObj);

});

router.post('/approved', function (req, res) {

  let approvedObj = {};

  approvedObj.campaign = req.body.campaign;
  approvedObj.approverAddress = req.body.approverAddress;
  approvedObj.id = req.body.id;



  Approved.createApproved(approvedObj);

});

module.exports = router;
