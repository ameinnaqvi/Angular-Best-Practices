var app = angular.module('app', []);

app.value('schedule', {
  classes: [],
  addClass: function(newClass) {
    for(var i=0; i < this.classes.length; i++) {
      if(this.classes[i] === newClass) {
        return;
      }
    }
    this.classes.push(newClass);
  },
  dropClass: function(classToDrop) {
    for(var i=0; i < this.classes.length; i++) {
      if(this.classes[i] === classToDrop) {
        this.classes.splice(i, 1);
      }
    }
  }
})

app.controller('registrationCtrl',function($scope, schedule) {
  $scope.availableClasses = [{name:"Chemistry"},{name:"Physics"},{name:"History"},{name:"Biology"},]
  $scope.schedule = schedule;
});

