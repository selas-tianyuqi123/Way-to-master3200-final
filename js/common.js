 
 
$(function(){  
   $('.frmenu>li').hover(function(){ 
	  $(this).find('.second').animate({ opacity:'show', height:'show' },100);
//		$(this).find('.frista').addClass('current');
	
	} ,function() {
		$('.second').stop(true,true).hide();
//			$('.frista').removeClass('cue');
		 
	 }).slice(-3,-1).find('.children').addClass('sleft');
	 
	$('.minbox').css('min-height',$(window).height()-108)   
	var url=location.href;
	
	$(".frmenu   li.li1 a").each(function(){  
		console.log(url.substr(url.length-1,1),'9999')
		if(url.substr(url.length-1,1) =='/'){
			url=location.href+'index.html';
			$(this).addClass("cur");
		}else {
			// console.log($(this).attr("href").replace("/",""))
			if(url.lastIndexOf($(this).attr("href").replace("/",""))!=-1){
				$(this).addClass("cur")	
				$(".frmenu   li.li1 a.indexCur").removeClass('cur')
				 
			} 
		}
	
	}); 
 
	
 

    // When you click the jump link, go back to the top of the page
	$("#back-to-top").click(function(){
			//$('body,html').animate({scrollTop:0},1000);
	if ($('html').scrollTop()) {
			$('html').animate({ scrollTop: 0 }, 1000);
			return false;
		}
		$('body').animate({ scrollTop: 0 }, 1000);
				return false;            
		});       
	}); 
  
 
 

 
