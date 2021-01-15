const express = require('express');
const router = express.Router();

const instructorController = require('../controllers/instructor.controller');

module.exports = function () {   

   // Ruta para obtener todos los instructores
   router.get('/instructor', instructorController.getInstructors);

   // Ruta para obtener un instructor por ID
   router.get('/instructor/:idInstructor', instructorController.getInstructor);

   // Ruta para agregar un instructor
   router.post('/instructor', instructorController.addInstructor);

   


   return router;
}