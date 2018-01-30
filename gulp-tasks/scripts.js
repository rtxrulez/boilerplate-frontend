const config = require("./config");
const gulp = require("gulp");
const sass = require("gulp-sass");
const plumber = require("gulp-plumber");

gulp.task("styles", function() {
  return gulp
    .src([config.path.styles + "*.scss", config.path.styles + "*.sass"])
    .pipe(
      plumber({
        errorHandler: function(error) {
          console.log(error.message);
          this.emit("end");
        }
      })
    )
    .pipe(sass())
    .pipe(gulp.dest(config.path.dist.styles));
});
