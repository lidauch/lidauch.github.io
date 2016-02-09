module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'), 
		sass: {
			dist: {
				files: {
					'src/css/global.css' : 'src/css/scss/global.scss',
					'src/css/subpage.css' : 'src/css/scss/subpage.scss' 
				}
			}
		}, 
		cssmin: {
			dist: {
				files: {
					'dist/css/style.min.css' : ['src/css/global.css']
				}
			}
		},
		clean: ["dist/css/*"],
		// issue here with cssmin when sass writes to css on livereload
		watch: {
			files: ['<%= jshint.files %>'],
			tasks: ['jshint', 'clean', 'cssmin'],
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
		},
		imagemin: {
			files: [{
				expand: true,
				cwd: 'src/images', 
				src: ['**/*.{png,jpg,gif}'],
				dest: 'dist/'
			}]
		}

	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.registerTask('default', ['uglify', 'jshint']);
	grunt.registerTask('development', ['uglify', 'clean', 'cssmin', 'watch']);
};