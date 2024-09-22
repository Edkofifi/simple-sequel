const { Student, Course, Department } = require('../models'); // Assuming you have defined these models

// Create a new student
exports.createStudent = async (req, res) => {
  try {
    const { name, age, departmentId } = req.body; // Extracting data from the request body

    const student = await Student.create({
      name,
      age,
      departmentId, // Assume you pass the department ID from the frontend
    });

    res.status(201).json({ message: 'Student created successfully', student });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating student', error });
  }
};

// Create a new course
exports.createCourse = async (req, res) => {
  try {
    const { name, departmentId } = req.body; // Extract data from request body

    const course = await Course.create({
      name,
      departmentId, // Reference to the department that offers the course
    });

    res.status(201).json({ message: 'Course created successfully', course });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating course', error });
  }
};

// Create a new department
exports.createDepartment = async (req, res) => {
  try {
    const { name } = req.body; // Extract data from request body

    const department = await Department.create({
      name,
    });

    res.status(201).json({ message: 'Department created successfully', department });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating department', error });
  }
};
