$(function(){

	

	$('.fancy').fancybox(
		{
    	openEffect	: 'elastic',
    	closeEffect	: 'elastic',

    	helpers : {
    		title : {
    			type : 'inside'
    		}
    	}

    	
 	})

});

$(function(){
   if($(window).width() > '800') {
  $('.bxslider').bxSlider(
      {
       pager:false
      }
    )
}
});



