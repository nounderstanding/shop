$(function(){
	//隐藏订单
//	$('.hide_order p').click(function(){
//		if(confirm("隐藏的订单不在用户中心显示，但不影响正常配送，请放心使用！确认要隐藏吗？"))
//		 {
//		 	window.location.href="my.html";
//		 }
//	})
	//点击去支付，出现支付方式
	$('.pay_gogo').click(function(){
		$('.pay_style_select_box').fadeIn();
	})
	//点击取消，支付方式消失
	$('.cancel').click(function(){
		$('.pay_style_select_box').fadeOut();
	})
//	//判断如果是待付款，则出现去支付，如果是取消订单则出现去付款的提示
//	if($(".state").text()=="交易取消"){
//		$('.hide_order').fadeIn();
//		$('.pay_or_cancel').fadeOut();
//	}else if($(".state").text()=="待付款"){
//		$('.hide_order').fadeOut();
//		$('.pay_or_cancel').fadeIn();
//	}
})

