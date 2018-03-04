$(function(){
	//清除历史地址
	$('.clear_history').click(function(){
		$('.history_address').fadeOut();
		$('.no_history').fadeIn();
	})
	console.log($(".icon-cha1").length);
	$(".icon-cha1").click(function(){
		if($(".icon-cha1").length>0){
			console.log($(this).length);
			$(this).parent().fadeOut();
		}else if($(".icon-cha1").length<0){
			$('.history_address').fadeOut();
			$('.no_history').fadeIn();
		}
	})
})