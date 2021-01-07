const express = require('express');
const router = express.Router();

module.exports = function() {

   router.get('/course', (req, res) => {
      res.send('Course Principal');
   });


   return router;
}