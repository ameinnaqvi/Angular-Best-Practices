var app = angular.module('app', []);

app.factory('notifier', function(toastr) {
  return {
    notify: function(msg) {
      toastr.success(msg);
      console.log(msg);
    }
  }
});

app.factory('registration', function (schedule) {
    return {
        registerCourse: function (course) {
            schedule.push({ id: course.id, name: course.name, credits: course.credits });
            course.registered = true;
        }
    }
});


app.controller('scCatalogCtrl', function($scope, catalog, registration, notifier) {
  $scope.registerCourse = function(course) {
    registration.registerCourse(course);
    notifier.notify('You have registered for ' + course.name);
  }

});

app.controller('scScheduleCtrl', function($scope, schedule) {
  $scope.schedule = schedule;
});

app.controller('scRegistrationCtrl',function($scope) {

});