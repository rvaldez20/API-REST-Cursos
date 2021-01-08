// importamos el modelo Company
const Company = require('../models/Company');

exports.mostrarCompanys = async (req, res, next) => {
   // res.send('Company Principal');

   try {
      const companys = await Company.findAll({
         attributes: ['id_company', 'nom_company', 'pais']
      });

      // console.log(companys);
      res.json(companys);
      
   } catch (error) {
      console.log(error);
      next();
   }
}