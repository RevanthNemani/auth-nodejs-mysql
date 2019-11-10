const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'IFRS9DEV',
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
