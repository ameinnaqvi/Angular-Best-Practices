var app = angular.module('app', []);

app.controller('scRegistrationCtrl',function($scope, toastr, followedInstructors, catalog) {
  $scope.followedInstructors = followedInstructors;
  $scope.catalog = catalog;

  $scope.registerCourse = function(course) {
    course.registered = true;
    $scope.notify('You have registered for ' + course.name);
  }

  $scope.unregisterCourse = function(course) {
    course.registered = false;
    $scope.notify('You have unregistered for ' + course.name);
  }

  $scope.unFollowInstructor = function(instructor) {
    followedInstructors.splice(followedInstructors.indexOf(instructor), 1);
    $scope.notify('You have unfollowed ' + instructor.name);
  }

  $scope.signin = function(name, password) {
    if(name === 'Harry' && password === 'Ginny') {
      $scope.notify('You have successfully signed in!');
      $scope.authenticated = true;
    } else {
      $scope.notify('Username/Password Combination incorrect');
    }
  }

  $scope.notify = function(msg) {
    toastr.success(msg);
    console.log(msg);
  }


});