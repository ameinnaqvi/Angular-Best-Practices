var app = angular.module('app', []);

app.controller('scCatalogCtrl', function($scope, catalog) {
  $scope.registerCourse = function(course) {
    $scope.schedule.push({id: course.id, name: course.name, credits: course.credits});
    course.registered = true;
    $scope.notify('You have registered for ' + course.name);
  }
  $scope.catalog = catalog;

});

app.controller('scScheduleCtrl', function($scope) {

});

app.controller('scRegistrationCtrl',function($scope, schedule, toastr) {

  $scope.notify = function(msg) {
    toastr.success(msg);
    console.log(msg);
  }
  $scope.schedule = schedule;

});