module.exports = function(grunt) {

	grunt.config('copy', {
		dist:{
			files: [{
				expand: true, 
				cwd: 'src/resources/data/', 
				src: ['**'], 
				dest: 'dist/resources/data/'}
			]
		},
		dev:{
			files: [{
				expand: true, 
				cwd: 'src/resources/data/', 
				src: ['**'], 
				dest: 'dev/resources/data/'}
			]
		},
	});
};