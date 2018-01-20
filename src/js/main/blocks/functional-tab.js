$(function () {
    console.log('section functional ');

    var $btnGroup = $('#functional-tab-btn')
    var $btnItem = $('.functional-tab__btn-item')
    console.log('$btnGroup', $btnGroup)
    var $sync1 = $("#functional-tab-content");

    $sync1.owlCarousel({
        items : 1,
        slideSpeed : 2000,
        nav: true,
        autoplay: false,
        dots: true,
        loop: true,
        responsiveRefreshRate : 200,
        navText: [
            '',
            ''
        ],
    }).on('changed.owl.carousel', syncPosition);

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        var count = el.item.count-1;
        var current = Math.round(el.item.index - (el.item.count/2) - .5);

        if(current < 0) {
            current = count;
        }
        if(current > count) {
            current = 0;
        }

        $btnGroup
            .find(".functional-tab__btn-item")
            .removeClass("active")
            .eq(current)
            .addClass("active");
    }


    $btnItem.on("click", function(e){
        e.preventDefault();
        var number = $(this).index();
        $sync1.data('owl.carousel').to(number, 300, true);
    });
});