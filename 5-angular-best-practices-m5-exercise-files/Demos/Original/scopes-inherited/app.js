var app = angular.module('app', []);


app.directive('scInstructorCount', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'scInstructorCount.html',
    scope: true
  }
});



angular.module('app').controller('scheduleCtrl',function($scope) {

  $scope.instructorList = [
    {id: 1, name: 'Professor Snape'},
    {id: 2, name: 'Professor McGonagall'},
    {id: 3, name: 'Professor Dumbledore'}
  ]

});