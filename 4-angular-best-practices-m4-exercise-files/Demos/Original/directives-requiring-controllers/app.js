var app = angular.module('app', []);

app.value('scFollowedInstructors', []);

app.controller('scInstructorsCtrl', function($scope, scFollowedInstructors) {
  $scope.followedInstCount = scFollowedInstructors.length;
});



app.directive('scInstructors', function() {
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="well sidebar-nav">' +
        '<h3>Instructors ({{followedInstCount}} followed)</h3>' +
        '<div class="row" ng-repeat="instructor in instructorList">' +
        '<div class="col-md-6">{{instructor.name}}</div>' +
        '<div class="col-md-6"><sc-follow-instructor instructor="instructor" /></div>' +
        '</div>' +
        '</div>',
    controller: 'scInstructorsCtrl'
  }
});

app.directive('scFollowInstructor', function(/*scFollowedInstructors*/) {
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="instructor-follow-button"><button class="btn btn-info btn-xs">Follow</button></div>',
    scope: {
      instructor: '='
    },
    link: function(scope, element, attrs, ctrl) {

    }
  }
});

angular.module('app').controller('scheduleCtrl',function($scope) {
  $scope.instructorList = [
    {id: 1, name: 'Professor Snape'},
    {id: 2, name: 'Provessor McGonagall'},
    {id: 3, name: 'Professor Dumbledore'},
  ]
});