// 💻 API ROUTES

var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/chartdata", function(req, res) {
    // TODO: select a table with two different data sets for charting
    //      1 - get the number of unique data sets by dataId
    //      2 - randomly select TWO different data sets
    //      3 - return as arrays with helper function here, or offload to client?

    // TEMP QUERY FOR TESTING
    db.DataNames.findAll({
        include: [db.DataValues]
    }).then(function(dbResult) {
      res.json(dbResult); // => to D3 API
      console.table(JSON.stringify(dbResult, null, 2));
      
    });
  
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};

