// importamos el modelo instructor
const Instructor = require('../models/Instructor');

exports.getInstructors = (req, res, next) => {

   res.send('Ruta Instructor');

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
