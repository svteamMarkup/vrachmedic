$(document).on('click','.header-menu__mobile',function() {
	$(this).toggleClass('_active');
	$('.header-menu__list').slideToggle(300);
})

$(document).on('click','.header-search__mobile',function() {
	$(this).toggleClass('_active');
	$('.header-search__wrapper').slideToggle(300);
})
$(document).on('click','.header-search__icon',function() {
	$(this).toggleClass('_active');
	$('.header-search__wrapper').slideToggle(300);
})

$(function() {
	
		$(document).on('click','.header-menu__item._dropdown',function() {
			if($(window).width() < 761) {
				$(this).children('.header-menu-dropdown').css({
					"visibility": "visible",
		    		"opacity": "1",
		    		"display": "block",
		    		"width": "100%",
		    		"padding-left": "0",
		    		"padding-right": "0",
				})
			}
		})
	
})