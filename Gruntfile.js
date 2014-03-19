module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['clean', 'coffee']);

    grunt.initConfig({
        watch: {
            files: 'fuckin/**/*.coffee',
            tasks: 'default'
        },

        clean: ['fuckin-bird.js'],

        coffee: {
            options: {
                join: true,
                bare: true
            },
            dist: {
                files: [
                    {
                        src: [
                            'fuckin/config.coffee',
                            'fuckin/bird.coffee',
                            'fuckin/game.coffee'
                        ],
                        dest: 'fuckin-bird.js'
                    }
                ]
            }
        }
    });

};
