var app = angular.module('app', []);


app.controller('scCatalogCtrl', function($scope, catalog, $rootScope) {
  $scope.catalog = catalog;

  $scope.registerCourse = function(course) {
    $rootScope.$broadcast("course:registered", course);
    course.registered = true;
  }

});

app.controller('scScheduleCtrl', function($scope, schedule) {
  $scope.schedule = schedule;

  $scope.$on('course:registered', function(event, course) {
    schedule.push({id: course.id, name: course.name, credits: course.credits});
  })
});

app.controller('scRegistrationCtrl',function($scope, toastr) {

  $scope.notify = function(msg) {
    toastr.success(msg);
    console.log(msg);
  }

  $scope.$on('course:registered', function(event, course) {
    $scope.notify('You have registered for ' + course.name);
  })

});