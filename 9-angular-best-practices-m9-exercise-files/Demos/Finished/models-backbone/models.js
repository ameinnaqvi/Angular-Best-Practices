app.factory('users', function($resource) {
  return $resource('/data/users/:id', {id:"@id"});
});

app.factory('catalog', function(Backbone) {
  var Course = Backbone.Model.extend({
    url: function() {
      return '/data/courses/' + this.attributes.id;
    },
    register: function() {
      this.attributes.registered = true;
      this.save(this.attributes, {type: 'POST'});
      this.trigger('courseRegistered', this);
    },
    unregister: function() {
      this.attributes.registered = false;
      this.save(this.attributes, {type: 'POST'});
    }
  });

  var Catalog = Backbone.Collection.extend({
    url: '/data/courses/',
    model: Course
  });
  return {
    query: function(success, error) {
      var catalog = new Catalog();
      catalog.fetch({success: success, error: error});
      return catalog;
    }
  }
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