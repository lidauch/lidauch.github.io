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

// Div scrolling

$(window).scroll(function(){
    $("#introtext").css("top", Math.max(0, 250 - $(this).scrollTop()));
});
// $(window).scroll(function(){
//    if ($(window).scrollTop() >= 10) {  // change target to number
//       $("#el").css('position', 'absolute');
//    }
// });

// $.fn.followTo = function (pos) {
//     var $this = this,
//         $window = $(window);
 
//     $window.scroll(function (e) {
//         if ($window.scrollTop() > pos) {
//             $this.css({
//                 position: 'absolute',
//                 top: pos
//             });
//         } else {
//             $this.css({
//                 position: 'fixed',
//                 top: 0
//             });
//         }
//     });
// };
 
// $('#topwrapper').followTo(250);