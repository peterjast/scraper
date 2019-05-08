// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");
var logger = require("morgan");

// Set up port
var PORT = process.env.PORT || 3000;

// Set up Express App
var app = express();

// Require routes
var routes = require("./routes");

// Designate our public folder as a static directory
app.use(express.static("public"));

// Connect Handlebars to Express app
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Have every request go through route middleware
app.use(routes);

// Use the deployed database or local
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://heroku_7w0wpf68:mpamde4bkka7of440cjp56vn4c@ds111336.mlab.com:11336/heroku_7w0wpf68";

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI, {
  useCreateIndex: true,
  useNewUrlParser: true
});

// Listen on the port
app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});