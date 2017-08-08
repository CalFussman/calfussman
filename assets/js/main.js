// navbar responsive
$('.navbar__icon').click(function() {
    $('.navbar').toggleClass('navbar--responsive');
});

// book cal button
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 100) {
    $('.navbar--book').fadeIn();
  } else {
    $('.navbar--book').fadeOut();
  }
});

setInterval(slideCarousel, 5000);

function slideCarousel() {
    $('.carousel').children().each(function(){
        var classes = $(this).attr('class');
        var index = $(this).data('position');
        var nextIndex = ++index > 5 ? 1 : index;

       
        if (nextIndex === 1) {
           $(this).attr('class', 'quote quote--1')
        } else {
            $(this).addClass('quote--'+nextIndex);
        }

        $(this).data('position', nextIndex);
    });
}


$('.photo-carousel__nav--left').click(function(e) {
    console.log('test');
    $('.photo-carousel').scrollLeft(500);
});