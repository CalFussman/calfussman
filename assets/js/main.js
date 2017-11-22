$(function() {
    $('body').removeClass('fade-out');

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
    $('#video-play-youtube').modalVideo();

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
        $('#awf_field-92395624').val($('#id_firstname').val());
        $('#awf_field-92395625').val($('#id_email').val());
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


    var sliderTimer = setInterval(function () {
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
        clearInterval(sliderTimer);
        sliderTimer = setInterval(function () {
            moveRight();
        }, 3000);
    };

    function moveRight() {
        $('.photo-carousel ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('.photo-carousel ul li:first-child').appendTo('.photo-carousel ul');
            $('.photo-carousel ul').css('left', '');
        });
        clearInterval(sliderTimer);
        sliderTimer = setInterval(function () {
            moveRight();
        }, 3000);
    };

    $('.photo-carousel__nav--left').click(function () {
        moveLeft();
    });

    $('.photo-carousel__nav--right').click(function () {
        moveRight();
    });
});