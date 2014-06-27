var app = angular.module('app', []);

function Course(title, credits, department, instructorIds, id) {
  this.title = title;
  this.credits = credits;
  this.department = department;
  this.instructorIds = instructorIds;
  this.id = id;
}
Course.prototype.displayName = function() {
  // code
}
// other class methods


app.controller('newCourseCtrl',function($scope, catalog) {
  $scope.register = function() {
    var newCourse = ???
    catalog.add(newCourse);
  }
});

