// 💻 API ROUTES

var db = require("../models");

module.exports = function(app) {
  // Get all examples
app.get("/api/chartdata", function(req, res) {

    db.DataNames.findAll({
      include: [db.DataValues]
    }).then(function(dbResult) {

        var dataSet = {};
        dataSet.Name1 =  dbResult[0].name;
        dataSet.Description1 = dbResult[0].description;
        dataSet.xName1 = dbResult[0].x_name;
        dataSet.yName1 = dbResult[0].y_name;
        dataSet.labels1 = dbResult[0].DataValues.map(dv => dv.x_value);
        dataSet.values1 = dbResult[0].DataValues.map(dv => dv.y_value);

        dataSet.Name2 =  dbResult[1].name;
        dataSet.Description2 = dbResult[1].description;
        dataSet.xName2 = dbResult[1].x_name;
        dataSet.yName2 = dbResult[1].y_name;
        dataSet.labels2 = dbResult[1].DataValues.map(dv => dv.x_value);
        dataSet.values2 = dbResult[1].DataValues.map(dv => dv.y_value);

        res.json({data: dataSet}); // => to D3 API

    });
  });
    app.get("/api/getvotes/:userResId", function(req, res) {
        db.UserResults.findAll({
          where: {userResId: req.params.userResId}
        }).then(result => {
          var votedata = {}
          votedata.causation = result.causation_votes ;
          votedata.correlation = result.correlation_votes ;
            res.json({data: votedata});
        });
    });



  app.post("/api/data/correlation/:userResId", function(req, res, next) {
    
    db.UserResults.findOne({
        where: {userResId: req.params.userResId}
    }).then(function(userResult) {
        // console.log("correlation req.params.userResId:", req.params.userResId);
        // console.log("correlation userResult.correlation_votes", userResult.correlation_votes);
        db.UserResults.update({
            correlation_votes: userResult.correlation_votes + 1
        }, {
            // returning: true,
            where: { userResId: req.params.userResId }
        }).then(function() {
            db.UserResults.findOne({
                where: {userResId: req.params.userResId}
            }).then(result => {
                res.json({correlation_votes: result.correlation_votes, causation_votes: result.causation_votes});
            });

        }).catch(function(err) {
            // Whenever a validation or flag fails, an error is thrown
            // We can "catch" the error to prevent it from being "thrown", which could crash our node app
            res.json(err);
        });
    })
    // .then(function(rowsUpdated){
    //     var result = res.json(rowsUpdated);
    //     //console.log("rowsUpdated:", result);
    //     // res.reload;
    //   })
  });
  
app.post("/api/data/causation/:userResId", function(req, res, next) {
    db.UserResults.findOne({
        where: {
            userResId: req.params.userResId
        } 
    }).then(userResult => { 
        // console.log(req.params.userResId);
        // console.log(userResult.causation_votes);
        db.UserResults.update(
            {causation_votes: userResult.causation_votes + 1},
            { returning: true,
                where: {
                    userResId: req.params.userResId
                }
            }
        ).then(function() {
            db.UserResults.findOne({
                where: {userResId: req.params.userResId}
            }).then(result => {
               res.json({correlation_votes: result.correlation_votes, causation_votes: result.causation_votes});
            });
        }).catch(function(err) {
            // Whenever a validation or flag fails, an error is thrown
            // We can "catch" the error to prevent it from being "thrown", which could crash our node app
            res.json(err);
        });
    });

}); // end of module


    
// // Create a new example
//   app.post("/api/examples", function(req, res) {
//     db.Example.create(req.body).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });



  }

