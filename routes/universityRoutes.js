const express = require('express');
const router = express.Router();
const universityController = require('../controllers/universityController');

// Route to create a new student and insert into the database
router.post('/students', universityController.createStudent);


// Route to create a new course
router.post('/courses', universityController.createCourse);

// Route to create a new department
router.post('/departments', universityController.createDepartment);

module.exports = router;
