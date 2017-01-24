jQuery(function($){

	//阻止默认行为
	$(".m-note a:not([href^=http])").each(function(){
		$(this).click(function(e){
			e.preventDefault();
		})
	})

	//直接link阻止冒泡
	$(".m-note a[href^='http']").each(function(){
		$(this).attr('target','_blank')
		$(this).click(function(e){
			e.stopPropagation();
		})
	})

	var 
	$note = $("#m-note"),
	$btg = $('h3').add('h4')

	//h3 & 4 Toggle
	$btg.on('click',function(){
		$(this).next('div,ul').slideToggle('slow')
		var status = $(this).children('span').html()
		if(status=='-'){
			$(this).children('span').html('+')}
		else if(status=='+'){
			$(this).children('span').html('-');
		}
	})

	//Tips Layout
	$note.on('mouseover','h4+ul>li',function(e){
		$(this).children('span').css({
				left:e.pageX+12+'px',
				top:e.pageY+8+'px',
				display:'block'
			})
		}).on('mouseout','h4+ul>li',function(){
			$(this).children('span').hide()
		})

	//Snippet Box
	$("#closebox").click(function(){
		$("#snippet").hide()
	})
	
	$note.on('click','h4+ul>li',function(){
		var name = $(this).children('a:first-child').html();
		var info = $(this).children('span').html();
		$("#snippet").show()
		$("#box-title").html(name)
		$("#box").html(info)
	})
});