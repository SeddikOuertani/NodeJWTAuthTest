let express = require('express'),
   path = require('path'),
   mongoose = require('mongoose'),
   cors = require('cors'),
   bodyParser = require('body-parser'),
   dbConfig = require('./database/dbConfig');
   createError = require('http-errors')

const userRoute = require('./routes/user.route');
const carRoute = require('./routes/car.route');
const ownerRoute = require('./routes/owner.route');
const APIRoute = require('./routes/apis.route');
   
// Connecting with mongo db
mongoose.connect(dbConfig.db, {
   useNewUrlParser: true
}).then(() => {
      console.log('Database sucessfully connected')
   },
   error => {
      console.log('Database could not connected: ' + error)
   }
)


// Setting up port with express js
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(cors()); 
app.use('/',userRoute);
app.use('/owner',ownerRoute);
app.use('/car', carRoute);
app.use('/externalAPIs', APIRoute);


// Create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})
// Find 404 and hand over to error handler
app.use((req, res, next) => {
   next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
  console.error(err.message); // Log error message in our server's console
  if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
  res.status(err.statusCode).send(err.message); // All HTTP requests must have a response, so let's send back an error with its status code and message
});