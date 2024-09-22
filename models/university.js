const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const University = sequelize.define('University', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = University;
