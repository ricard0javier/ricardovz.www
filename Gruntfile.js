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
  grunt.registerTask('default', [
    'dev', 
    'dist', 
    'watch']);
  grunt.registerTask('dist', [
    'clean:dist', 
    'copy:dist',
    'uglify:dist', 
    'processhtml:dist', 
    'htmlmin:dist', 
    'validation:dist', 
    'sass', 
    'concat:dist', 
    'cssmin:dist',
    'imagemin:dist']);
  grunt.registerTask('dev', [
    'clean:dev', 
    'copy:dev',
    'uglify:dev', 
    'processhtml:dev', 
    'htmlmin:dev', 
    'validation:dev', 
    'sass', 
    'concat:dev', 
    'imagemin:dev']);
};