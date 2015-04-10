module.exports = function(grunt) {
    grunt.initConfig({
        cssmin : {
            furo : {
                src : ['src/select/hito_select.css'],
                dest : 'dist/hito-lib.min.css'
            }
        },
        uglify : {
            furo : {
                options : {
                },
                src : ['src/toast/toast_js', 'src/loading/loading.js'],
                dest : 'dist/hito-lib.min.js'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //task
    //grunt
    grunt.registerTask('build', ['cssmin', 'uglify']);
};