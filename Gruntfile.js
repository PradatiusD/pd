
module.exports = function (grunt) {

  var options = {
    pkg: grunt.file.readJSON('package.json'),
    'ftp-deploy': {
      build: {
        auth: {
          host: 'pradadesigners.com',
          port: 21,
          authKey: 'key'
        },
        src: 'theme',
        dest: 'dprada',
        forceVerbose: true,
        exclusions: ['theme/lib','.DS_Store','theme/fonts']
      }
    },
    watch: {
      files: {
        files: ['theme/*.php','theme/*.js'],
        tasks: [],
        options: {
          livereload: true,
        }
      },
      styles: {
        files: 'theme/*.sass',
        tasks: ['sass:dev'],
        options: {
          livereload: true,
        }
      }
    },
    sass: {
      dev: {
        options: {
          style: 'expanded'
        },
        files: {
          'theme/style.css': 'theme/style.sass'
        }
      },
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'theme/style.css': 'theme/style.sass'
        }
      }
    }
  };

  grunt.initConfig(options);

  grunt.loadNpmTasks('grunt-ftp-deploy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');


  grunt.registerTask('default', ['watch']);
  grunt.registerTask('ftp', ['sass:dist','ftp-deploy']);
};