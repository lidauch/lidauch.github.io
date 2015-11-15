// // Parallax Scrolling
// $(document).ready(function() {
// 	var $window = $(window);
// 	$('section[data-type="background"]').each(function(){
// 		var $bgobj = $(this);
// 		$(window).scroll(function() {
// 			var yPos = -($window.scrollTop() / $bgobj.data('speed'));
// 			var coords = yPos + 'px';
// 			$bgobj.css({ backgroundPosition: coords });
// 		});
// 	});
// });

// Scroll to bottom
$(document).ready(function() {
    $('#scrollDown').click(function(){
        $('html, body').animate({scrollTop:$(document).height()}, 'slow');
        return false;
    });
});

// Hide text on scroll
$(window).scroll(function() {
    if ($(this).scrollTop() > 1000) {
        $('#introtext').hide();
    }
    if ($(this).scrollTop() < 1000) {
        $('#introtext').show();
    }
});
