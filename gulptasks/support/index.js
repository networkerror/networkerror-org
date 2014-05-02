var gulp = require('gulp');
var merge = require('event-stream').merge;
var plugins = require('gulp-load-plugins')();

var paths = exports.paths = {
  stylesheets   : [ 'app/core/**/*.scss', 'app/core/**/*.sass' ],
  javascripts   : 'app/core/**/*.js',
  index         : 'app/index.html',
  appRoot       : 'app/'
};

exports.streams = {
  stylesheets : streamStylesheets,
  javascripts : streamJavascripts
};

function streamStylesheets() {
  var stream = merge(
    gulp.src(paths.stylesheets),
    plugins.bowerFiles().pipe(plugins.ignore.exclude('**/*.js')))
    .pipe(plugins.sass({ sourceComments: 'map' }));
  return stream;
}

function streamJavascripts() {
  var stream = merge(
    plugins.bowerFiles(plugins.ignore.exclude('**/*.css')),
    gulp.src(paths.javascripts)
  );
  return stream;
}