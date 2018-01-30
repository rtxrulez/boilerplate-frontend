const config = require("./config");
const gulp = require("gulp");
const babel = require("gulp-babel");
const livereload = require("gulp-livereload");
const gulpIf = require("gulp-if");
const concat = require("gulp-concat");

// режим разработки?
const dev = !process.env.NODE_ENV || process.env.NODE_ENV == "dev";

gulp.task("scripts", function(cb) {
  gulp
    .src(config.path.scripts + "*.js")
    .pipe(concat("app.js"))
    .pipe(babel())
    .pipe(gulpIf(dev, livereload()))
    .pipe(gulp.dest(config.path.dist.scripts));
  cb();
});
