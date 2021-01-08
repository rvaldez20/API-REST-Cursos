const express = require('express');
const router = express.Router();

// importamos el controlador
const indexController = require('../controllers/index.controller');

module.exports = function() {

   router.get('/', indexController.home);
  

   return router;
}