'use strict';
const config = require("./config");
let webpackConfig = require('./../webpack.config.js');
const gulp = require("gulp");
const gulpIf = require("gulp-if");
const webpack = require('webpack');

const gutil = require('gulp-util');
const notifier = require('node-notifier');


// режим разработки?
const dev = !process.env.NODE_ENV || process.env.NODE_ENV == "dev";


let statsLog = { // для красивых логов в консоли
  colors: true,
  reasons: true
};
gulp.task('scripts', (done) => {
  // run webpack
  webpack(webpackConfig, onComplete);

  function onComplete(error, stats) {
    if (error) { // кажется еще не сталкивался с этой ошибкой
      onError(error);
    } else if (stats.hasErrors()) { // ошибки в самой сборке, к примеру "не удалось найти модуль по заданному пути"
      onError(stats.toString(statsLog));
    } else {
      onSuccess(stats.toString(statsLog));
    }
  }

  function onError(error) {
    let formatedError = new gutil.PluginError('webpack', error);
    notifier.notify({ // чисто чтобы сразу узнать об ошибке
      title: `Error: ${formatedError.plugin}`,
      message: formatedError.message
    });
    done(formatedError);
  }

  function onSuccess(detailInfo) {
    gutil.log('[webpack]', detailInfo);
    done();
  }
});
