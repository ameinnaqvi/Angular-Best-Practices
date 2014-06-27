app.value('toastr', toastr);
app.value('Backbone', Backbone);

app.factory('notifier', function(toastr) {
  return {
    notify: function(msg) {
      toastr.success(msg);
      console.log(msg);
    }
  }
});

app.value('identity', {});


