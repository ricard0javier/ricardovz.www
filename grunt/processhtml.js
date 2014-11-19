module.exports = function(grunt) {

  grunt.config('processhtml', {
    options: {
      data: {
        cssFile: 'resources/css/<%= pkg.name %>-v<%= pkg.version %>.min.css',
        jsFile: 'resources/js/<%= pkg.name %>-v<%= pkg.version %>.min.js'
      }
    },
    dist: {
      files: [{
        expand: true,
        cwd: './src',
        src: ['**/*.html'],
        dest: './dist',
        ext: '.html'
      }]
    },
    dev: {
      files: [{
        expand: true,
        cwd: './src',
        src: ['**/*.html'],
        dest: './dev',
        ext: '.html'
      }]
    }
  });
};