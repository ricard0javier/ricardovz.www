'use strict';

describe('Directive: wpApiPost', function () {

  // load the directive's module
  beforeEach(module('ricardoJsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<wp-api-post></wp-api-post>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the wpApiPost directive');
  }));
});
