// importamos el modelo Company
const Company = require('../models/Company');

// Obtiene todas las companys
exports.getCompanys = async (req, res, next) => {
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


// Obtiene una compañy por ID
exports.getCompany = async (req, res, next) => {   
   try {
      // obtenemos el idCompany
      const { idCompany } = req.params;

      const company = await Company.findOne({
         where: {
            id_company: idCompany
         }
      })

      if (!company){
         res.json({ message: 'La compañia no esta registrada' });
         return next();
      }

      res.json(company);

   } catch (error) {
      console.log(error);
      next();
   }

}