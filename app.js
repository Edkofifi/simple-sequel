const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Body parser middleware
app.use(bodyParser.json()); // for parsing application/json

// Import the routes
const universityRoutes = require('./routes/universityRoutes');
 
// another route import
const anotherUniversityRoute = require('./routes/routes')

app.use('/api', anotherUniversityRoute);
app.use('/api', universityRoutes); // use /api as the base path for routes



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
