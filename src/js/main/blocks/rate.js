$(function () {
    $('#rate-slider').owlCarousel({
        margin: 0,
        navSpeed: 500,
        nav: true,
        items: 1,
        // animateIn: 'fake',
        // animateOut: 'fake',
        navText: ['', ''],
        responsive: {
            768: {
                items: 3,
                nav: false,
                mouseDrag: false,
                touchDrag: false,
                pullDrag: false,
                freeDrag: false
            }
        }
    });
});