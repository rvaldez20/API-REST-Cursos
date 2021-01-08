const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db');

const Company = db.define('company', {
   id_company: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
   },
   nom_company: {
      type: DataTypes.STRING(120),  
      allowNull: false    
   },
   pais: {
      type: DataTypes.STRING(120),
      allowNull: true
   }
}, {
   freezeTableName: true
 });

module.exports = Company;