$(function(){
	$('.shopping_list_li i').click(function(){
		if($(this).hasClass("icon-iconfontwancheng")){
			$(this).removeClass("icon-iconfontwancheng").addClass("icon-01");
		}else{
			$(this).removeClass("icon-01").addClass("icon-iconfontwancheng");
			$(".all_select i").removeClass("icon-01").addClass("icon-iconfontwancheng");
		}
	})
	$(".all_select i").click(function(){
		if($(this).hasClass("icon-iconfontwancheng")){
			$(this).removeClass("icon-iconfontwancheng").addClass("icon-01");
			$('.shopping_list_li i').removeClass("icon-iconfontwancheng").addClass("icon-01");
		}else{
			$(this).removeClass("icon-01").addClass("icon-iconfontwancheng");
			$('.shopping_list_li i').removeClass("icon-01").addClass("icon-iconfontwancheng");
		}
	})
	
})