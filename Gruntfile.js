module.exports = function(grunt) {
  grunt.initConfig({
    copy: {
      dist: {
        cwd: 'src/', expand: true, src: '**', dest: 'dist/'
      }
    },
    cssmin: {
      dist: {
        files: [
          { src: 'dist/static/ukhasnet.css', dest: 'dist/static/ukhasnet.min.css' }
        ],
        options: {
          keepSpecialComments: 0
        }
      }
    },
    concat: {
        dist: {
            files: {
                'dist/static/jquerybootstrap.min.js': [
                    'dist/static/jquery/jquery-1.11.2.min.js',
                    'dist/static/bootstrap/js/bootstrap.min.js'
                ],
                'dist/static/compiled.min.css': [
                    'dist/static/bootstrap/css/bootstrap.min.css',
                    'dist/static/ukhasnet.min.css'
                ],
            },
        },
    },
    processhtml: {
      dist: {
        files: {
        'dist/index.html': ['src/index.html'],
        'dist/map.html': ['src/map.html'],
        'dist/nodeList.html': ['src/nodeList.html'],
        'dist/nodeInfo.html': ['src/nodeInfo.html'],
        'dist/nodeAdd.html': ['src/nodeAdd.html'],
        'dist/nodeEdit.html': ['src/nodeEdit.html'],
        'dist/logtail.html': ['src/logtail.html'],
        }
      }
    },
    compress: {
      dist: {
        options: {
          mode: 'gzip',
          level: 9
        },
        files: [
            {
              expand: true,
              cwd: 'dist/',
              src: ['*.html'],
              dest: 'dist/',
              ext: '.html.gz'
            },
            {
              expand: true,
              cwd: 'dist/',
	      src: ['static/*.min.css'],
              dest: 'dist/',
              ext: '.min.css.gz'
            },
            {
              expand: true,
              cwd: 'dist/',
              src: ['static/*.js'],
              dest: 'dist/',
              ext: '.js.gz'
            },
            {
              expand: true,
              cwd: 'dist/',
              src: ['static/leaflet/leaflet.js'],
              dest: 'dist/',
              ext: '.js.gz'
            },
            {
              expand: true,
              cwd: 'dist/',
              src: ['static/leaflet/leaflet.css'],
              dest: 'dist/',
              ext: '.css.gz'
            }
        ]
      }
    }
  });
  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-compress');
  // Default tasks.
  grunt.registerTask('default', ['copy', 'cssmin', 'concat', 'processhtml', 'compress']);
};
