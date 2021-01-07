const express = require('express');
const router = express.Router();

module.exports = function() {

   router.get('/company', (req, res) => {
      res.send('Company Principal');
   });


   return router;
}