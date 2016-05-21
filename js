(function($){
  skel
      .breakpoints({
                xlarge: "(max-width: 1680px)",
                large: "(max-width: 1280px)",
                medium: "(max-width: 980px)",
                small: "(max-width: 736px)",
                xsmall: "(max-width: 480px)"
        });
  
  $(function() {
        var     $window = $(window),
                $body = $("body"),
                $wrapper = $("#wrapper"),
                $banner = $("#banner");
    
  
// Disable animations/transition until the page has loaded.
                $body.addClass("is-loading");
                $window.on("load", function(){
                    window.setTimeout(function() {
                        $body.removeClass("is-loading");
                    }, 400);
                })
         });
  


})(jQuery);


 $(".scrolly").click(function(event){
         event.preventDefault();
         //calculate destination place
         var dest=0;
         if($(this.hash).offset().top > $(document).height()-$(window).height()){
              dest=$(document).height()-$(window).height();
         }else{
              dest=$(this.hash).offset().top;
         }
         //go to destination
         $('html,body').animate({scrollTop:dest}, 1500,'swing');
     });
