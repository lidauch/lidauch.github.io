module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'), 
		sass: {
			dist: {
				files: {
					'src/css/global.css' : 'src/css/scss/global.scss' 
				}
			}
		}, 
		watch: {
			files: ['<%= jshint.files %>'],
			tasks: 'jshint',
			css: {
				files: '**/*.scss', 
				tasks: ['sass']
			}
		},
		uglify: {
			dist: {
				files: {
					'dist/<%= pkg.name %>.min.js' : 'src/js/main.js'
				}
			}
		}, 
		jshint: {
			files: ['Gruntfile.js', 'src/js/main.js'],
			options: {
				globals: {
					jQuery: true,
				}
			}
		}

	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.registerTask('default', ['uglify', 'jshint']);
	grunt.registerTask('development', ['uglify', 'watch']);
};