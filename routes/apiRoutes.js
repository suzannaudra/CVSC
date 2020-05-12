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

  app.post("/api/data/correlation/:dataId", function(req, res) {
    db.UserResults.findOne({ where: {dataId: req.params.dataId} }).then(function(userResult) {
        console.log(req.params.dataID);
        console.log(userResult.causation_votes);
       
        db.UserResults.update({
            correlation_votes: userResult.correlation_votes + 1},
            { where: { dataId: req.params.dataId }});
      }).then(function(){
      res.json({});
      })
  });
  
    app.post("/api/data/causation/:dataId", function(req, res) {
      db.UserResults.findOne({ where: {dataId: req.params.dataId} }).then(userResult => { console.log(req.params.dataID);
        console.log(userResult.causation_votes)
        
        db.UserResults.update({ causation_votes: userResult.causation_votes + 1}, { where: { dataId: req.params.dataId }}).then(function(){
          res.json({});
      }); 
      })

    })
    
  }

