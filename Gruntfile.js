module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['clean', 'coffee']);

    grunt.initConfig({
        watch: {
            files: 'faqin/**/*.coffee',
            tasks: 'default'
        },

        clean: ['faqin-bird.js'],

        coffee: {
            options: {
                join: true,
                bare: true
            },
            dist: {
                files: [
                    {
                        src: [
                            'faqin/config.coffee',
                            'faqin/bird.coffee',
                            'faqin/game.coffee',
                            'faqin/main.coffee'
                        ],
                        dest: 'faqin-bird.js'
                    }
                ]
            }
        }
    });

};
