$(function(){
    $('.top-slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="img/next.svg" alt="next"></button>',
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="img/prev.svg" alt="prev"></button>', // separate slider buttons 
        responsive: [
          {
            breakpoint: 1024,
            settings: {
            }
          },
          {
            breakpoint: 640,
            settings: {
                arrows: false,
            }
          }
        ]
      });
});

$(function(){
  $('.bottom-slider').slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      initialSlide: 1,
    });
});