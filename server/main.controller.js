//Dependencias necesarias
const express = require('express');
const router = express.Router();

//Modelos de objetos a guardar en la base de datos
const mongoose = require('mongoose');
const Contribution = require('./models/contribution.model.js');
const Campaign = require('./models/campaign.model.js');
const Request = require('./models/request.model.js');
const Finalized = require('./models/finalized.model.js');
const Approved = require('./models/approved.model.js');
const Rejected = require('./models/rejected.model.js');

//Body Parser para procesar solicitudes HTTP
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

//Ruta que maneja 'contribution', que almacena una solicitud
router.post('/contribution', function (req, res) {

  let contributionObj = {};
  contributionObj.campaignAddress = req.body.campaignAddress;
  contributionObj.value = req.body.value;
  contributionObj.fromAddress = req.body.fromAddress;
  Contribution.createContribution(contributionObj);

});

//Ruta que maneja 'campaign', que almacena una campaña nueva
router.post('/campaign', function (req, res) {

  let campaignObj = {};
  campaignObj.campaignManager = req.body.campaignManager;
  campaignObj.campaignAddress = req.body.campaignAddress;
  campaignObj.minimumContribution = req.body.minimumContribution;
  campaignObj.maximumContribution = req.body.maximumContribution;
  campaignObj.maximumCont = req.body.maximumCont;
  campaignObj.approveRate = req.body.approveRate;
  campaignObj.rejectRate = req.body.rejectRate;

  Campaign.createCampaign(campaignObj);

});

//Ruta que maneja 'request', que almacena una solicitud nueva
router.post('/request', function (req, res) {

  let requestObj = {};
  requestObj.campaignManager = req.body.campaignManager;
  requestObj.toAddress = req.body.toAddress;
  requestObj.value = req.body.value;
  requestObj.description = req.body.description;

  Request.createRequest(requestObj);

});

//Ruta que maneja 'finalized', que almacena una finalización de una solicitud
router.post('/finalized', function (req, res) {

  let finalizedObj = {};
  finalizedObj.campaign = req.body.campaign;
  finalizedObj.campaignManager = req.body.campaignManager;
  finalizedObj.id = req.body.id;

  Finalized.createFinalized(finalizedObj);

});

//Ruta que maneja 'approved', que almacena una aprobación de una solicitud
router.post('/approved', function (req, res) {

  let approvedObj = {};
  approvedObj.campaign = req.body.campaign;
  approvedObj.approverAddress = req.body.approverAddress;
  approvedObj.id = req.body.id;

  Approved.createApproved(approvedObj);

});

//Ruta que maneja 'rejected', que almacena un rechazo de una solicitud
router.post('/rejected', function (req, res) {

  let rejectedObj = {};

  rejectedObj.campaign = req.body.campaign;
  rejectedObj.approverAddress = req.body.approverAddress;
  rejectedObj.id = req.body.id;

  Rejected.createRejected(rejectedObj);

});

module.exports = router;
