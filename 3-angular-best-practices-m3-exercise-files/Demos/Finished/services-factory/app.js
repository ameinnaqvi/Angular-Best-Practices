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

app.value('courseFactory', {
  createCourse: function(title, credits, department, instructors) {
    var instructorIds = [];
    for(var i=0; i < instructors.length; i++) {
      instructorIds.push(instructors[i].id);
    }
    return new Course(title, credits, department, instructorIds, -1);
  }
})

app.controller('newCourseCtrl',function($scope, catalog, courseFactory) {
  $scope.register = function() {
    var newCourse = courseFactory.createCourse($scope.title, $scope.credits, $scope.department, $scope.instructors);
    catalog.add(newCourse);
  }
});

