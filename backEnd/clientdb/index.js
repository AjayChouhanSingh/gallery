// Import express
let express = require('express');
// Import Body parser
// Import Mongoose
// Initialize the app
let app = express();
let bodyParser = require('body-parser');

// Import routes
let mongoose = require('mongoose');

app.use(function(req, res, next){
  res.header("Access-control-Allow-Origin","*");
  res.header('Access-control-Allow-Methods','DELETE, PUT, GET, POST');
  res.header("Access-control-Allow-Headers","Authorization,Origin, X-requested-With, Content-type, Accept");
  next();
  });
let apiRoutes = require("./api-routes")

// Connect to Mongoose and set connection variable

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/clientdb');

var db = mongoose.connection;
// Setup server port
var port = process.env.PORT || 8080;
var jwt = require('jsonwebtoken');
function validateUser(req, res, next) {
    jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function(err, decoded) {
      if (err) {
        res.json({status:"error", message: err.message, data:null});
      }else{
        // add user id to request
        req.body.userId = decoded.id;
        next();
      }
    });
     }
// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));

// Use Api routes in the App
// Configure bodyparser to handle post requests

app.use('/api', apiRoutes)
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running logindb on port " + port);
});