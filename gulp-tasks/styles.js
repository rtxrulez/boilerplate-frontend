const config =      require('./config')
const gulp =        require('gulp')
const sass =        require('gulp-sass')
const plumber =     require('plumber')

gulp.task('stylus', function(){
    return gulp.src([config.path.styles])
      .pipe(plumber({
        errorHandler: function (error) {
          console.log(error.message);
          this.emit('end');
      }}))
      .pipe(sass())
      .pipe(gulp.dest(config.path.dist.styles))
  });