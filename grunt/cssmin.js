module.exports = function(grunt) {

  grunt.config('cssmin', {
    dist: {
      files: {
        'dist/resources/css/<%= pkg.name %>-v<%= pkg.version %>.min.css' : ['dist/**/*.css']
      }          
    },
  });
};