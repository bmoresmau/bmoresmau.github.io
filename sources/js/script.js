$(document).ready(function(){
    $('.anchor-scroll').anchorScroll({
        scrollSpeed: 800, // scroll speed
        offsetTop: 0, // offset for fixed top bars (defaults to 0)
        onScroll: function () { 
          // callback on scroll start
        },
        scrollEnd: function () { 
          // callback on scroll end
        }
    });


    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();
        
        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        
        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('header').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav-up').addClass('nav-down');
            }
        }
        
        lastScrollTop = st;
    }

    window.sr = ScrollReveal({ reset: true });

    sr.reveal('.about-image', { delay: 400 });
    sr.reveal('.presentation', { delay: 700 });
    sr.reveal('.skills', { delay: 1000 });
    sr.reveal('.back', { delay: 500 });
    sr.reveal('.mail', { delay: 300 });
    sr.reveal('.cv', { delay: 400 });
    sr.reveal('.localisation', { delay: 500 });
    sr.reveal('.socialmedia', { delay: 500 });
});