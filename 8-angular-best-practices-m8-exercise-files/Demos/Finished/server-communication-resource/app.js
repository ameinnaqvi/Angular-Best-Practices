var app = angular.module('app', ['ngResource']);


app.controller('scNavBarCtrl', function($scope){

});

app.controller('scNavBarLoginCtrl', function($scope, notifier, users, identity){
  $scope.signin = function(name, password) {
    users.query().$promise.then(function(userCollection) {
      userCollection.forEach(function(user) {
        if(name === user.name && password === user.password) {
          notifier.notify('You have successfully signed in!');
          identity.currentUser = user;
          $scope.authenticated = true;
        }
      });
      if(identity.currentUser === undefined) {
        notifier.notify('Username/Password Combination incorrect');
      }
    });
  }
});

app.controller('scCatalogCtrl', function($scope, notifier){
  $scope.registerCourse = function(course) {
    course.registered = true;
    course.$save();
    notifier.notify('You have registered for ' + course.name);
  }
});

app.controller('scScheduleCtrl', function($scope, notifier){
  $scope.unregisterCourse = function(course) {
    course.registered = false;
    course.$save();
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

app.controller('scRegistrationCtrl',function($scope, toastr, catalog, identity) {
  $scope.identity = identity;
  $scope.catalog = catalog.query();
});

app.factory('notifier', function(toastr) {
  return {
    notify: function(msg) {
      toastr.success(msg);
      console.log(msg);
    }
  }
})