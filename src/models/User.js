const Sequelize = require('sequelize');

module.exports = sequelize.define('User', {
  id: {
    type: Sequelize.TINYINT,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: Sequelize.STRING(35),
    allowNull: false,
    unique: true
  },
  passwd: {
    type: Sequelize.STRING(128),
    allowNull: false
  }
});
