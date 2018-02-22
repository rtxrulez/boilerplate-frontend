const config = require("./config");
const gulp = require("gulp");
const styles = require("./styles");
const templates = require("./templates");
const scripts = require("./scripts");
const fonts = require("./fonts");
const images = require("./images");

gulp.task("watch", function (cb) {
  global.watch = true;

  gulp.watch(config.path.templates + '**/*.pug', gulp.parallel('templates'));
  gulp.watch(config.path.styles + '**/*.*', gulp.parallel('styles'));
  gulp.watch(config.path.scripts + '**/*.js', gulp.parallel('scripts'));
  gulp.watch(config.path.images + '**/*.*', gulp.parallel('images'));
  gulp.watch(config.path.fonts + '**/*', gulp.parallel('fonts'));
  cb()
});
