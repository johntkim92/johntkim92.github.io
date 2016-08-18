$("#header").click(function() {
  alert("this works");
});

// Code addapted from Marius Craciunoiu
// https://medium.com/@mariusc23


var didScroll,
    lastScrollTop = 0,
    delta = 10,
    navbarHeight = $('nav').outerHeight();

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

    // Make sure you scroll past delta.
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    if (st > lastScrollTop && st > navbarHeight){

        // Scroll Down
        $('nav').removeClass('nav-down').addClass('nav-up');
        // console.log('----------nav-up-----------');
        // console.log("Current Scroll " + st);
        // console.log("Last Scroll " + lastScrollTop);

    } else {
        // Scroll Up
            $('nav').removeClass('nav-up').addClass('nav-down');
            // console.log('----------nav-down---------');
            // console.log("Current Scroll " + st);
            // console.log("Last Scroll " + lastScrollTop);
    }

    lastScrollTop = st;
}

//page jump anchor tags
// https://css-tricks.com/snippets/jquery/smooth-scrolling/
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});

// parallax js
$(document).ready(function() {
    $(window).stellar();

    $(function () {
      var $window = $(window),
          win_height_padded = $window.height() *1.1,
          isTouch = Modernizr.touch;
      if (isTouch) {
        $('.revealOnScroll').addClass('animated');
      }

      $window.on('scroll', revealOnScroll);
      function revealOnScroll(){
        var scrolled = $window.scrollTop(), win_height_padded = $window.height() *1.1;
        $('.revealOnScroll:not(.animated)').each(function () {
          var $this = $(this), offsetTop = $this.offset().top;
          if(scrolled + win_height_padded > offsetTop) {
            if ($this.data('timeout')) {
              window.setTimeout(function() {
                $this.addClass('animated ' + $this.data('animation'));
              }, parseInt($this.data('timeout'), 10));
            } else {
              $this.addClass('animated ' + $this.data('animation'));
            }
          }
      });
      $('.revealOnScroll.animated').each(function(index) {
        var $this = $(this), offsetTop = $this.offset().top;
        if (scrolled + win_height_padded < offsetTop) {
          $(this).removeClass('animated fadeInUp fadeInDown fadeInLeft fadeInRight zoomInDown slideInUp slideInDown slideInLeft slideInRight bounce bounceInRight bounceInLeft');
        }
      });
    }
    revealOnScroll();
  });
});
