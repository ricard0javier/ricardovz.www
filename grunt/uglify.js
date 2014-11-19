module.exports = function(grunt) {

  grunt.config('uglify', {
    dist: {
      options: {  
        drop_console: true,
        compress: {
          global_defs: {
            "DEBUG": false
          },
          dead_code: true
        }
      },
      src: ['src/resources/js/*.js', 'src/vendors/js/*.js'],
      dest: 'dist/resources/js/<%= pkg.name %>-v<%= pkg.version %>.min.js'
    },
    dev: {
      options: { 
        beautify: true
      },    
      src: ['src/resources/js/**/*.js', 'src/vendors/js/**/*.js'],
      dest: 'dev/resources/js/global.min.js'
    }
  });
};