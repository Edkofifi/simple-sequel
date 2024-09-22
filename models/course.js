const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const Department = require('./department');

const Course = sequelize.define('Course', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Course.belongsTo(Department, {
  foreignKey: 'departmentId',
  as: 'department',
});

Department.hasMany(Course, {
  foreignKey: 'departmentId',
  as: 'courses',
});

module.exports = Course;
