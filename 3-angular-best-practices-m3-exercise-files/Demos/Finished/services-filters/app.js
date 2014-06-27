var app = angular.module('app', []);

app.factory("ratingsFilter", function() {
  return function(input) {
    var rating = parseInt(input);
    var result = "";
    for(var i=0; i < rating; i++) {
      result += "*";
    }
    return result;
  }
});


app.controller('classCtrl',function($scope, ratingsFilter) {
  $scope.availableClasses = [
    {name:"Chemistry", rating:2},
    {name:"Physics", rating:3},
    {name:"History", rating:5},
    {name:"Biology", rating:1}
  ]
  $scope.myRating = ratingsFilter(3);
});

