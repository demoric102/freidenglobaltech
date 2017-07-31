;(function($) {
    "use strict"; 
    
    //* menuBg
    function menuBg(){
        if ( $('.navbar.navbar-default').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= 120 ) {
                    $(".navbar.navbar-default").addClass("menu_bg");
                } else {
                    $(".navbar.navbar-default").removeClass("menu_bg");
                }
            });
        };
    };
    
    //* Body Scroll Animation
    function bodyScrollAnimation() {
        var scrollAnimate = $('body').data('scroll-animation');
        if($(window).width()>768){
            new WOW({
                animateClass: 'animated', 
                offset: 100, 
                mobile: false, 
                duration: 1000,
            }).init()
        }
    } 
    
    //* counterUp JS
    function counterUp(){
        if ( $('.counter').length ){ 
            $('.counter').counterUp({
                delay: 10,
                time: 400
            });
        }
    }
    
    //* MixItUp Js 
     function mixIt_Up(){
        if ( $('.gallery_item').length ){ 
            $('ul.tabs').addClass('active').find('> li:eq(0)').addClass('current'); 
                $('ul.tabs li a').on('click', function (g) { 
                var tab = $(this).closest('body'), 
                index = $(this).closest('li').index(); 
                tab.find('ul.tabs > li').removeClass('current');
                $(this).closest('li').addClass('current'); 
                tab.find('.tab_content').find('li.tabs_item').not('li.tabs_item:eq(' + index + ')').slideUp();
                tab.find('.tab_content').find('li.tabs_item:eq(' + index + ')').slideDown(); 
                g.preventDefault();
            } );
        }
    } 
    
    //* owlCarousel JS
    function owlCarousel(){
        if ( $('.project_carousel').length ){ 
            $('.project_carousel').owlCarousel({
                loop:true,
                autoplay:false,
                margin:50, 
                items:1,
                stagePadding: 450, 
                smartSpeed: 1000,
                center: true, 
                responsiveClass:true,
                responsive:{
                    0:{ 
                        stagePadding:0, 
                        margin:0, 
                    },
                    600:{ 
                        stagePadding: 50, 
                        margin:20, 
                    },
                    1000:{ 
                        stagePadding: 150, 
                        margin:30, 
                    },
                    1300:{ 
                        stagePadding: 300, 
                    },
                    1500:{ 
                        stagePadding: 450, 
                    }
                }
            })
        }
    } 
    
    //* Testimonials JS
    function clientTestimonials(){
        if ( $('.client_slider').length ){ 
            $('.client_slider').owlCarousel({
                loop:true,
                autoplay: true,
                margin:0, 
                items:1, 
                smartSpeed: 1000,   
            });
        };
    };
    
    //* our_news JS
    function our_news(){
        if ( $('.our_news').length ){ 
            $('.our_news').owlCarousel({
                loop:true,
                autoplay:true,
                margin:50, 
                items:2, 
                smartSpeed: 1000, 
                responsiveClass:true,
                responsive:{
                    0:{ 
                        items: 1, 
                        margin:0, 
                    },
                    700:{ 
                        items: 2, 
                        margin:0, 
                    },
                }
            });
        };
    };
    
    //* Client Logo JS
    function clientLogo(){
        if ( $('.client_logo').length ){ 
            $('.client_logo').owlCarousel({
                loop:true,
                autoplay: false,
                margin:0, 
                items:4,  
                responsiveClass:true,
                responsive:{
                    0:{ 
                        items: 1, 
                        margin:0, 
                    },
                    360:{ 
                        items: 2, 
                        margin:50, 
                    },
                    500:{ 
                        items: 3, 
                        margin:90, 
                    },
                    900:{ 
                        items: 4,  
                    },
                }
            });
        };
    };
    
    //* blogIsotope
    function blogIsotope(){
        if( $('#projects_element, .blog_masonary').length ){
            $('#projects_element').imagesLoaded(function(){
                $('#projects_element').isotope({
                    itemSelector: '.project_item', 
                    layoutMode: 'masonry', 
                    masonry: {
                        columnWidth: ".grid-sizer"
                    }            
                })
            });
            
            // Activate isotope in container
            $("#masonari_blog").imagesLoaded( function() {
                $("#masonari_blog").isotope({
                    itemSelector: ".blog_item",
                    layoutMode: 'masonry', 
                }); 
            }); 
             
            // Add isotope click function
            $("#projects_filters li").on('click',function(){
                $("#projects_filters li").removeClass("active");
                $(this).addClass("active");

                var selector = $(this).attr("data-filter");
                $("#projects_element").isotope({
                    filter: selector,   
                });
                return false;
            });
        }
    }
    
    // Preloader JS
    function preloader(){
        if( $('.preloader').length ){
            $(window).on('load', function() {
                $('.preloader').fadeOut();
                $('.preloader').delay(50).fadeOut('slow');  
            })   
        }
    }
    
     
    /*Function Calls*/  
    menuBg ();
    bodyScrollAnimation();
    counterUp ();
    mixIt_Up();
    owlCarousel ();
    clientTestimonials();
    our_news();
    clientLogo();
    blogIsotope ();
    preloader ();
})(jQuery);