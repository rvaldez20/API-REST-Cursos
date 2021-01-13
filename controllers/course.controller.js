const Course = require('../models/Course');
const Company = require('../models/Company');

exports.addCourse = async (req, res, next) => {
   try {
      const { name, tags, companySelected } = req.body;
      const company = await Company.findOne({ where: {name: companySelected} });

      if (!company) {
         res.json({ message: 'No se pudo guardar el curso porque la compañia asociada no existe'})
         return next();
      }
      
      //Se obtiene el id de la compañia
      const companyId = company.id;

      // Se guarda en la db y se verifica si se agrego correctamente
      const resultado = await Course.create({name, tags, companyId});
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