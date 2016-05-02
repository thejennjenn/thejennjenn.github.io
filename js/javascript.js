$(document).ready(function() {
 // all your jQuery code goes in here!



$(document).ready(function() {
    
    
    $(window).scroll( function(){
    
     
        $('.fadeThis').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
           
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'}, 1000);
                    
            }
            
        }); 
    
    });
    
});




$(document).ready(function(){

/*! Fades in page on load */
$('body').css('display', 'none');
$('body').fadeIn(700);

});



}); 