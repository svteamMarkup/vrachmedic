$(document).on('click','.header-menu__mobile',function() {
	$(this).toggleClass('_active');
	$('.header-menu__list').slideToggle(300);
	$('.overlay').toggle();
})
$(document).on('click','.header-search__mobile',function() {
	$(this).toggleClass('_active');
	$('.header-search__wrapper').slideToggle(300);
	$('.overlay').toggle();
})
/*$(document).on('click','.header-search__mobile',function() {
	$(this).toggleClass('_active');
	$('.header-search__wrapper').slideToggle(300);
})*/
$(document).on('click','.header-search__icon',function() {
	$(this).toggleClass('_active');
	$('.header-search__wrapper').slideToggle(300);
})

$(document).on('click','.header-menu__item._dropdown',function() {
	if($(window).width() < 761) {
		$(this).children('.header-menu-dropdown').toggleClass('_active');
	}
})

$(document).on('click','.overlay',function() {
	$(this).toggle();
	$('.header-menu__list').hide();
	$('.header-search__wrapper').hide();
	$('.header-menu__mobile').removeClass('_active');
	$('.header-search__mobile').removeClass('_active');
})