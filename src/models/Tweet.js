const Sequelize = require('sequelize');

module.exports = sequelize.define('tweet', {
  id: {
    type: Sequelize.TINYINT,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  content: Sequelize.STRING(300),
  userID: Sequelize.TINYINT
});
