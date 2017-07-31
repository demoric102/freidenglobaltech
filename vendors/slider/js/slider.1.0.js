$(document).ready(function(){
    // invoke the carousel
    $('#myCarousel').carousel({
       interval:6000
    });

    
    //scroll slides on swipe for touch enabled devices  
    $("#myCarousel").on("touchstart", function(event){

            var yClick = event.originalEvent.touches[0].pageY;
            $(this).one("touchmove", function(event){

            var yMove = event.originalEvent.touches[0].pageY;
            if( Math.floor(yClick - yMove) > 1 ){
                $(".carousel").carousel('next');
            }
            else if( Math.floor(yClick - yMove) < -1 ){
                $(".carousel").carousel('prev');
            }
        });
        $(".carousel").on("touchend", function(){
                $(this).off("touchmove");
        });
    }); 
});
//animated  carousel start
$(document).ready(function(){

    //to add  start animation on load for first slide 
    $(function(){
		$.fn.extend({
			animateCss: function (animationName) {
				var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
				this.addClass('animated ' + animationName).one(animationEnd, function() {
					$(this).removeClass(animationName);
				});
			}
		});
         $('.item1.active img').animateCss('slideInDown');
         $('.item1.active h4').animateCss('slideInUp');
         $('.item1.active h2').animateCss('zoomIn');
         $('.item1.active a').animateCss('zoomIn');
			 
    });
	
    //to start animation on  mousescroll , click and swipe 
    $("#myCarousel").on('slide.bs.carousel', function () {
		$.fn.extend({
			animateCss: function (animationName) {
				var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
				this.addClass('animated ' + animationName).one(animationEnd, function() {
					$(this).removeClass(animationName);
				});
			}
		});
	
       // add animation type  from animate.css on the element which you want to animate 
		$('.item1 img').animateCss('slideInDown');
		$('.item1 h4').animateCss('fadeInUp');
		$('.item1 h2').animateCss('zoomIn');
		$('.item1 a').animateCss('zoomIn');
		
		$('.item2 img').animateCss('zoomIn');
		$('.item2 h4').animateCss('bounce');
		$('.item2 h2').animateCss('swing');
		$('.item2 a').animateCss('shake');
		
		$('.item3 img').animateCss('fadeInLeft');
		$('.item3 h2').animateCss('fadeInDown');
		$('.item3 a').animateCss('fadeInUp');
    });
});