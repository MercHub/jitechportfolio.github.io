$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#status').fadeOut(); // will first fade out the loading animation 
  $('#preloader').delay(1000).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(500).css({'overflow':'visible'});
});

(function($) {          
    $(document).ready(function(){                    
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 800) {
                $('#menu').fadeIn(1000);
            } else {
                $('#menu').fadeOut(300);
            }
        });
    });
})(jQuery);

$(window).scroll(function(){

	var wScroll = $(this).scrollTop();

	$('.alps').css ({
		'transform' : 'translate(0px, +'+ wScroll /4 +'%)'
	});

	$('img.main').css ({
		'transform' : 'translate(0px, +'+ wScroll /10 +'%)'
	});

	$('.mtZion').css ({
		'transform' : 'translate(0px, -'+ wScroll /120 +'%)'
	});

});




(function($) {          
    $(document).ready(function(){                    
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 800) {
                $('#menu').fadeIn(1000);
            } else {
                $('#menu').fadeOut(300);
            }
        });
    });
})(jQuery);


// auto-collapsing menu
$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});


// nav scrolling effect 

jQuery(document).ready(function(){

	"use strict";

	setBindings();

});


	// clicking menu with delay

	function setBindings () {
		$("header nav ul li a, header a").click(function(e){
			e.preventDefault();
			var sectionID = e.currentTarget.id + "Section";

			$("html body").animate({	
				scrollTop: $("#" + sectionID).offset().top
			},1000)	
		})
	}


jQuery(document).ready(function(){

	"use strict";

			
		 // parallax
		 $(document).ready(function() {
		    $(window).stellar();
		    
		});

		// wow - animate 
              new WOW().init();
      
         // tipper
		 $(".tipped").tooltip({
			direction: "top"
		});

		 


	    $(function() {
		    $('.portfolio_filter li').click(function() {
		        $('.portfolio_filter li').removeClass('active');
		        $(this).addClass('active');
		    });

		});

});
	



//accordion
	$(function(){
		$('.accordion-content').hide(); //hide all contents
			$('.accordion-title:first').next().slideDown(); //show first instance of contents
			
			$('.accordion-title').click(function(){
				if( $(this).next().is(':hidden') ) {
				$('.accordion-title').next().slideUp();
				//triggers the hiding of contents
				$(this).next().slideDown();
				//triggers slide down of contents
				}
				return false; //prevents browser default
			});

	}); 



	$(window).scroll(function(){
			var top = $(window).scrollTop();
			if(top>=700){
				jQuery(document).ready(function(){
					jQuery('.skillbar').each(function(){
						jQuery(this).find('.skillbar-bar-child').animate({
							width:jQuery(this).attr('data-percent')
						},6000);
					});
				});
			}
		}); 



	

	$(document).ready(function(){

		// hide #back-top first
		$("#back-top").hide();
		
		// fade in #back-top
		$(function () {
			$(window).scroll(function () {
				if ($(this).scrollTop() > 3000) {
					$('#back-top').fadeIn();
				} else {
					$('#back-top').fadeOut();
				}
			});

			// scroll body to 0px on click
			$('#back-top a').click(function () {
				$('body,html').animate({
					scrollTop: 0
				}, 2000);
				return false;
			});
		});

	});








