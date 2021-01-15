const express = require('express');
const router = express.Router();

const instructorController = require('../controllers/instructor.controller');

module.exports = function () {

   // Ruta para agregar un instructor
   router.post('/instructor', instructorController.addInstructor);

   // Ruta para obtener todos los instructores
   router.get('/instructor', instructorController.getInstructors);


   return router;
}