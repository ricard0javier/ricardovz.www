'use strict';

describe('Filter: owesFilter', function () {

  // load the filter's module
  beforeEach(module('ricardoJsApp'));

  // initialize a new instance of the filter before each test
  var owesFilter;
  beforeEach(inject(function ($filter) {
    owesFilter = $filter('owesFilter');
  }));

  it('should return the input prefixed with "owesFilter filter:"', function () {
    var text = 'angularjs';
    expect(owesFilter(text)).toBe('owesFilter filter: ' + text);
  });

});
