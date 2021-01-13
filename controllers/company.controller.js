// importamos el modelo Company
const Company = require('../models/Company');

// Obtiene todas las companys
exports.getCompanys = async (req, res, next) => {
   // res.send('Company Principal');

   try {
      const companys = await Company.findAll({
         attributes: ['id', 'name', 'contry']
      });
 
      res.json(companys);
      
   } catch (error) {
      console.log(error);
      next();
   }
}


// Obtiene una compañy por ID
exports.getCompany = async (req, res, next) => {   
   try {
      const { idCompany } = req.params;

      const company = await Company.findOne({
         where: {
            id: idCompany
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
   const { name, contry } = req.body;
   try {
      await Company.create({ name, contry });
      res.json({ message: 'La Campañia se guado correctamente' });
      
   } catch (error) {
      console.log(error);
      next();
   }
}

// Para actualizar una company
exports.updateCompany = async (req, res, next) => {
   const { name, contry } = req.body;   
   const { idCompany } = req.params;

   try {
      const company = await Company.findOne({
         where: {
            id: idCompany
         }
      });

      if(!company) {
         res.json({ message: 'La compañia que desea actualizar no existe' });
         return next();
      }

      await Company.update({ nom_company, pais },{
         where: {
            id: idCompany
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
      const company = await Company.findOne({
         where: {
            id: idCompany
         }
      });

      if(!company) {
         res.json({ message: 'La compañia que desea eliminar no existe' });
         return next();
      }

      await Company.destroy({
         where: {
            id: idCompany
         }
      });

      res.json({ message: 'La compañia ha sido eliminada correctamente' });
   } catch (error) {
      console.log(error);
      next();
   }
}