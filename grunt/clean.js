module.exports = function(grunt) {

  grunt.config('clean', {
    dist: ['dist'],
    dev: ['dev'],
    all : ['dev', 'dist']
  });
};

