// Express app
let express = require('express');
let app = express();
let musicRepo = require("./repos/musicRepo");

// Express Router Object
let router = express.Router();
const music = musicRepo.get();

// GET to return data 
router.get('/', (req, res, next) => {
  res.status(200).json({
    "status": 200,
    "statusText": "ok",
    "message": "All music retrieved",
    "data": music
  });  
});

app.use('/api', router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
