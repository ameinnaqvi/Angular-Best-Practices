app.value('toastr', toastr);

app.value('identity', {})

app.factory('users', function($resource) {
  return $resource('/data/users/:id', {id:"@id"})
})
app.factory('catalog', function($resource) {
  return $resource('/data/courses/:id', {id:"@id"})
})

app.value('followedInstructors', [
  {id: 1, name: 'Professor Snape'},
  {id: 2, name: 'Professor McGonagall'},
  {id: 3, name: 'Professor Dumbledore'}
]);
