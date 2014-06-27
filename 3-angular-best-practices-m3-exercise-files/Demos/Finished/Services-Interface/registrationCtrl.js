angular.module('app').controller('registrationCtrl',function($scope, classRgistration, currentUser) {
  $scope.register = function(newClass) {
    classRegistration.addClassToSchedule(currentUser, newClass);
    classRegistration.addStudentToClass(newClass, currentUser)
  }
});