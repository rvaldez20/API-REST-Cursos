const { Sequelize } = require('sequelize');

const dbConection = new Sequelize('api_cursos2', 'root', '6038987210', {
   host: 'localhost',
   dialect: 'mysql',
   port: '3306',
   define: {
      timestamps: false
   },
   pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
   }
});

module.exports = dbConection;