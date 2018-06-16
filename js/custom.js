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

