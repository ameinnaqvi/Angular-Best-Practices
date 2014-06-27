var app = angular.module('app', []);

app.value('scFollowedInstructors', []);


app.controller('scInstructorsCtrl', function($scope, scFollowedInstructors) {
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
      instructorToFollow: '='
    },
    link: function(scope, element, attrs, ctrl) {
      scope.followed = function() {
        return scFollowedInstructors.indexOf(scope.instructorToFollow) > -1;
      }
      scope.followInstructor = function() {
        scFollowedInstructors.push(scope.instructorToFollow);
      }
      scope.unFollowInstructor = function() {
        scFollowedInstructors.splice(scFollowedInstructors.indexOf(scope.instructorToFollow), 1);
      }
    }
  }
});

angular.module('app').controller('scheduleCtrl',function($scope) {
  $scope.instructorList = [
    {id: 1, name: 'Professor Snape'},
    {id: 2, name: 'Provessor McGonagall'},
    {id: 3, name: 'Professor Dumbledore'}
  ]
});