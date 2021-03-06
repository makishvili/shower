module.exports = function(grunt) {

	grunt.initConfig({
		uglify: {
			options: {
				mangle: true,
				banner: '/**\n * Shower HTML presentation engine: github.com/shower/shower\n * @copyright 2010–<%= grunt.template.today("yyyy") %> Vadim Makeev, pepelsbey.net\n * @license MIT license: github.com/shower/shower/wiki/MIT-License\n */\n'
			},
			build: {
				src: 'shower.js',
				dest: 'shower.min.js'
			}
		},
		connect: {
			ribbon: {
				options: {
					port: 7497
				}
			}
		},
		dalek: {
			options: {
				browser: ['chrome']
			},
			src: [
				'tests/*.js'
			]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-dalek');

	grunt.registerTask('default', ['uglify']);
	grunt.registerTask('test', ['connect', 'dalek']);

};