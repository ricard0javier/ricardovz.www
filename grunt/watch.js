module.exports = function(grunt) {

  grunt.config('watch', {
    configFiles: {
      files: [ 'Gruntfile.js', 'config/**/*.js' ],
      options: {
        reload: true
      },
      tasks: ['dev']
    },
    src: {
      files: ['src/resources/**/*.js', 'src/resources/**/*.css', 'src/resources/**/*.{png,jpg,gif,ico}', 'src/**/*.html', 'src/*.html'],
      tasks: ['dev']
    }
  });
};

