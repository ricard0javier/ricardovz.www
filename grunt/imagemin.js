module.exports = function(grunt) {

  grunt.config('imagemin', {
    dist: {
      files: [{
        expand: true,
        cwd: 'src/resources',
        src: ['**/*.{png,jpg,gif,ico}'],
        dest: 'dist/resources'
      }]
    }, 
    dev: {
      files: [{
        expand: true,
        cwd: 'src/resources',
        src: ['**/*.{png,jpg,gif,ico}'],
        dest: 'dev/resources'
      }]
    }
  });

};

