module.exports = function(grunt) {

  grunt.config('htmlmin', {
    dist: {
      options: {
        removeComments: true,
        removeCommentsFromCDATA: true,
        removeRedundantAttributes: true,
        collapseWhitespace: true,
        useShortDoctype: true,
        removeEmptyAttributes: true
      },
      files: [{
        expand: true,
        cwd: './dist',
        src: ['**/*.html'],
        dest: './dist',
        ext: '.html'
      }],
    },
    dev: {
      files: [{
        expand: true,
        cwd: './dev',
        src: ['**/*.html'],
        dest: './dev',
        ext: '.html'
      }]
    }
  });
};