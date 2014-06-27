var app = angular.module('app', []);

app.factory('registration', function(schedule) {
  return {
    registerCourse: function(course) {
      schedule.push({id: course.id, name: course.name, credits: course.credits});
      course.registered = true;
    }
  }
});

app.factory('notifier', function(toastr) {
  return {
    notifyCourseRegistration: function(course) {
      var msg = 'You have registered for ' + course.name;
      toastr.success(msg);
      console.log(msg);
    }
  }
})

app.controller('scCatalogCtrl', function($scope, catalog, registration, notifier) {
  $scope.registerCourse = function(course) {
    registration.registerCourse(course);
    notifier.notifyCourseRegistration(course);

  }
  $scope.catalog = catalog;

});

app.controller('scScheduleCtrl', function($scope, schedule) {
  $scope.schedule = schedule;


});

app.controller('scRegistrationCtrl',function($scope) {



});