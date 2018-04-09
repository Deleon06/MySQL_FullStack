var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');
var PORT = process.env.PORt || 5000;
var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controllers.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("Listening on port:%s", PORT);
});