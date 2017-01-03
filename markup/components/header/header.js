$(document).on('click','.header-menu__mobile',function() {
	$(this).toggleClass('_active');
	$('.header-menu__list').slideToggle(300);
})

$(document).on('click','.header-search__mobile',function() {
	$(this).toggleClass('_active');
	$('.header-search__wrapper').slideToggle(300);
})
$(function() {
	if($(window).width < 761) {
		$(document).on('click','.header-menu__item._dropdown',function() {
			alert('aaa');
/*			$(this).children('.header-menu-dropdown').css({
				"visibility": "visible",
	    		"opacity": "1",
	    		"display": "block"
			})*/
		})
	}
})