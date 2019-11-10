const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'ifrs9dev',
  'ifrs9dev',
  'Ifrs9dev@2019',
  {
    host: 'raynemani.ml',
    dialect: 'mysql',
    operatorsAliases: false
  }
);

module.exports = sequelize;
global.sequelize = sequelize;
