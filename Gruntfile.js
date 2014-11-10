module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });

  // laod grunt plugins in grunt folder
  grunt.loadTasks('grunt');

  // Load the plugins that provide the tasks.
  require('load-grunt-tasks')(grunt);

  // Default task(s).
  grunt.registerTask('default', ['clean', 'uglify', 'htmlmin', 'cssmin', 'concat', 'imagemin']);
  grunt.registerTask('dev', ['clean:dev', 'uglify:dev', 'htmlmin:dev', 'concat:dev', 'imagemin:dev']);

};