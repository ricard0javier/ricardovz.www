module.exports = function(grunt) {

  grunt.config('validation', {
    options: {
        reset: true,
        stoponerror: false,
        relaxerror: ['Bad value X-UA-Compatible for attribute http-equiv on element meta.'] //ignores these errors
    },
    dist: {
	    files: {
	        src: ['dev/**/*.html']
	    }
	},
    dev: {
	    files: {
	        src: ['dev/**/*.html']
	    }
	},
    src: {
	    files: {
	        src: ['src/**/*.html']
	    }
	}
});
};

