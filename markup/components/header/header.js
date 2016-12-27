$(document).on('click','.header-menu__mobile',function() {
	$(this).toggleClass('_active');
	$('.header-menu__list').slideToggle(300);
})

$(document).on('click','.header-search__mobile',function() {
	$(this).toggleClass('_active');
	$('.header-search__wrapper').slideToggle(300);
})