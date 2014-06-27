var app = angular.module('app', ['ngResource']);


app.controller('scNavBarCtrl', function($scope){

});

app.controller('scNavBarLoginCtrl', function($scope, notifier, users, identity){

  $scope.signin = function(name, password) {
    users.query().$promise.then(function(userCollection) {
      userCollection.forEach(function(user) {
        if(user.authenticate(name, password)) {
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

app.controller('scCatalogCtrl', function($scope, notifier, followedInstructors){
  $scope.registerCourse = function(course) {
    course.register();
    notifier.notify('You have registered for ' + course.name);
  }

  $scope.followInstructor = function(instructorName) {
    if($scope.followedInstructors.followInstructor(instructorName)) {
      notifier.notify('You are now following ' + instructorName);
    }
  }
});

app.controller('scScheduleCtrl', function($scope, notifier){
  $scope.unregisterCourse = function(course) {
    course.unregister();
    notifier.notify('You have unregistered for ' + course.name);
  }
});

app.controller('scFollowedInstructorsCtrl', function($scope, notifier, followedInstructors){

  $scope.unFollowInstructor = function(instructor) {
    followedInstructors.unFollowInstructor(instructor);
    notifier.notify('You have unfollowed ' + instructor.name);
  }
});

app.controller('scRegistrationCtrl',function($scope, toastr, catalog, identity, followedInstructors) {
  $scope.identity = identity;
  $scope.catalog = catalog.query();

  followedInstructors.fetch();
  $scope.followedInstructors = followedInstructors;
});
