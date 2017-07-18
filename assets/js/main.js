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

// play video
$('#video-play').modalVideo({channel:'vimeo'});

setInterval(slideCarousel, 5000);

function slideCarousel() {
    $('.carousel').children().each(function(){
        var classes = $(this).attr('class');
        var index = classes.split('--')[1];
        var nextIndex = ++index > 5 ? 1 : index;
        $(this).removeClass('quote--'+(index-1)).addClass('quote--'+nextIndex);
    });
}