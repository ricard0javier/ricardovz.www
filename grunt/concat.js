module.exports = function(grunt) {

  grunt.config('concat', {
    dev: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      src: ['src/**/*.css', 'src/**/*.min.css'],
      dest: 'dev/resources/css/global.min.css'
    }
  });
};