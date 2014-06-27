var app = angular.module('app', []);

app.directive('scSchedule', function() {
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="well sidebar-nav">' +
        '<h3>Your Schedule</h3>' +
        '<div class="row" ng-repeat="class in classList">' +
        '<div class="col-md-6">{{class.name}}</div>' +
        '<div class="col-md-6"><a href="#" ng-click="viewClassDetails(class)">Details</a></div>' +
        '</div>' +
        '</div>',
    controller: function($scope) {
      $scope.viewClassDetails = function(classToView) {
        // do something
        console.log('viewing details for ' + classToView.name);
      }
    }
  }
});

angular.module('app').controller('scheduleCtrl',function($scope) {
  $scope.classList = [
    {id: 3, name: 'Biology'},
    {id: 3, name: 'Chemistry'},
    {id: 3, name: 'History'},
  ]
});