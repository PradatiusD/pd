
module.exports = (grunt) ->
	grunt.initConfig(

		php:
			test:
				options:
					keepalive: true
					open: true
					port: 5000

		'ftp-deploy':
			dev:
				auth:
					host: 'pradadesigners.com'
					port: 21
					authKey: 'key1'
				src: '.'
				dest: '/public_html/'
				exclusions: [
					'css',
					'img',
					'plugins',
					'package.json',
					'.ftppass',
					'.gitignore',
					'README.md',
					'plugins',
					'node_modules',
					'assets',
					'.git',
					'Gruntfile.coffee',
					'bower_components',
					'bower.json',
					'.DS_Store'
				]

		# copy:
		# 	main:
		# 		files: [{
		# 			expand: true
		# 			src: ['issst/**']
		# 			dest: '../themes/'}
		# 		]

		# sass:                              
		# 	dist:                            
		# 		options:                       
		# 			style: 'expanded'
		# 		files:
		# 			'issst/style.css': 'style.sass'

		# watch:
		# 	theme:
		# 		files: 'issst/*.php'
		# 		tasks: ['copy']
		# 	sassy:
		# 		files: 'style.sass'
		# 		tasks: ['sass',
					# 'copy']

		uglify:
			homepage:
				files:
					'js/homepage.min.js': [
						'bower_components/foundation/js/foundation.js',
						'bower_components/foundation/js/foundation/foundation.reveal.js',
					]
	)

	grunt.loadNpmTasks('grunt-php')
	grunt.loadNpmTasks('grunt-ftp-deploy')
	grunt.loadNpmTasks('grunt-concurrent')
	grunt.loadNpmTasks('grunt-contrib-copy')
	grunt.loadNpmTasks('grunt-contrib-sass')
	grunt.loadNpmTasks('grunt-contrib-watch')
	grunt.loadNpmTasks('grunt-contrib-uglify')
	grunt.registerTask('default', ['watch'])
	grunt.registerTask('deploy', ['ftp-deploy'])
