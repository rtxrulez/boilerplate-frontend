const truePath = 'dist/'
const path = {
    templates: "src/templates/",
    data: "src/templates/data/",
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
    }
  };

module.exports = {
  path: path
};