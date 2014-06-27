angular.module('app').controller('registrationCtrl',function($scope, schedule, instructors, registration, currentUser, students, policies) {
  $scope.val = 1;
  $scope.register = function(newClass) {
    var policyCheck = policies.checkRegistration(newClass, currentUser, schedule);
    var instructor = instructors.findById(newClass.instructorId);
    registration.register(newClass, instructor, currentUser.id, policyCheck, someGlobalValue, $scope.anotherValue);
  }
});
