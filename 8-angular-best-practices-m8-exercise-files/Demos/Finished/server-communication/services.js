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
        transformRequest: [
          function(data, headersGetter) {
            for (var i = 0; i < data.length; i++) {
              var item = data[i];
              item.ts = new Date();
            }
            return data;
          }
        ].concat($http.defaults.transformRequest)
      });
    }
  }
})

app.factory('userDataFollowedInstructors', function($http) {
  return {
    getFollowedInstructors: function() {
      return $http.get('/data/userData/getUserData', {
        transformResponse:
            $http.defaults.transformResponse.concat(
                [
                function(data, headersGetter) {
                  return data.followedInstructors;
                }]
            )
      })
    }
  }
})
