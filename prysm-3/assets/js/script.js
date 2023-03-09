/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var Prysm = {
		init: function() {
			this.Basic.init();  
		},

		Basic: {
			init: function() {

				this.preloader();
				this.BackgroundImage();
				this.Animation();
				this.Pr5StickyHeader();
				this.Pr5ScrollTop();
				this.Pr5TestimonialSlider();
				this.Pr5BlogSlider();
				this.Pr5TabScrollBar(); 
				this.Pr5TabSlider();
				this.Pr5VideoPopup();
				
			},
			preloader: function (){
				$(window).on("load", function(){
					$(".loading-preloader").fadeOut();
				});	
				
			},
			BackgroundImage: function (){
				$('[data-background]').each(function() {
					$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
				});
			},
			Animation: function (){
				if($('.wow').length){
					var wow = new WOW(
					{
						boxClass:     'wow',
						animateClass: 'animated',
						offset:       0,
						mobile:       true,
						live:         true
					}
					);
					wow.init();
				}
			},

			Pr5ScrollTop: function (){
				$(window).on("scroll", function(){
					var scrollBarOffset = $(this).scrollTop();
					if( scrollBarOffset > 300 ){
						$(".pr5-scroll-top").fadeIn();
					} else {
						$(".pr5-scroll-top").fadeOut();
					}
				});
				
				$(".pr5-scroll-top").on("click", function(e){
					e.preventDefault();
					$("body,html").animate({
						scrollTop: 0,
					}, 1800); 
				});
			},

			Pr5StickyHeader: function (){
				//Sticky 
				$(window).on("scroll", function(){
					var ScrollBarPos = $(this).scrollTop(); 
					if(ScrollBarPos > 150 ) {
						$(".pr5-header-section").addClass("pr5-header-sticky"); 
					} else {
						$(".pr5-header-section").removeClass("pr5-header-sticky");
					}
				}); 

				//Mobile Menu 
				$(".pr5-mobile-menu-open a").on("click", function(e){
					e.preventDefault(); 
					$(".pr5-mobile-navigation").addClass("pr5-mobile-menu-on");
					$(".pr5-body-overlay").addClass("pr5-body-overlay-on");
				}); 
				
				$(".pr5-mobile-menu-close").on("click", function(e){
					e.preventDefault();
					$(".pr5-mobile-navigation").removeClass("pr5-mobile-menu-on");
					$(".pr5-body-overlay").removeClass("pr5-body-overlay-on");
				});

				$(".pr5-body-overlay").on("click", function(){
					$(".pr5-mobile-navigation").removeClass("pr5-mobile-menu-on");
					$(this).removeClass("pr5-body-overlay-on");
				});

				$(".pr5-mobile-navigation li.has-submenu a").each(function(){
					$(this).on("click", function(){
						$(this).siblings('ul').slideToggle();
					});
				});
			},

			Pr5TestimonialSlider: function (){
				$(".pr5-testimonial-slider").slick({
					slidesToShow: 2, 
					prevArrow: '<button type="button" class="prev-btn"><i class="fas fa-arrow-left"></i></button>',
					nextArrow: '<button type="button" class="next-btn"><i class="fas fa-arrow-right"></i></button>',
					responsive: [
						{
							breakpoint: 768,
							settings: {
								slidesToShow: 1,
							}
						}
					]
				});
			}, 

			Pr5BlogSlider: function (){
				$(".pr5-blog-slider").slick({
					slidesToShow: 3,
					arrows: false, 
					dots: true,
					responsive: [
						{
							breakpoint: 992, 
							settings: {
								slidesToShow: 2,
							}
						}, 
						{
							breakpoint: 740, 
							settings: {
								slidesToShow: 1,
							}
						}
					]
				});
			}, 

			Pr5TabScrollBar: function (){
				$(window).on("load", function(){
					$(".pr5-project-left ul").mCustomScrollbar();
				});

			},

			Pr5TabSlider: function (){
				$(".pr5-tab-content-slider").each(function(){
					var ItemCount = $(this).children().length; 
					if( ItemCount > 2 ) {
						$(this).slick({
							slidesToShow: 2,
							autoplay: true,
							dots: false, 
							arrows: false,
							speed: 1500,
							responsive : [
								{
									breakpoint: 640, 
									settings: {
										slidesToShow: 1,
									}
								}
							]
						});
					}
				});

			}, 
			Pr5VideoPopup: function (){
				$(".pr5-play-btn a").magnificPopup({
					type: 'iframe', 
					iframe: {
						patterns: {
						  youtube: {
							index: 'youtube.com/',
					  
							id: 'v=', 
							src: 'https://www.youtube.com/embed/%id%?autoplay=1'
						  },
					  
						},
						srcAction: 'iframe_src', 
					}
				});
			}

		}
	}
	jQuery(document).ready(function (){
		Prysm.init();
	});

})();