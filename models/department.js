const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const University = require('./university');

const Department = sequelize.define('Department', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Department.belongsTo(University, {
  foreignKey: 'universityId',
  as: 'university',
});

University.hasMany(Department, {
  foreignKey: 'universityId',
  as: 'departments',
});

module.exports = Department;
