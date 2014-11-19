module.exports = function(grunt) {

  grunt.config('sass', {
    default: {
      options: {
        sourcemap: 'none'
      },
      files: [{
        expand: true,
        cwd: './src/resources/scss',
        src: ['**/*.scss'],
        dest: 'src/resources/css',
        ext: '.css'
      }]
    }
  });
};