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
    // $(window).stellar();

    $(window).scroll(function(event) {
      var y = $(this).scrollTop();
      console.log(y);
      if (y >= 750) {
        $('.post').addClass('animated slideInUp');
        console.log("yao")
        console.log(y)
      }
    });
});

// $(document).ready(
//
//   function() {
//
//     $("html").niceScroll({
//         cursorcolor:"rgba(30,30,30,.5)",
//         zindex:999,
//         scrollspeed:100,
//         mousescrollstep:50,
//         cursorborder:"0px solid #fff",
//     });
//
//
//   }
//
// );
