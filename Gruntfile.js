module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        clean: {
            dev: {
                src: ['public/bundle/*']
            },
            prod: {
                src: ['public/bundle/*']
            }
        },

        concat: {
            js: {
                src: [
                    'assets/vendor/js/socket.io.js',
                    'assets/vendor/js/sails.io.js',
                    'assets/vendor/js/**/*.js',
                    'assets/js/**/*.js',
                    'angular/application.js',
                    'angular/**/*.js',
                ],
                dest: 'public/bundle/bundle.js',
                separator: ";"
            },
            css: {
                src: [
                    'assets/vendor/css/**/*.css',
                    'assets/css/**/*.css'
                ],
                dest: 'public/bundle/bundle.css'
            }
        },

        cssmin: {
            compress: {
                files: {
                    "public/bundle/bundle.min.css": "<%= concat.css.dest %>"
                }
            }
        },

        uglify: {
            js: {
                src: '<%= concat.js.dest %>',
                dest: 'public/bundle/bundle.min.js'
            }
        },

        ngtemplates: {
            app: {
                options: {
                    base: 'angular/views'
                },
                src: 'angular/views/**/*.html',
                dest: 'angular/templates.js'
            }
        },

        watch: {
            js: {
                files: ["<%= concat.js.src %>"],
                tasks: ["concat:js"]
            },
            css: {
                files: ["<%= concat.css.src %>"],
                tasks: ["concat:css"]
            },
            html: {
                files: ["<%= ngtemplates.app.src %>"],
                tasks: ["ngtemplates", "concat:js"]
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-angular-templates');

    grunt.registerTask('dev', ['clean', 'ngtemplates', 'concat', 'watch']);
    grunt.registerTask('prod', ['clean', 'ngtemplates', 'concat', 'uglify', 'cssmin']);
    grunt.registerTask('default', 'dev');
};