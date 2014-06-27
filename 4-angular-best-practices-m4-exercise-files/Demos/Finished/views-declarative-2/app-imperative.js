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
      scope.followed = false;
      scope.followInstructor = function() {
        if(!scope.followed) {
          scFollowedInstructors.push(scope.instructorToFollow);
          scope.followed = true;
          element.find('button').text('Unfollow');
        } else {
          scFollowedInstructors.splice(scFollowedInstructors.indexOf(scope.instructorToFollow), 1);
          scope.followed = false;
          element.find('button').text('Follow');
        }
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