
module.exports = function (grunt) {

  grunt.initConfig({
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
        forceVerbose: true
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
        tasks: ['sass'],
        options: {
          livereload: true,
        }
      }
    },
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'theme/style.css': 'theme/style.sass',
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-ftp-deploy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');


  grunt.registerTask('default', ['watch']);
  grunt.registerTask('ftp', ['ftp-deploy']);
};