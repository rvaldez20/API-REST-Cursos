const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db');

const Company = require('./Company');
const Instructor = require('./Instructor');

const Course = db.define('course', {
   id:  {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
   },
   name: {
      type: DataTypes.STRING(120),
      allowNull: false,
   },
   tags: {
      type: DataTypes.STRING,
      allowNull: false
   }
}, {
   freezeTableName: true
});

/* 
   Con Course.belongsTo(Company) Se hace la relación donde un course pertenece a una company
   Se puede hacer al revez:
   Company.hasMany(Course) Se hace la relación donde una company puede tener muchos course
*/

// agregara el campo de la forean key (companyId)
Course.belongsTo(Company);
Course.belongsTo(Instructor);


module.exports = Course;