$(document).ready(function() {
  // FULL PAGE PLAGIN INIT
  $('#fullpage').fullpage({
	   anchors: ['about', 'stations', 'crosswalk', 'map', 'manual', 'register'],
		 menu: '#menu',
		 navigation: true,
		 navigationTooltips: ['О проекте', 'Станции', 'Переходы', 'Карта', 'Справочник', 'Регистрация'],
		 responsiveWidth: 1000
  });

  // MAIN MENU TOGGLE
  $('.menu__toggle').click(function() {
    $('.menu__list').toggleClass('menu__list_active');
  });
  $('.menu__link').click(function() {
  	$('.menu__list').removeClass('menu__list_active');
  });

});
