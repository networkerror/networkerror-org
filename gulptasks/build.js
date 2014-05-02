var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var merge = require('event-stream').merge;
var support = require('./support');

gulp.task('build', ['build:index']);

// Inject deps into index
gulp.task('build:index', function buildIndex() {
  var allStreams = merge(
    support.streams.javascripts(),
    support.streams.stylesheets()
  );

  return gulp.src(support.paths.index)
    .pipe(plugins.inject(allStreams, { ignorePath: support.paths.appRoot }))
    .pipe(gulp.dest(support.paths.appRoot));
});