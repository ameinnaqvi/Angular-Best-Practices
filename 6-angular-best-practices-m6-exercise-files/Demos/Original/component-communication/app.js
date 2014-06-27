var app = angular.module('app', []);

app.controller('scCatalogCtrl', function($scope, catalog) {
  $scope.registerCourse = function(course) {
    console.log('we need to somehow notify the schedule! ' + course.name);
  }
  $scope.catalog = catalog;

});

app.controller('scScheduleCtrl', function($scope, schedule) {
  $scope.schedule = schedule;

});

app.controller('scRegistrationCtrl',function($scope) {



});