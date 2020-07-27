// Bring in the express server and create application
let express = require('express');
let app = express();
let musicRepo = require('./repos/musicRepo')

// Use the express Router Object
let router = express.Router();
let music = musicRepo.get();

// Create GET to return list of music
router.get('/', (req, res, next) => {
  res.status(200).json({
    "status": 200,
    "status text": "OK",
    "message":  "All music retrieved.",
    "data": music,
  });
});

// Configure router so all routes apre prefixed with /api/v1
app.use('/api', router);

// Create server to listen on port 5000
const PORT = 5000;
var server = app.listen(PORT, () => {
  console.log(`Node server is listening on port ${PORT}...`);
});