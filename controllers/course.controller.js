const slug = require('slug');

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


// Para agregar un curso nuevo
exports.addCourse = async (req, res, next) => {
   // res.json({ message: 'end-point en mantenimiento'});

   const { name, tags, companySelected, instructorSelected } = req.body;
   try {
      const company = await Company.findOne({ 
         where: {
            name: companySelected
         } 
      });
      if (!company) {
         res.json({ message: 'No se puede guardar el curso porque la compañia asociada no existe'});
         return next();
      }

      const instructor = await Instructor.findOne({ where: {name: instructorSelected} });
      if(!instructor) {
         res.json({ message: 'No se puede guarda el curso porque el instructor asociado no existe'});
         return next();
      }

      //Se obtiene los id de la compañia e instructor
      const companyId = company.id;
      const instructorId = instructor.id;

      // console.log(companyId);
      // console.log(instructorId);

      // Se guarda en la db y se verifica si se agrego correctamente
      const resultado = await Course.create({name, tags, companyId, instructorId});
      console.log(resultado);
      if(!resultado) {
         res.json({ message: 'Error inesperado, no se pudo guardar el curso'});
         return next();
      }

      res.json({ message: 'El curso se guardo correctamente'})
   } catch (error) {
      console.log(error);
      next();
   }
}

// Para actualizar un curso por ID
exports.updateCourse = async (req, res, next) => {
   const { name, tags, companySelected, instructorSelected } = req.body;
   const { idCourse } = req.params; 

   try {
      const course =  await Course.findOne({ where: {id: idCourse} });
      if(!course) {
         res.json({message: 'El curso que desea actualizar no esta registrado'});
         return next();
      }

      const company = await Company.findOne({ where: {name: companySelected} });
      if(!company) {
         res.json({ message: 'No se puede actualizar el curso porque la compañia asociada no existe' })
         return next();
      }

      const instructor = await Instructor.findOne({ where: {name: instructorSelected} });
      if(!instructor) {
         res.json({message: 'No se puede actualizar el curso porque el instructor asociado no existe' });
         return next();
      }

      // obtenemos los ID de la company e instructor seleccionados
      companyId = company.id;
      instructorId = instructor.id;

      // console.log(companyId);
      // console.log(instructorId);

      const resultado = Course.update({ name, tags, companyId, instructorId }, {
         where: {
            id: idCourse
         }
      });

      if(!resultado) {
         res.json({ message: 'Error inesperado, no se pudo guardar el curso' });
         return next();
      }
      
      res.json({ message: 'El curso se actualizo correctamente'});
   } catch (error) {
      console.log(error);
      next();
   }
}

// Para eliminar un curso
exports.deleteCourse = async (req, res, next) => {
   const { idCourse } = req.params;

   try {
      const course = await Course.findOne({ where: {id: idCourse} });
      if(!course) {
         res.json({ message: 'El curso que desea actualizar no esta registrado' });
         return next();
      }

      const resultado = await Course.destroy({ where: {id: idCourse} });
      if(!resultado) {
         res.json({ message: 'Error inesperado, no se pudo eliminar el curso' });
         return next();
      }

      res.json({ message: 'El curso se elimino correctamente' })
   } catch (error) {
      console.log(error);
      next();
   }
}

/* ------------------ PARA RUTAS AVANZADAS ---------------------- */

// Para obtener todos los courses de una compañia
exports.getCourseByCompany = async (req, res, next) => {
   const { nameCompany } = req.params;
   try {
      const nameCompanySlug = slug(nameCompany);
      console.log(nameCompanySlug);

      // buscamos el id de la company
      const company = await Company.findOne({        
         where: {
            nameSlug: nameCompanySlug
         }
      });

      if(!company) {
         res.json({ message: 'La compañia no esta registrada'});
         return next();
      }

      // obtenemos el idCompany
      // console.log(company.id);

      // buscamos los cursos relacionados con la compañia
      const courses = await Course.findAll({
         include: [Company, Instructor],
         where: {
            companyId: company.id
         }
      });

      if(!courses) {
         res.json({message: 'No hay cursos relacionados con esa compañia'});
         return next();
      }

      res.json(courses);
   } catch (error) {
      console.log(error);
      next();
   }
}