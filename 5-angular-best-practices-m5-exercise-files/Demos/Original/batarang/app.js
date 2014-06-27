var app = angular.module('app', []);

app.value('scFollowedInstructors', []);

app.factory('sc2', function(scFollowedInstructors) {
  return {
    stuff: scFollowedInstructors.length
  }
})


app.controller('scInstructorsCtrl', function($scope, scFollowedInstructors, sc2) {
  $scope.scFollowedInstructors = scFollowedInstructors;
});

app.directive('scInstructors', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'scInstructors.html',
    controller: 'scInstructorsCtrl'
  }
});

app.directive('scFollowInstructor', function(scFollowedInstructors) {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'scFollowInstructor.html',
    scope: {
      instructor: '='
    },
    link: function(scope, element, attrs, ctrl) {
      scope.followed = function() {
        return scFollowedInstructors.indexOf(scope.instructor) > -1;
      }
      scope.followInstructor = function() {
        scFollowedInstructors.push(scope.instructor);
      }
      scope.unFollowInstructor = function() {
        scFollowedInstructors.splice(scFollowedInstructors.indexOf(scope.instructor), 1);
      }
    }
  }
});

angular.module('app').controller('scheduleCtrl',function($scope) {

  $scope.instructorList = [
    {id: 1, name: 'Professor Snape'},
    {id: 2, name: 'Professor McGonagall'},
    {id: 3, name: 'Professor Dumbledore'}
  ]

});