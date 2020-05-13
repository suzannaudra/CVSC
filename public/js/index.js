// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

$("#correlation").on("click", function() {
   console.log("click");
   $.ajax({
       type: "POST",
       url: "/api/data/correlation/1",
       data: {},
       success: function() {
           console.log("correlation");
       }
   }).then(votes => {
      console.log("new votes: ", votes.correlation_votes, votes.causation_votes);
       sessionStorage.setItem("correlation_votes", votes.correlation_votes);
       sessionStorage.setItem("causation_votes", votes.causation_votes);

       $("#correlation-div").append($("<p>").text("Correlation Votes: " + votes.correlation_votes));
       $("#causation-div").append("<p>").text("Causation Votes: " + votes.causation_votes);
     
   });
});

$("#causation").on("click", function() {
 console.log("click");
 $.ajax({
   type: "POST",
   url: "/api/data/causation/1",
   data: {},
   success: function(){
     console.log("causation")
   }
 }).then(votes => {
       console.log("new votes: ", votes.correlation_votes, votes.causation_votes);
       sessionStorage.setItem("correlation_votes", votes.correlation_votes);
       sessionStorage.setItem("causation_votes", votes.causation_votes);
       
       $("#correlation-div").append($("<p>").text("Correlation Votes: " + votes.correlation_votes));
       $("#causation-div").append("<p>").text("Causation Votes: " + votes.causation_votes);
   });
});

$("#causation").click(function(){
   $("#causation").hide();
   $("#correlation").hide();
});
$("#correlation").click(function(){
   $("#correlation").hide();
   $("#causation").hide();
});



// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },


  getChartData: function() {
    return $.ajax({
      url: "api/chartdata",
      type: "GET"
    });
  },
    getExamples: function() {
      return $.ajax({
        url: "api/examples",
        type: "GET"
      });
    },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// loadChartData (analog to refreshExamples function below)
var loadChartData = function() {
    API.getChartData().then(function(data) {
        var $chartData = data.map(function(chartdata) {
            var $a
        })
    });

}

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// function getVote(int) {
//   var xmlhttp = new XMLHttpRequest();
//   xmlhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       document.getElementById("poll").innerHTML = this.responseText;
//     }
//   };
//   xmlhttp.open("GET", "vote.php?vote=" + int, true);
//   xmlhttp.send();
//   console.log(int);
//   console.log();
// }

