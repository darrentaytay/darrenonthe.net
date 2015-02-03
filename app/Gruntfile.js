module.exports = function(grunt) {
    grunt.initConfig({
        copy: {
            main: {
                files: [
                    {
                        cwd: './assets/lib/',
                        src: '**',
                        dest: './static/lib/',
                        expand: true
                    },
                    {
                        cwd: './assets/img/',
                        src: '**',
                        dest: './static/img/',
                        expand: true
                    }
                ]
            },
        },
        less: {
            development: {
                options: {
                    compress: true
                },
                files: {
                    "./static/css/styles.css": "./assets/css/styles.less",
                    "./static/lib/animate.css/css/animate.css": "./bower_components/animate.css/animate.min.css"
                }
            }

        },
        concat: {
            options: {
                separator: ';'
            },
            js: {
                src: [
                    './bower_components/jquery/dist/jquery.js',
                    './assets/lib/materialize/js/materialize.js',
                    './assets/js/frontend.js'
                ],
                dest: './static/js/frontend.js'
            }

        },
        watch: {
            js: {
                files: [
                    './assets/js/frontend.js'
                ],
                tasks: ['concat:js']
            },
            less: {
                files: ['./assets/css/*.less'],
                tasks: ['less']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['concat', 'less', 'copy']);
};