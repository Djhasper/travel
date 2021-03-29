new Swiper('.reviews__slider', {
	navigation: {
		nextEl: '.reviews-arrow-next',
		prevEl: '.reviews-arrow-prev'
	},
	pagination: {
		el: '.reviews__pagination',
		clickable: true,
	},
	// autoHeight: true,
	// loop: true,
	slidesPerView: 3,

	breakpoints: {
		310: {
			slidesPerView : 1,
		},
		599: {
			slidesPerView : 2,
		},
		849: {
			slidesPerView : 3,
		},
	},
});