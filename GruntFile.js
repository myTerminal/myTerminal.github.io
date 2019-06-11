module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            css: {
                files: [
                    {
                        src: ['src/styles/styles.less'],
                        dest: 'build/styles/styles.css'
                    }
                ]
            }
        },
        watch: {
            css: {
                files: 'src/styles/**/*.less',
                tasks: ['less']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', ['less']);
    grunt.registerTask('develop', ['watch']);
    grunt.registerTask('default', ['build']);
};
