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
    //   res.json(dbResult); // => to D3 API
      console.table(JSON.stringify(dbResult, null, 2));
        // console.log("dbResult: ", dbResult);

   
        console.log("dbResult[0].dataId: ", dbResult[0].dataId);
        // console.log(dbResult[0].DataValues);
        console.log(dbResult[0].name);
        console.log(dbResult[0].DataValues[0].dataId);
        console.log(dbResult[0].DataValues[0].x_value);
        console.log(dbResult[0].DataValues[1].x_value);

        var dataSet = {};
        dataSet.Name1 =  dbResult[0].name;
        dataSet.Description1 = dbResult[0].description;
        dataSet.xName1 = dbResult[0].x_name;
        dataSet.yName1 = dbResult[0].y_name;
        dataSet.dataValues = dbResult[0].DataValues.map(function(o) {
            return {key: o.y_value, } 
        });

        dataSet.Name2 =  dbResult[1].name;
        dataSet.Description2 = dbResult[1].description;
        dataSet.xName2 = dbResult[1].x_name;
        dataSet.yName2 = dbResult[1].y_name;

        

        dataSet.dataValues1 = dbResult[0].DataValues.map(function(o) {
            return [ {key: "Year", value: o.y_value}, {key: "x", value: o.x_value} ] 
        });

        // build the data set with loop

        // save data set 1 info   
        
        for (var dset of dbResult) {
            console.log("loop data set: ", dset.name);
            for (var dval of dset.DataValues) {
                console.log("loop data val: ", dval.dataId, dval.x_value, dval.y_value);
            }
        }
      
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

