module.exports = function(grunt) {

  grunt.config('cssmin', {
    dist: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      files: {
        'dist/resources/css/global.min.css' : ['src/resources/css/*.css', 'src/vendors/css/*.css']
      }          
    },
  });
};