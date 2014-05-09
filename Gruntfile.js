module.exports = function (grunt) {
  grunt.initConfig({
      imageEmbed: {
          dist: {
            src: "chrome/button/button.css",
            dest: "chrome/button/compiled.css"
          }
      }
  });

  grunt.loadNpmTasks('grunt-image-embed');
  grunt.registerTask("build", ["imageEmbed"]);
}
