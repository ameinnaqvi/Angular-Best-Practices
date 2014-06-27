var app = angular.module('app', []);

angular.module('app').controller('scheduleCtrl',function($scope, registration) {

  $scope.title = registration.title;
});

app.config(function($provide) {
  $provide.provider('registration', function() {
    var type;
    return {
      setType: function(value) {
        type = value;
      },
      $get: function() {
        return {
          title: 'Service from Provider ' + type
        }
      }
    }
  })
})

app.config(function(registrationProvider) {
  registrationProvider.setType('Angular');
})
