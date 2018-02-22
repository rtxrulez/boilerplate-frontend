const config = require("./config");
const gulp = require("gulp");
const browserSync = require('browser-sync').create();

gulp.task("server", function (cb) {
  browserSync.init(
    config.server,
    cb
  );
  cb();
});
