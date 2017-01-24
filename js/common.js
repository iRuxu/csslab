jQuery(function($){

	//侧边栏
	var fnbook_i = $("#m-sidebar-list li"),
		fnbook_c = $("#m-content-list .m-content-list-item");

	fnbook_i.each(function(){
		if($(this).children('a').length == 0){
			$(this)
			.wrapInner('<a></a>')
			.find('a')
			.attr('href',function(){return "#"+$(this).text()})
			.attr('target','_self')
		}
	})
	fnbook_c
		.attr('id',function(){
			return $(this).find('h3').children('b').text()
		})
	fnbook_i.on('click',function(){
		//自身样式
		fnbook_i.removeClass('current')
		$(this).addClass('current')
		//目标样式
		var index = $(this).index('#m-sidebar-list li')
		fnbook_c.eq(index).addClass('active')
		var t = setTimeout(function(){
			fnbook_c.eq(index).removeClass('active')
			clearTimeout(t)
		},1000)
	})

});