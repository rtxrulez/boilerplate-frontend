const config = require("./config");
const gulp = require("gulp");
const pug = require("gulp-pug");
const plumber = require("gulp-plumber");

// режим разработки?
const dev = !process.env.NODE_ENV || process.env.NODE_ENV == 'dev';

gulp.task(function templates(cb) {
  // данные для генерации
  const data = require("../" + config.path.data + "data.json");

  gulp
    .src(config.path.templates + "/pages/**/*.pug")
    .pipe(plumber())
    .pipe(
      pug({
        locals: data,
        pretty: !dev
      }).on("error", function (error) {
        console.log(error);
      })
    )
    .pipe(gulp.dest(config.path.dist.pages));

  cb();
});
