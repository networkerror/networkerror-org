try {
  var gulp = require('gulp');
  require('require-dir')('./gulptasks');
  gulp.task('default', []);
} catch (err) {
  if (err.code === 'MODULE_NOT_FOUND') {
    console.log("#########################################");
    console.log("You are missing some node modules...");
    console.log("Please run 'npm install', then try again.");
    console.log("#########################################");
    throw err;
  }
}
