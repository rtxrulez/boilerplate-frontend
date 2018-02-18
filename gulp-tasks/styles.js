const config       = require("./config");
const gulp         = require("gulp");
const sass         = require("gulp-sass");
const plumber      = require("gulp-plumber");
const postcss      = require('gulp-postcss');
const sourcemaps   = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const livereload   = require("gulp-livereload");
const gulpIf       = require("gulp-if");

// Настройки postcss
const postcssPlugins = [ 
  require('postcss-pseudo-class-enter'),
  autoprefixer()
]
// режим разработки?
const dev = !process.env.NODE_ENV || process.env.NODE_ENV == "dev";


gulp.task("styles", function() {
  return gulp
    .src([config.path.styles + "*.scss", config.path.styles + "*.sass"])
    .pipe(gulpIf(dev, sourcemaps.init()))
    .pipe(
      plumber({
        errorHandler: function(error) {
          console.log(error.message);
          this.emit("end");
        }
      })
    )
    .pipe(sass())
    .pipe(postcss(postcssPlugins))
    .pipe(gulpIf(dev, sourcemaps.write('.')))
    .pipe(gulpIf(dev, livereload()))
    .pipe(gulp.dest(config.path.dist.styles));
});
