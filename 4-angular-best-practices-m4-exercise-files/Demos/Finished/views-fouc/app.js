var app = angular.module('app', []);

angular.module('app').controller('scheduleCtrl',function($scope, $timeout) {

  $scope.ready = false;
  $timeout(function() {
    $scope.ready = true;
    $scope.student = {
      name: "Stuart Dent",
      dob: "4/1/1993",
      address: "123 Fake St.",
      GPA: "3.8"
    }
  }, 500);
});