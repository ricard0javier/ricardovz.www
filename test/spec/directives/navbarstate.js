'use strict';

describe('Directive: navBarState', function () {

  // load the directive's module
  beforeEach(module('ricardoJsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<nav-bar-state></nav-bar-state>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the navBarState directive');
  }));
});
