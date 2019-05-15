
    // Scroll function courtesy of Scott Dowding; http://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling
    
    $(document).ready(function() {
      // Check if element is scrolled into view
      function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
    
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
    
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
      }
      // If element is scrolled into view, fade it in
      $(window).scroll(function() {
        $('.scroll-animations .animated').each(function() {
          if (isScrolledIntoView(this) === true) {
            $(this).addClass('fadeInLeft');
          }
        });
      });
  
      
      // Activate hinge effect when Projects is click in last section
      $('.funky-animations h4').on('click', function() {
        $(this).addClass('animated hinge').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass('animated hinge');
          });
      });
    });


    //after hinge drop, time out to new page but doesn't work yet
$('.pagetransition').click(function(e) {
  e.preventDefault();
  var linkUrl = $(this).attr('href');
  setTimeout(function(url) { window.location = 'projects.html'; }, 3000, linkUrl);
});
