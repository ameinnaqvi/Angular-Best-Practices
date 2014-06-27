var app = angular.module('app', []);

angular.module('app').controller('scheduleCtrl',function($scope) {

  $scope.student = {
    name: "Stuart Dent",
    dob: "4/1/1993",
    address: "123 Fake St.",
    GPA: "3.8"
  }

  $scope.editMode = false;

  $scope.edit = function() {
    $scope.editMode = true;
  }

  $scope.save = function() {
    $scope.editMode = false;
  }


});