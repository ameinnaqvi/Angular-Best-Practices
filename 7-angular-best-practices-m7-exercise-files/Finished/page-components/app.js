var app = angular.module('app', []);

app.factory("Timer", function ($timeout) {
    var data = { lastUpdated: new Date(), calls: 0 };

    var updateTimer = function () {
        data.lastUpdated = new Date();
        data.calls += 1;
        console.log("updateTimer: " + data.lastUpdated);

        $timeout(updateTimer, 5000);
    };
    updateTimer();

    return {
        data: data
    };
});

function TimerCtrl($scope, Timer) {
    $scope.$watch(function () { return Timer.data.lastUpdated; },
        function (value) {
            console.log("In $watch - lastUpdated:" + value);
            $scope.lastUpdated = value;
        }
    );

    $scope.$watch(function () { return Timer.data.calls; },
        function (value) {
            console.log("In $watch - calls:" + value);
            $scope.calls = value;
        }
    );
};

app.factory('registration', function (schedule, catalog) {
    return {
        registerCourse: function (course) {
            schedule.push(course);
            var itemIndex;
            _.each(catalog, function (item, index) {
                if (course.name == item.name) {
                    itemIndex = index;
                }
            });
            catalog.splice(itemIndex, 1);
        },
        unregisterCourse: function (course) {
            removeFromSchedule(course);
            addToCatalog(course);
        }
    }

    function removeFromSchedule(course) {
        var itemIndex;
        _.each(schedule, function (item, index) {
            if (course.name == item.name) {
                itemIndex = index;
            }
        });
        schedule.splice(itemIndex, 1);
    };

    function addToCatalog(course) {
        catalog.push(course);
    }
});

app.controller('scNavBarCtrl', function ($scope) {

});

app.directive('navBar', function () {
    return {
        restrict: 'E',
        templateUrl: 'navbar.html',
        controller: 'scNavBarCtrl'
    }
});

app.controller('scNavBarLoginCtrl', function ($scope, notifier) {
    $scope.signin = function (name, password) {
        if (name === 'Harry' && password === 'Ginny') {
            notifier.notify('You have successfully signed in!');
            $scope.authenticated = true;
        } else {
            notifier.notify('Username/Password Combination incorrect');
        }
    }
});

app.directive('navBarLogin', function () {
    return {
        restrict: 'E',
        templateUrl: 'navbarLogin.html',
        controller: 'scNavBarLoginCtrl'
    }
});

app.controller('scCatalogCtrl', function ($scope, notifier, registration, catalog) {
    $scope.registerCourse = function (course) {
        registration.registerCourse(course);
        notifier.notify('You have registered for ' + course.name);
    }
    $scope.catalog = catalog;
});

app.directive('catalog', function () {
    return {
        restrict: 'E',
        templateUrl: 'catalog.html',
        controller: 'scCatalogCtrl',
    }
});

app.controller('scScheduleCtrl', function ($scope, notifier, schedule, catalog, registration) {
    $scope.unregisterCourse = function (course) {
        registration.unregisterCourse(course);
        notifier.notify('You have unregistered for ' + course.name);
    }
    $scope.schedule = schedule;
});

app.directive('schedule', function () {
    return {
        restrict: 'E',
        templateUrl: 'schedule.html',
        controller: 'scScheduleCtrl'
    }
});

app.controller('scFollowedInstructorsCtrl', function ($scope, followedInstructors, notifier) {
    $scope.followedInstructors = followedInstructors;
    $scope.unFollowInstructor = function (instructor) {
        followedInstructors.splice(followedInstructors.indexOf(instructor), 1);
        notifier.notify('You have unfollowed ' + instructor.name);
    }
});

app.directive('followedInstructors', function () {
    return {
        restrict: 'E',
        templateUrl: 'followedInstructors.html',
        controller: 'scFollowedInstructorsCtrl'
    }
});

app.controller('scRegistrationCtrl', function ($scope, toastr, catalog) {
    $scope.catalog = catalog;
});

app.directive('registration', function () {
    return {
        restrict: 'E',
        templateUrl: 'registration.html',
        controller: 'scRegistrationCtrl'
    }
});

app.factory('notifier', function (toastr) {
    return {
        notify: function (msg) {
            toastr.success(msg);
            console.log(msg);
        }
    }
})