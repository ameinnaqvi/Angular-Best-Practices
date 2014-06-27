app.value('toastr', toastr);

app.value('identity', {})

app.factory('users', function($resource) {
  return $resource('/data/users/:id', {id:"@id"})
})
app.factory('catalog', function($resource) {
  return $resource('/data/courses/:id', {id:"@id"})
})

app.factory('followedInstructors', function($http, $q) {
  return {
    get: function() {
      return $http.get('data/userData/followedInstructors', {});
    },
    save: function(list) {
      $http.post('data/userData/followedInstructors', list, {

      });
    }
  }
})
