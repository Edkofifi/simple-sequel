const express = require('express');
const router = express.Router();

const  {createFullEntry}  = require('../controllers/controller.js');

const universityController = require('../controllers/universityController');




// Route for handling the combined form submission
router.post('/full-entry', createFullEntry);
router.post('/another', universityController.createDepartment);


module.exports = router;
 