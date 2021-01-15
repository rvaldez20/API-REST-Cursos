// importamos el modelo instructor
const Instructor = require('../models/Instructor');

exports.getInstructors = async (req, res, next) => {
   try {
      const instructors = await Instructor.findAll({});
      res.json(instructors);
   } catch (error) {
      console.log(error);
      next();
   }
}

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
