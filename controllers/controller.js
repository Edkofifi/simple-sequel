const { Student, Course, Department } = require('../models'); // Assuming you have defined these models


// Controller function to handle the form submission
const createFullEntry = async (req, res) => {
    
    try {

        const data = req.body
        console.log(data)
      // Extract data from the request body
      const { department, course, student } = req.body;
  
      // Step 1: Create or find the department
      let newDepartment = await Department.findOne({ where: { name: department.name } });
      if (!newDepartment) {
        newDepartment = await Department.create({ name: department.name });
      }
  
      // Step 2: Create the course and associate it with the department
      const newCourse = await Course.create({
        name: course.name,
       // departmentId: newDepartment.id,
      });
  
      // Step 3: Create the student and associate them with the department
      const newStudent = await Student.create({
        name: student.name,
        age: student.age,
        departmentId: newDepartment.id,  // associate with the department
      });
  
      // Response back to the client
      res.status(201).json({
        message: "All data created successfully",
        department: newDepartment,
        course: newCourse,
        student: newStudent,
      });
    } catch (error) {
      console.error('Error creating the full entry:', error);
      res.status(500).json({ message: "Error creating the full entry" });
    }
  };
  
  module.exports = {
    createFullEntry,
  };
  