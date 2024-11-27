module.exports = function (grunt) {
    // Configuração de tarefas
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        // Compilação de LESS para CSS
        less: {
            development: {
                files: {
                    'dist/style.css': 'src/style.less' // Saída : Entrada
                }
            }
        },
        
        // Minificação de código JavaScript
        uglify: {
            build: {
                files: {
                    'dist/script.min.js': ['src/script.js'] // Saída : Entrada
                }
            }
        }
    });

    // Carrega os plugins necessários
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Registra tarefas padrão
    grunt.registerTask('default', ['less', 'uglify']);
};
