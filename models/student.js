const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const Course = require('./course');

const Student = sequelize.define('Student', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Student.belongsToMany(Course, {
  through: 'StudentCourses',
  foreignKey: 'studentId',
  as: 'courses',
});

Course.belongsToMany(Student, {
  through: 'StudentCourses',
  foreignKey: 'courseId',
  as: 'students',
});

module.exports = Student;
