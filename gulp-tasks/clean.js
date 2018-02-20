const config = require("./config");
const gulp = require("gulp");
const del = require("del");

gulp.task("clean", function (cb) {
  del.sync(config.path.dist.pages);
  cb();
});
