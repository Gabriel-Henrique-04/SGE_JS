const { Sequelize } = require('sequelize');
require('dotenv').config(); 

const sequelize = new Sequelize('SGE_JS','root','root',{
  dialect: 'mysql',
  host: 'localhost'

});

module.exports = sequelize;
