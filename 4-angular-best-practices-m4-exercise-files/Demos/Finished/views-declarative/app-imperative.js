var app = angular.module('app', []);

angular.module('app').controller('scheduleCtrl',function($scope) {

  $scope.student = {
    name: "Stuart Dent",
    dob: "4/1/1993",
    address: "123 Fake St.",
    GPA: "3.8"
  }

  $scope.editStyle = {display:'none'}

  $scope.edit = function() {
    $scope.displayStyle = {display:'none'}
    $scope.editStyle = {display:'block'}
  }

  $scope.save = function() {
    $scope.displayStyle = {display:'block'}
    $scope.editStyle = {display:'none'}
  }


});