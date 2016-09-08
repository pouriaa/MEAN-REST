// modules =================================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var mongoose 	   = require('mongoose');

// configuration ===========================================
    
// config files
// NOTE: write your own mondule.export for db.js config file
var db = require('./config/db');

// set our port
var port = process.env.PORT || 8080; 

mongoose.connect(db.url); 

app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(methodOverride('X-HTTP-Method-Override')); 
app.use(express.static(__dirname + '/public')); 


// Routes
require('./app/routes')(app); // configure our routes

// start app
app.listen(port);               

// shoutout to the user                     
console.log('Magic happens on port ' + port);

// expose app           
exports = module.exports = app;  