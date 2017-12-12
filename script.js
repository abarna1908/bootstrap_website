$(document).ready(function(){ 
     $('#cHeading').hide(0).delay(500).fadeIn(1000);
     $('#cPara').hide(0).delay(1500).fadeIn(1000);
     $('.nav').localScroll({duration:800});
    
   var scroll_start = 0;
   var startchange = $('#about-us');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
       var b=document.getElementsByClassName("navbar-toggle");
           if(!isvisible(b[0])){
      scroll_start = $(this).scrollTop();
       
      if(scroll_start < offset.top) {
          
          $(".navbar-default").css('background-color', 'rgba(0, 0, 0, 0)');
       } else {
          
          $('.navbar-default').css('background-color', 'rgba(0, 0, 0, 0.9)');
       }
           }
   });
    }
    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        if(value == "All")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else{
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
        }
    });
   
});
function isvisible(obj) {
  return obj.offsetWidth > 0 && obj.offsetHeight > 0;
}
