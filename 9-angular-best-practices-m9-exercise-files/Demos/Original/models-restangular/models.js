app.factory('users', function(Restangular) {
  return Restangular.all('users');
});

app.factory('catalog', function(Restangular) {
  return Restangular.all('courses');
});

app.factory('followedInstructors', function($http) {
  return {
    get: function() {
      return $http.get('data/userData/followedInstructors');
    },
    save: function(list) {
      $http.post('data/userData/followedInstructors', list);
    }
  }
});