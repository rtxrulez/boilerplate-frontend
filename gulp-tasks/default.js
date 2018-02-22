const config = require("./config");
const gulp = require("gulp");
const styles = require("./styles");
const templates = require("./templates");
const scripts = require("./scripts");
const fonts = require("./fonts");
const images = require("./images");
const server = require("./server");
const watch = require("./watch");

gulp.task('default', gulp.series(
  gulp.parallel('templates', 'styles', 'scripts', 'fonts', 'images'),
  gulp.parallel(
    'watch',
    'server'
  )
));
