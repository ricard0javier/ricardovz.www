module.exports = function(grunt) {

  grunt.config('watch', {
    configFiles: {
      files: [ 'Gruntfile.js', 'grunt/**/*.js' ],
      options: {
        reload: true
      },
      tasks: ['dev']
    },
    js: {
      files: ['src/resources/**/*.js'],
      tasks: ['uglify:dev']
    },
    css: {
      files: [
        //'src/resources/**/*.css', 
        'src/resources/**/*.scss'],
      tasks: ['sass', 'concat:dev']
    },
    images: {
      files: ['src/resources/**/*.{png,jpg,gif,ico}'],
      tasks: ['imagemin:dev']
    },
    html: {
      files: ['src/**/*.html'],
      tasks: ['processhtml:dev', 'htmlmin:dev', 'validation:dev']
    },
    copy: {
      files: ['src/resources/data/**'],
      tasks: ['copy:dev']
    }
  });
};