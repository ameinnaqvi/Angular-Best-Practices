var app = angular.module('app', []);

app.directive('myDirective', function() {
  return {
    restrict: 'E',
    replace: true,
    link: function(scope) {
      scope.title = "I'm the first directive"
      scope.values = scope.values || []
      scope.values.push("I'm the first directive");
    }
  }
})

app.directive('myDirective', function() {
  return {
    restrict: 'E',
    replace: true,
    link: function(scope) {
      scope.title = "I'm the second directive"
      scope.values = scope.values || []
      scope.values.push("I'm the second directive");
    }
  }
})
angular.module('app').controller('Controller1',function($scope) {
  $scope.val = "directives!"
});