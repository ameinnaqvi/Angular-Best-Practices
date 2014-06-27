angular.module('app').controller('registrationCtrl',function($scope, registration) {
  $scope.register = function(newClass) {
    registration.register(newClass, $scope.currentUser);
  }
});
