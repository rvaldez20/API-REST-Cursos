const express = require('express');
const router = express.Router();

// importamos el controlador
const companyController = require('../controllers/company.controller');

module.exports = function() {

   router.get('/company', companyController.obtenerCompanys);


   return router;
}