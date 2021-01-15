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

   // Ruta para actualizar un isntructor por ID
   router.put('/instructor/:idInstructor', instructorController.updateInstructor);

   // Ruta para eliminar un instructor por ID
   router.delete('/instructor/:idInstructor', instructorController.deleteInstructor);

   return router;
}