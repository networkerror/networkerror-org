var gulp = require('gulp');
var paths = require('./support').paths;
var all = require('./support').streams;

gulp.task('serve', function serve() {
  var connect = require('gulp-connect');

  connect.server({
    livereload : true,
    root       : 'app',
    port       : 4000
  });

  var watch = require('gulp-watch');

//    gulp.watch(paths.stylesheets, [ 'build:stylesheets' ]);
//    gulp.watch(paths.javascripts, [ 'build:javascripts' ]);
//    gulp.watch(paths.index,       [ 'build:inject:index' ]);

  watch({ glob: 'app/**/*' }).pipe(connect.reload());
});