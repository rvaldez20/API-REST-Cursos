const express = require('express');
const router = express.Router();

const instructorController = require('../controllers/instructor.controller');

module.exports = function () {

   // Ruta para obtener todos los instructores
   router.post('/instructor', instructorController.addInstructor);


   return router;
}