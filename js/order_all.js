$(function(){
	$(".order_status li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".order_style").eq($(this).index()).addClass("active").siblings().removeClass("active");
	})
})
