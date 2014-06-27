var app = angular.module('app', []);

angular.module('app').controller('scheduleCtrl',function($scope, registration) {
  $scope.title = registration.title;
});


app.service('registration', function() {
  return {
    title: 'Service from Service'
  }
})