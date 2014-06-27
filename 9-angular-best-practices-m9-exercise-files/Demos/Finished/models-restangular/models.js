app.factory('users', function(Restangular) {
  Restangular.extendModel('users', function(model) {
    model.authenticate = function(name, password) {
      return this.name === name && this.password === password;
    }
    return model;
  })
  return Restangular.all('users');
});

app.factory('catalog', function(Restangular) {
  Restangular.extendModel('courses', function(model) {
    model.register = function() {
      this.registered = true;
      this.post();
    }
    model.unregister = function() {
      this.registered = false;
      this.post();
    }
    return model;
  })
  return Restangular.all('courses');
});

app.factory('followedInstructors', function($http, $q) {
  return {
    get: function() {
      return $http.get('data/userData/followedInstructors');
    },
    save: function(list) {
      $http.post('data/userData/followedInstructors', list);
    }
  }
});