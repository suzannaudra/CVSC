require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
const fs = require("fs");
var db = require("./models");


var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test" || process.env.NODE_ENV === "development") {
  syncOptions.force = true;
  console.log("process.env.NODE_ENV: ", process.env.NODE_ENV);
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  
  // execute the seeds.sql script
    if (process.env.NODE_ENV === "development") {
        var sqlArray = fs.readFileSync("./db/seeds.sql", {encoding: "utf-8"}).split(";");
        var result;
        // for (sqlCmd of sqlArray) {
        //      // console.log("EACH ELEMENT: ", e);
        //    result = await db.sequelize.query(sqlCmd);
        //    console.log("\n\nRESULT: ", result + "\n\n");
        // }
        
        forLoop(sqlArray);
  }
  app.set('etag', false);
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;

async function forLoop(array) {
    
  
    for (let i = 0; i < array.length; i++) {
      let sqlCmd = array[i].trim();
      let result;
      if (!(sqlCmd === "")) {
        console.log('\n\nStart\n------>\n')
        result = await db.sequelize.query(sqlCmd);
        console.log(result);
        console.log('\n<------\nEnd\n\n')
      }
      
    }
  
    
  }