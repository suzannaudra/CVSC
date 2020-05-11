
// example data model for chart api

[ {key: 'Year', value: '2010'}, {key: 'x1', value: '5'} ],
[ {key: 'Year', value: '2011'}, {key: 'x1', value: '10'} ],
[ {key: 'Year', value: '2012'}, {key: 'x1', value: '15'} ]

// example parsing function
var data = [];
function gatherData() {
    var query = connection.query("SELECT Yr, X1, X2 FROM randomData", function (err, res) {
        if (err) throw err; {
            console.log(res, "res");
            for (var i = 0; i < res.length; i++) {
                console.log(res[i].ID, "ayy")
                var year = res[i].Yr;
                var Y1 = res[i].X1;
                var Y2 = res[i].X2;
                console.log(year, "year")
                console.log(Y1, "Y1")
                console.log(Y2, "Y2")
                var entries = d3.entries(res[i])
                data.push(entries)
                console.log(entries, "What what")
                console.log(data, "data")
                var flatData = data.flat()
                console.log(flatData, "NERT NERT")
            }
        }
    });