const Course = require('../models/Course');
const Company = require('../models/Company');
const Instructor = require('../models/Instructor');

// Para obtener todos los courses
exports.getCourses = async (req, res, next) => {
   try {
      // con include obtenemos la informacion de la compañia
      const courses = await Course.findAll({
         attributes: ["id", "name", "tags"],
         include: [Company, Instructor]
      });

      if (!courses) {
         res.json({ message: 'No existen cursos en la DB' });
      }
      
      res.json(courses);
   } catch (error) {
      console.log(error);
      next();
   }
}

// Para obtener un curso por ID
exports.getCourse = async (req, res, next) => {
   const { idCourse } = req.params;
   try {
      const course = await Course.findOne({
         attributes: ["id", "name", "tags"],
         include: [Company, Instructor],
         where: {
            id: idCourse
         }
      });

      if(!course) {
         res.json({ message: 'El curso no esta registrado' });
      }

      res.json(course);
   } catch (error) {
      console.log(error);
      next();
   }
}


// Para agregar un course
exports.addCourse = async (req, res, next) => {
   // res.json({ message: 'end-point en mantenimiento'});

   const { name, tags, companySelected, instructorSelected } = req.body;
   try {
      const company = await Company.findOne({ where: {name: companySelected} });
      if (!company) {
         res.json({ message: 'No se pudo guardar el curso porque la compañia asociada no existe'});
         return next();
      }

      const instructor = await Instructor.findOne({ where: {name: instructorSelected} });
      if(!instructor) {
         res.json({ message: 'No se pudo guarda el curso porque el instructor asociado no existe'});
         return next();
      }

      //Se obtiene los id de la compañia e instructor
      const companyId = company.id;
      const instructorId = instructor.id;

      console.log(companyId);
      console.log(instructorId);

      // Se guarda en la db y se verifica si se agrego correctamente
      const resultado = await Course.create({name, tags, companyId, instructorId});
      console.log(resultado);
      if(!resultado) {
         res.json({ message: 'Error inesperado, no se pudo guardar el curso'});
         return next();
      }

      res.json({ message: 'El curso guardo correctamente'})
   } catch (error) {
      console.log(error);
      next();
   }
}