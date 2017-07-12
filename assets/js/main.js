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