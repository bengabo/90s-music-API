// Bring in the express server and create application
let express = require('express');
let app = express();

// Use the express Router Object
let router = express.Router();

// Create GET to return list of music
router.get('/', (req, res, next) => {
  res.send ('Rollins Band - Starve');
})

// Configure router so all routes apre prefixed with /api/v1
app.use('/api', router);

// Create server to listen on port 5000
const PORT = 5000;
var server = app.listen(PORT, () => {
  console.log(`Node server is listening on port ${PORT}...`);
});