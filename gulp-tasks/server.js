const config = require("./config");
const gulp = require("gulp");
const serv = require("gulp-server-livereload");
const browserSync = require('browser-sync').create();

gulp.task("server", function (cb) {
  gulp.src(config.path.dist.pages).pipe(
    serv({
      server: {
        baseDir: config.path.dist.pages
      },
      livereload: true,
      port: "3005",
      directoryListing: true,
      //   log: "debug",
      clientConsole: true
    })
  );
  cb();
});
