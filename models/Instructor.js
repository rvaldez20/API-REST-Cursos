const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db');

const Instructor = db.define('instructor', {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
   },
   name: {
      type: DataTypes.STRING(120),
      allowNull: false
   },
   url: {
      type: DataTypes.STRING(150),
      allowNull: false
   }
},{
   freezeTableName: true
});

module.exports = Instructor;