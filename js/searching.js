$(function(){
	//接收首页的搜素信息
	var searchValue=sessionStorage.getItem("searchContent");
	console.log(searchValue);
	$("input").val(searchValue);
	//判断如果没有li产品的话，则出现提示没有此产品
	if($(".searching_box li").length==0){
		$(".no_product").fadeIn();
	}else{
		$(".no_product").fadeOut();
	}
	//点击销量和点击价格
	$(".sales_volume").click(function(){
		$(".sales_price").removeClass("active");
		$(".sales_price i").eq(1).removeClass("active");
		$(".sales_price i").eq(0).removeClass("active");
		$(this).addClass("active");
	})
	$(".sales_price").click(function(){
		$(".sales_volume").removeClass("active");
//		$(".sales_price i").eq(0).addClass("active");
		$(this).addClass("active");
		if($(this).children().eq(0).hasClass("active")){
			$(".sales_price i").eq(0).removeClass("active");
			$(".sales_price i").eq(1).addClass("active");
		}else{
			$(".sales_price i").eq(1).removeClass("active");
			$(".sales_price i").eq(0).addClass("active");
			
		}
	})
})