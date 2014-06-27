app.factory('users', function($resource) {
  var Users = $resource('/data/users/:id', {id:"@id"});

  Users.prototype.authenticate = function(name, password) {
    return this.name === name && this.password === password;
  }
  return Users;
});

app.factory('catalog', function($resource) {
  var Catalog = $resource('/data/courses/:id', {id:"@id"});

  Catalog.prototype.register = function() {
    this.registered = true;
    this.$save();
  }
  Catalog.prototype.unregister = function() {
    this.registered = false;
    this.$save();
  }
  return Catalog;
});

app.factory('followedInstructors', function($http, $q) {
  return {
    list: [],
    fetch: function() {
      var that = this;
      return $http.get('data/userData/followedInstructors').success(function(data) {
        that.list = data;
      })
    },
    save: function() {
      $http.post('data/userData/followedInstructors', this.list);
    },
    followInstructor: function(instructorName) {
      var found = false;
      this.list.forEach(function(instructor) {
        if(instructor.name === instructorName) {
          found = true;
        }
      });
      if(!found) {
        this.list.push({name: instructorName});
        this.save();
        return true;
      } else {
        return false;
      }
    },
    unFollowInstructor: function(instructor) {
      this.list.splice(this.list.indexOf(instructor), 1);
      this.save();
    }
  }
});