// Parallax Scrolling
(document).ready(function()) {
	var $window = $(window);
	$('section[data-type="background"]').each(function(){
		var $bgobj = $(this);
		$(window).scroll(function() {
			var yPos = -($window.scrollTop() / $bgobj.data('speed'));
			var coords = yPos + 'px';
			$bgobj.css({ backgroundPosition: coords });
		});
	});
}
