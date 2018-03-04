$(function(){
	//点击“+添加地址，出现填写地址的页面”
	$('.address_add_logo').click(function(){
		$('.noplace_box').fadeOut();
		$(".write_address").fadeIn();
	})
	//弹出框确认
	var addressSave=$(".address_write_save").html();
	console.log(addressSave);
	$('.button').click(function(){
		$(".confirm_address_box").fadeIn();
	})
	$('.ok').click(function(){
		window.location.href="address.html";
		$(".noplace p").html(addressSave);
		console.log()
	})
	$('.no').click(function(){
		$(".confirm_address_box").fadeOut();
	})

})
