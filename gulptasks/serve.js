var gulp = require('gulp');
var all = require('./support').streams;

gulp.task('serve', ['build'], function serve() {
  var connect = require('gulp-connect');

  connect.server({
    livereload : true,
    root       : 'app',
    port       : 4000
  });

  var watch = require('gulp-watch');

  gulp.watch('app/**/*', [ 'build' ]);
  watch({ glob: 'app/**/*' }).pipe(connect.reload());
});