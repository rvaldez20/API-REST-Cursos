const express = require('express');
const router = express.Router();

// importamos el controlador
const courseController = require('../controllers/course.controller');

module.exports = function() {

   // Ruta para obtener todos los cursos
   router.get('/course', courseController.getCourses);

   // Ruta para obtener un curso por ID
   router.get('/course/:idCourse', courseController.getCourse);

   // Ruta para agregar un course 
   router.post('/course', courseController.addCourse);

   // Ruta para actualizar un course
   router.put('/course/:idCourse', courseController.updateCourse);

   // Ruta para eliminar un course
   router.delete('/course/:idCourse', courseController.deleteCourse);

   // ROUTES AVANZADAS

   // Ruta para obtener todos los cursos de una compañia
   router.get('/course/company/:nameCompany', courseController.getCourseByCompany);

   return router;
}