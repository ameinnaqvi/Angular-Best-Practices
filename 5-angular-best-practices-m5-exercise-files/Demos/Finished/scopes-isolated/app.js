var app = angular.module('app', []);


app.directive('scInstructorCount', function() {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'scInstructorCount.html',
    scope: {
      instructorList: '=',
      title: '='
    },
    link: function(scope) {
      scope.title = "My New Title";
    }
  }
});

app.directive('scNewInstructor', function() {
  return {
    restrict: 'A',
    scope: {},
    link: function(scope) {
      scope.instructorList.push({id:4, name: 'Professor Lockhart'});
    }
  }
})



angular.module('app').controller('scheduleCtrl',function($scope) {

  $scope.instructorList = [
    {id: 1, name: 'Professor Snape'},
    {id: 2, name: 'Professor McGonagall'},
    {id: 3, name: 'Professor Dumbledore'}
  ]

  $scope.title="Instructor Count";

});