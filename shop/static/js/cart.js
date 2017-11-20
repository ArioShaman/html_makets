$(document).on('ready', function() {
       $('.regular').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.regular-nav'
        });
        $('.regular-nav').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          asNavFor: '.regular',
          dots: true,
          centerMode: true,
          focusOnSelect: true
        });
    });