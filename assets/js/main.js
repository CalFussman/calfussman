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

// play video
$('#video-play').modalVideo({channel:'vimeo'});
$('#video-play-youtube').modalVideo();

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

// for slider
jQuery(document).ready(function ($) {
    setInterval(function () {
        moveRight();
    }, 3000);
  
	var slideCount = $('.photo-carousel ul li').length;
	var slideWidth = $('.photo-carousel ul li').width();
	var slideHeight = $('.photo-carousel ul li').height();
    var sliderUlWidth = slideCount * slideWidth;
	
	$('.photo-carousel').css({height: slideHeight });
	
	$('.photo-carousel ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('.photo-carousel ul li:last-child').prependTo('.photo-carousel ul');

    function moveLeft() {
        $('.photo-carousel ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('.photo-carousel ul li:last-child').prependTo('.photo-carousel ul');
            $('.photo-carousel ul').css('left', '');
        });
    };

    function moveRight() {
        $('.photo-carousel ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('.photo-carousel ul li:first-child').appendTo('.photo-carousel ul');
            $('.photo-carousel ul').css('left', '');
        });
    };

    $('.photo-carousel__nav--left').click(function () {
        moveLeft();
    });

    $('.photo-carousel__nav--right').click(function () {
        moveRight();
    });
});

$('.logo-quote').click(function(e) {
    $('#quote').html($(this).data('quote'));
    $('#author').html($(this).data('author'));
});

$('#submit_form').click(function(e) {
    if (!$('#id_firstname').val()) {
        return;
    }
    if (!$('#id_email').val()) {
        return;
    }
    if (!ValidateEmail($('#id_email').val())) {
        return;
    }
    console.log('no errors');
    $('#awf_field-92391568').val($('#id_firstname').val());
    $('#awf_field-92391569').val($('#id_email').val());
    $('#signup-form').submit();
});

$('.testimonials__thumbnails__element').click(function(e) {
    $('.testimonials__main__note.active').hide().removeClass('active');
    $('#'+$(this).data('id')).show().addClass('active');
});

function ValidateEmail(email) {  
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {  
        return true;
    }  
    return false;  
} 
