var app = angular.module('app', []);

app.value('scFollowedInstructors', []);


app.controller('scInstructorsCtrl', function($scope) {

});

app.directive('scInstructors', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'scInstructors.html',
    controller: 'scInstructorsCtrl'
  }
});

app.directive('scFollowInstructor', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'scFollowInstructor.html',
    scope: {
      instructorToFollow: '='
    },
    link: function(scope, element, attrs, ctrl) {

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