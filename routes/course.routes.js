const express = require('express');
const router = express.Router();

// importamos el controlador
const courseController = require('../controllers/course.controller');

module.exports = function() {

   // Ruta para agregar un course 
   router.post('/course', courseController.addCourse);


   return router;
}