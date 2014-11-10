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
      files: {
        'dist/index.html': 'src/index.html',
        'dist/test.html': 'src/test.html'
      }
    },
    dev: {
      files: {
        'dev/index.html': 'src/index.html',
        'dev/test.html': 'src/test.html'
      }
    }
  });
};