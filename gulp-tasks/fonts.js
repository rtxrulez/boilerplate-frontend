const config = require("./config");
const gulp = require("gulp");

gulp.task("fonts", function (cb) {
  gulp.src(config.path.fonts + "**/*")
    .pipe(gulp.dest(config.path.dist.fonts));
  cb();
});
