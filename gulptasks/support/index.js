var gulp = require('gulp');
var merge = require('event-stream').merge;
var plugins = require('gulp-load-plugins')();

var paths = exports.paths = {
  stylesheets   : [ 'app/core/**/*.scss', 'app/core/**/*.sass', '!app/bower_files/**' ],
  javascripts   : [ 'app/core/**/*.js', '!app/bower_files/**' ],
  index         : 'app/index.html',
  appRoot       : 'app/'
};

exports.streams = {
  stylesheets : streamStylesheets,
  javascripts : streamJavascripts
};

function streamStylesheets() {
  var stream = merge(
    gulp.src(paths.stylesheets)
      .pipe(plugins.sass({ sourceComments: 'map' }))
      .pipe(gulp.dest('app/core')),
    plugins.bowerFiles().pipe(plugins.ignore.exclude('**/*.js'))
  );
  return stream;
}

function streamJavascripts() {
  var stream = merge(
    plugins.bowerFiles().pipe(plugins.ignore.exclude('**/*.css')),
    gulp.src(paths.javascripts)
  );
  return stream;
}