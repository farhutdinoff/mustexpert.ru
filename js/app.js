$('.top-banner').slick({
	arrows:false,
	dots: true,
	autoplay: true,
	autoplaySpeed: 5000,
});

$('.biography-slide').slick({
	arrows:true,
	dots: false,
	autoplay: true,
	autoplaySpeed: 5000,
	nextArrow: "<button type='button' class='slick-next'><i class='fas fa-chevron-right'></i></button>",
	prevArrow: "<button type='button' class='slick-prev'><i class='fas fa-chevron-left'></i></button>",
});

$( "#burger-nav" ).click(function() {
  $( ".nav" ).slideToggle( "slow", function() {
    // Animation complete.
  });
});