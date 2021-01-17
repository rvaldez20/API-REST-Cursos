const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db');

const Company = db.define('company', {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
   },
   name: {
      type: DataTypes.STRING(120),  
      allowNull: false    
   },
   nameSlug: {
      type: DataTypes.STRING(120),
      allowNull: false
   },
   contry: {
      type: DataTypes.STRING(120),
      allowNull: true
   }
}, {
   freezeTableName: true
 });

module.exports = Company;