var app = angular.module('app', []);


app.controller('scNavBarCtrl', function($scope){

});

app.controller('scNavBarLoginCtrl', function($scope, notifier){
  $scope.signin = function(name, password) {
    if(name === 'Harry' && password === 'Ginny') {
      notifier.notify('You have successfully signed in!');
      $scope.authenticated = true;
    } else {
      notifier.notify('Username/Password Combination incorrect');
    }
  }
});

app.controller('scCatalogCtrl', function($scope, notifier){
  $scope.registerCourse = function(course) {
    course.registered = true;
    notifier.notify('You have registered for ' + course.name);
  }
});

app.controller('scScheduleCtrl', function($scope, notifier){
  $scope.unregisterCourse = function(course) {
    course.registered = false;
    notifier.notify('You have unregistered for ' + course.name);
  }
});

app.controller('scFollowedInstructorsCtrl', function($scope, notifier, followedInstructors){
  $scope.followedInstructors = followedInstructors;
  $scope.unFollowInstructor = function(instructor) {
    followedInstructors.splice(followedInstructors.indexOf(instructor), 1);
    notifier.notify('You have unfollowed ' + instructor.name);
  }
});

app.controller('scRegistrationCtrl',function($scope, toastr, catalog) {
  $scope.catalog = catalog;
});

app.factory('notifier', function(toastr) {
  return {
    notify: function(msg) {
      toastr.success(msg);
      console.log(msg);
    }
  }
})