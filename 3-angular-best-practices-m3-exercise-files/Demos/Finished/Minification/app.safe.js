angular.module('app', []);
angular.module('app').service('mySvc', function () {
  return { val: 'I\'m a service!' };
});
function Controller1($scope, mySvc) {
  $scope.val = mySvc.val;
}
angular.module('app').controller('Controller1', Controller1);