var app = angular.module('app', []);


app.directive('scInstructorCount', function() {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'scInstructorCount.html',
    scope: true,
    link: function(scope) {
      scope.instructorList.push({id:4, name: 'Professor Lockhart'});
      scope.inheritedDirective = true;
//      scope.title = "Instructor Count FTW!";
    }
  }
});

app.directive('scShared', function() {
  return {
    restrict: 'A',
    link: function(scope) {
      scope.sharedDirective = true;
    }
  }
})



angular.module('app').controller('scheduleCtrl',function($scope) {

  $scope.instructorList = [
    {id: 1, name: 'Professor Snape'},
    {id: 2, name: 'Professor McGonagall'},
    {id: 3, name: 'Professor Dumbledore'}
  ]

  $scope.someData = {title: "Instructor Count"};

});

angular.module('app').controller('subCtrl',function($scope) {
  $scope.subCtrlVal = "FTW";
});