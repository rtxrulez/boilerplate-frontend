const config = require("./config");
const gulp = require("gulp");
const serv = require("gulp-server-livereload");

gulp.task("webserver", function(cb) {
  gulp.src(config.path.dist.pages).pipe(
    serv({
      livereload: true,
      port: "3005",
      directoryListing: false,
      log: "debug",
      clientConsole: true
    })
  );
  cb();
});
