(function($) {

 "use strict"

	

// OWL Carousel

	$("#callto").owlCarousel({

		items : 1,

		lazyLoad : true,

		navigation : false,

		autoPlay: true

    });

	$("#owl-testimonial").owlCarousel({

		items : 1,

		lazyLoad : true,

		navigation : false,

		autoPlay: true,

                pagination: false,

                singleItem:true

    });



	$("#owl-testimonial-widget, #owl-blog").owlCarousel({

		items : 1,

		lazyLoad : true,

		navigation : true,

		pagination : false,

		autoPlay: false

    });

	

	$("#owl_blog_three_line, #owl_portfolio_two_line, #owl_blog_two_line").owlCarousel({

		items : 2,

		lazyLoad : true,

		navigation : true,

		pagination : false,

		autoPlay: true

    });



	$("#owl_shop_carousel, #owl_shop_carousel_1").owlCarousel({

		items : 3,

		lazyLoad : true,

		navigation : true,

		pagination : false,

		autoPlay: true

    });

	

	$("#services").owlCarousel({

		items : 3,

		lazyLoad : true,

		navigation : false,

		pagination : true,

		autoPlay: true

    });

	

	$(".buddy_carousel").owlCarousel({

		items : 9,

		lazyLoad : true,

		navigation : false,

		pagination : true,

		autoPlay: true

    });

	



	$('.buddy_tooltip').popover({

		container: '.buddy_carousel, .buddy_members'

	});

		

// Parallax

	$(window).bind('body', function() {

		parallaxInit();

	});

	function parallaxInit() {

		$('#one-parallax').parallax("30%", 0.1);

                $('#one-parallax-count').parallax("30%", 0.1);

                $('#one-parallax-1').parallax("30%", 0.1);

                $('#one-parallax-2').parallax("30%", 0.1);

                $('#one-parallax-3').parallax("30%", 0.1);

                $('#one-parallax-4').parallax("30%", 0.1);

                $('#one-parallax-5').parallax("30%", 0.1);

                $('#one-parallax-6').parallax("30%", 0.1);

                $('#one-parallax-7').parallax("30%", 0.1);

		$('#two-parallax').parallax("30%", 0.1);

		$('#three-parallax').parallax("30%", 0.1);

		$('#four-parallax').parallax("30%", 0.4);

		$('#five-parallax').parallax("30%", 0.4);

		$('#six-parallax').parallax("30%", 0.4);

		$('#seven-parallax').parallax("30%", 0.4);

	}



 

// Fun Facts

	function count($this){

		var current = parseInt($this.html(), 10);

		current = current + 1; /* Where 50 is increment */

		

		$this.html(++current);

			if(current > $this.data('count')){

				$this.html($this.data('count'));

			} else {    

				setTimeout(function(){count($this)}, 50);

			}

		}        

		

		$(".stat-count").each(function() {

		  $(this).data('count', parseInt($(this).html(), 10));

		  $(this).html('0');

		  count($(this));

	});

	

// WOW

	new WOW(

		{ offset: 300 }

	).init();

		

// DM Top

	jQuery(window).scroll(function(){

		if (jQuery(this).scrollTop() > 1) {

			jQuery('.dmtop').css({bottom:"25px"});

		} else {

			jQuery('.dmtop').css({bottom:"-100px"});

		}

	});

	jQuery('.dmtop').click(function(){

		jQuery('html, body').animate({scrollTop: '0px'}, 800);

		return false;

	});

// DM Bottom

	jQuery(window).scroll(function(){

		if (jQuery(this).scrollTop() > 1) {

			jQuery('.dmtopd').css({bottom:"-100px"});

		} else {

			jQuery('.dmtopd').css({bottom:"25px"});

		}

	});

	jQuery('.dmtopd').click(function(){

                var p = jQuery( ".our-services-ig:first" );                

                var position = p.position(); 

                var top = window.innerHeight+50;

                if (position !== undefined){

                    top = position.top; 

                }

                jQuery('html, body').animate({scrollTop: top+'px'}, 800);

		return false;

	});

	

// Rotate Text

	$(".rotate").textrotator({

		animation: "flipUp",

		speed: 2300

	});





	

// TOOLTIP

    $('.social-icons, .bs-example-tooltips').tooltip({

      selector: "[data-toggle=tooltip]",

      container: "body"

    })

	

// Accordion Toggle Items

   var iconOpen = 'fa fa-minus',

        iconClose = 'fa fa-plus';



    $(document).on('show.bs.collapse hide.bs.collapse', '.accordion', function (e) {

        var $target = $(e.target)

          $target.siblings('.accordion-heading')

          .find('em').toggleClass(iconOpen + ' ' + iconClose);

          if(e.type == 'show')

              $target.prev('.accordion-heading').find('.accordion-toggle').addClass('active');

          if(e.type == 'hide')

              $(this).find('.accordion-toggle').not($target).removeClass('active');

    });



// Target your .container, .wrapper, .post, etc.

    $("body").fitVids();

    $(".nav-inf .expanded a").prop("href","#")

	

})(jQuery);



 