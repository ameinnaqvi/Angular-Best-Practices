describe('my controller', function() {
  beforeEach(module('app'));
  beforeEach(function() {
    var that = this;
    inject(function($controller, $rootScope) {
      that.scope = $rootScope.$new();
      console.log(this.scope);
      that.$controller = $controller;
    });
  })
  it('should be testable', function() {
    this.$controller('registrationCtrl', {$scope: this.scope});

    expect(this.scope.someG).toBe([]);
  });
})