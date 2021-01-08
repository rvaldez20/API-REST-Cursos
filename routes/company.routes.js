const express = require('express');
const router = express.Router();

// importamos el controlador
const companyController = require('../controllers/company.controller');

module.exports = function() {

   // Ruta para obtener todas las companys
   router.get('/company', companyController.mostrarCompanys);


   return router;
}