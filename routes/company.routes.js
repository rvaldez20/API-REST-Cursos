const express = require('express');
const router = express.Router();

// importamos el controlador
const companyController = require('../controllers/company.controller');

module.exports = function() {

   // Route para obtener todas las companys
   router.get('/company', companyController.getCompanys);

   // Route para obtener una company por ID
   router.get('/company/:idCompany', companyController.getCompany);

   return router;
}