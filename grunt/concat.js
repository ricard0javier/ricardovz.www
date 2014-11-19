module.exports = function(grunt) {

  grunt.config('concat', {
    dist: {
      src: ['src/vendors/css/**/*.css', 'src/resources/css/**/*.css'],
      dest: 'dist/resources/css/<%= pkg.name %>-v<%= pkg.version %>.min.css'
    },
    dev: {
      src: ['src/vendors/css/**/*.css', 'src/resources/css/**/*.css'],
      dest: 'dev/resources/css/global.min.css'
    }
  });
};