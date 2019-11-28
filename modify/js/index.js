// $(document).ready(function() {
	
// 	$(window).bind('scroll', function(e) {
// 		var navHight = $('.cover').height();
// 		var getNav = $('#navbar');
// 		var getNavHolder = $('#nav-placeholder');
// 		var getNavHight = getNav.offsetHeight();		

// 		if ($(window).scrollTop() >= navHight) {
// 			$('#navbar').addClass('fixedTop');
// 			$('#nav-placeholder').removeClass('d-none');
// 			getNavHolder.style = `
// 			width: 100vw;
// 			height: ${getNavHeight}px;
// 		`
// 		}

// 		else {
// 			$('#navbar').removeClass('fixedTop');
// 			$('#nav-placeholder').addClass('d-none');
// 			// getNavHolder.style = `
// 			// width: 0;
// 			// height: 0;
// 		// `
// 		}
// 	});
// });

// nav slide
$(document).ready(function() {
	function scrollToSection(e) {
		event.preventDefault();
		var $section = $($(this).attr('href')); 
		$('html, body').animate({
			scrollTop: $section.offset().top - 80
		}, 1000);
	    }
	$('[data-scroll]').on('click', scrollToSection);

});

// hamburger menu
$(document).ready(function(){

	$('.navbar-toggler').click(function(e){
		$('.trigger').toggleClass('active');		
	});

	$('.nav-link').click(function(e){
		$('#navigate').toggleClass('show');
		$('.trigger').toggleClass('active');
	});

});