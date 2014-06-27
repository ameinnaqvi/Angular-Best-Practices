var app = angular.module('app', []);

app.filter("ratings", function() {
  return function(input) {
    var rating = parseInt(input);
    var result = "";
    for(var i=0; i < rating; i++) {
      result += "*";
    }
    return result;
  }
});


app.controller('classCtrl',function($scope) {
  $scope.availableClasses = [
    {name:"Chemistry", rating:2},
    {name:"Physics", rating:3},
    {name:"History", rating:5},
    {name:"Biology", rating:1}
  ]
});

