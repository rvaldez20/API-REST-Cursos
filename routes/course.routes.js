const express = require('express');
const router = express.Router();

// importamos el controlador
const courseController = require('../controllers/course.controller');

module.exports = function() {

   // Ruta para obtener todos los courses
   router.get('/course', courseController.mostrarCourses);


   return router;
}