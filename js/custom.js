$(document).ready(function(){
    $('.header').height($(window).height());
})

var $navBar = null;
var $mushrooms = null;

$(document).ready(function() {
    
    $navBar = $(".scrollnav")[0];
    $mushrooms = $("section#mushrooms")[0];

    //$(".navbar").hide(); //Hide the navigation bar first
    if($(window).width() > 768){



    $(window).scroll(function() { //Listen for the window's scroll event
      if ($navBar != undefined && $navBar != null ) {
        if (isScrolledAfterElement($mushrooms)) { //if it has scrolled beyond the #content elment
            $navBar.style.transform = 'translateY(0)';
        } else {
            $navBar.style.transform = 'translateY(-100px)';
        }
      }
    });
  
    //Function that returns true if the window has scrolled beyond the given element
    function isScrolledAfterElement($elem) {
  
      var elemTop = $elem.getBoundingClientRect().top;

      return elemTop < 0;
    }
  } else {
    $navBar.style.transform = 'translateY(0)'}
});

(function($) {
  "use strict"; // Start of use strict



  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

})(jQuery); // End of use strict

$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
          scrollTop: target.offset().top
      }, 1000);
  }
});

$(document).ready(function() {
      var userFeed = new Instafeed({
        get: 'user',
        userId: '4193070',
        accessToken: '4193070.1677ed0.11f382f8b25b47e4810af42cff64e30c',
        resolution: 'standard_resolution',
        template: '<a href="{{link}}" target="_blank" id="{{id}}" class="col-4"><div class="card"><img class="card-img-top" src="{{image}}" alt="Card image cap"><div class="card-body"><p class="card-text">{{caption}}</p></div></div></a>',
        sortBy: 'most-recent',
        limit: 8,
        links: false
      });
      userFeed.run();
    });


// <div class="col-3 gallery"> <a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" class="img-fluid align-center"><span>{{caption}}</span></a></div>'


