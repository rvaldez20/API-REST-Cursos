// importamos el modelo instructor
const Instructor = require('../models/Instructor');

// Para obtener todos los instructors
exports.getInstructors = async (req, res, next) => {
   try {
      const instructors = await Instructor.findAll({});
      res.json(instructors);
   } catch (error) {
      console.log(error);
      next();
   }
}

// Para obtener un instructor por ID
exports.getInstructor = async (req, res, next) => {
   const { idInstructor } = req.params;
   try {
      const instructor = await Instructor.findOne({
         where: {
            id: idInstructor
         }
      })
      if(!instructor) {
         res.json({ message: 'El instructor no esta registrado'});
         return next();
      }

      res.json(instructor);
   } catch (error) {
      console.log(error);
      next();
   }
}

// Para agregar un nuevo instructor
exports.addInstructor = async (req, res, next) => {
   const { name, url } = req.body;  
   try {
      await Instructor.create({ name, url });
      res.json({message: 'El instructor se gurado correctamente'});
   } catch (error) {
      console.log(error);
      next();
   }
}
