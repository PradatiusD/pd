
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
      }
    }
  });

  grunt.loadNpmTasks('grunt-ftp-deploy');

  grunt.registerTask('default', ['ftp-deploy']);
};