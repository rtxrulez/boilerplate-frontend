const config = require("./config");
const gulp = require("gulp");
const serv = require("gulp-server-livereload");

gulp.task("server", function (cb) {
  gulp.src(config.path.dist.pages).pipe(
    serv({
      livereload: true,
      port: "3005",
      directoryListing: true,
      //   log: "debug",
      clientConsole: true
    })
  );
  cb();
});
