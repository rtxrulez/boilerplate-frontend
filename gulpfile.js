const gulp = require("gulp"),
  sass = require("gulp-sass"),
  postcss = require("gulp-postcss"),
  pug = require("gulp-pug");

const path = {
  templates: "src/templates/",
  styles: "src/styles/",
  js: "src/js/",
  img: "src/images/",
  svgSprite: "src/images/svg-sprite/",
  svgPicture: "src/images/svg-picture/",
  fonts: "src/fonts/",
  dist: {
    pages: "dist/",
    styles: `${truePath}/styles`,
    js: `${truePath}/js/`,
    img: `${truePath}/images/`,
    svgSprite: `${truePath}/images/svg-sprite/`,
    sprite: `${truePath}/images/sprite/`,
    fonts: `${truePath}/fonts`
  },
  distBackend: "../../backend/web/frontend/template/",
  srcComponents: "../components/menu/src/",
  distComponents: "../components/menu/dist/",
  srcComponentsPlan: "../components/plan/src/",
  distComponentsPlan: "../components/plan/dist/"
};
