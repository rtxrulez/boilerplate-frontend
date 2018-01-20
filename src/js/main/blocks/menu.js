$(function () {
   let $body = $('body');

   if( $('.menu-open-bg').length == 0 ) {
       $body.append('<div class="menu-open-bg"></div>')
   }

   $body.on('click', '.btn-toggle-mobile-menu, .menu-open-bg', function () {
       $body.toggleClass('menu-open');
   })
});