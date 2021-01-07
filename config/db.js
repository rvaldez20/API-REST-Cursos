const { Sequelize } = require('sequelize');

const db = new Sequelize('api_cursos2', 'root', '6038987210', {
   host: 'localhost',
   dialect: 'mysql',
   operatorsAliases: false,
   port: '3306',
   define: {
      timestamps: true
   },
   pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
   }
});

module.exports = db;