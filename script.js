$(function() {
     $('.toggles button').click(function() {
           var get_id = this.id;
           var get_current = $('.posts .' + get_id);

           $('.post').not(get_current).hide(500);
           get_current.show(500);


     });

     $('#showall').click(function() {
           $('.post').show(500);
     });
});

$(document).ready(function(){
      $(".owl-carousel").owlCarousel({
            items: 8,
            nav: true,
            loop:true,
      
      });
    });

if($(window).width() < 420) {
      $(".owl-carousel").owlCarousel({
            items: 3,
            
            loop:true,
      });
}

function upArrow() {
     let button = $('.up-arrow');

     $(window).on('scroll', () => {
       if ($(this).scrollTop() >= 50) {
            button.fadeIn();
       } else {
            button.fadeOut();
       }
     });

     button.on('click', (e) => {
            e.preventDefault();
            $('html').animate({scrollTop: 0}, 1000);
     })
}

upArrow();