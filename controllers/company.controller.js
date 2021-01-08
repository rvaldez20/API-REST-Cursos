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

// Para agregra un anueva company
exports.addCompany = async (req, res, next) => {   
   const {nom_company, pais} = req.body;
   try {
      await Company.create({ nom_company, pais });
      res.json({ message: 'La Campañia se guado correctamente' });
      
   } catch (error) {
      console.log(error);
      next();
   }
}

// Para actualizar una company
exports.updateCompany = async (req, res, next) => {
   const { nom_company, pais } = req.body;   
   const { idCompany } = req.params;

   try {
      await Company.update({ nom_company, pais },{
         where: {
            id_company: idCompany
         }
      });

      res.json({ message: 'La compañia se actualizo correctamente' });
   } catch (error) {
      console.log(error);
      next();
   }
}

// Para eliminar una company
exports.deleteCompany = async (req, res, next) => {
   const { idCompany } = req.params;

   try {
      await Company.destroy({
         where: {
            id_company: idCompany
         }
      });

      res.json({ message: 'La compañia ha sido eliminada correctamente' });
   } catch (error) {
      console.log(error);
      next();
   }
}