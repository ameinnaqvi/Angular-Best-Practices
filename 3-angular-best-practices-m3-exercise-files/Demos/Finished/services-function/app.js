var app = angular.module('app', []);

app.value('grades', []);

app.value('calculateGPA', function(grades) {
    // implementation
    return "4.0";
})

app.controller('userCtrl',function($scope, grades, calculateGPA) {
  $scope.GPA = calculateGPA(grades);

});

