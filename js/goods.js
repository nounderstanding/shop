$(function(){
	//window的高度
	var WH=$(window).height();
	console.log(WH);
	//设置遮罩的高度
	$('.shade').height(WH+600);
	$('#addcar1').click(function(){
		$('.shade').fadeIn(800);
		$('.goods_detailBox').addClass('active');
	})
	//点击第一个立即购买，出现遮罩层
	$('#buy1').click(function(){
		$('.shade').fadeIn(800);
		$('.goods_detailBox').addClass('active');
	})
	//加入购物车，购物车显示加入个数。
	var countAddcar=Number($('.number_addcar').text());
	$('#addcar2').click(function(){
		var addcarNumbox=Number($(".mui-input-numbox").val());
		countAddcar+=addcarNumbox;
		$('.prompt_addcar').fadeIn(800,function(){
			$(this).fadeOut(2000);
		});
		$('.number_addcar').fadeIn(800).text(countAddcar);
		$('.shade').fadeOut(800);
		$(".mui-input-numbox").val(1);
	})
	//点击退出，遮罩层消失
	$('.exit').click(function(){
		$('.shade').fadeOut(800);
		$('.goods_detailBox').removeClass('active');
	})
	//顶部tab交换(商品 详情 评价)
	$(".mui-title a").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	})
	//点击商品，在商品上方加44px的padding值
	$(".mui-title a").eq(0).click(function(){
		$('a[name="product"]').css("padding-top","44px");
	})
	//点击详情，在详情上方加44px的padding值
	$(".mui-title a").eq(1).click(function(){
		$('a[name="details"]').css("padding-top","44px");
	})
	//点击评价，在评价上方加44px的padding值
	$(".mui-title a").eq(2).click(function(){
		$('a[name="evaluation"]').css("padding-top","44px");
	})
	//点击查看更多评价，使得顶部的评价加上class="active"的值。
	$(".see_more").click(function(){
		$(".mui-title a").eq(2).addClass("active").siblings().removeClass("active");
	})
	//当页面滚动到相应的位置，tab样式相应改变(基于class为line的位置判断)
	$(window).scroll(function(){
		var lineH_2=$(".line").eq(1).offset().top;
		var lineH_3=$(".line").eq(2).offset().top;
		var lineH_4=$(".line").eq(3).offset().top;
		console.log(lineH_2);
		console.log(lineH_3);
		console.log(lineH_4);
		if($(window).scrollTop()<=lineH_2){
			$(".mui-title a").eq(0).addClass("active").siblings().removeClass("active");
		}else if($(window).scrollTop()>=lineH_2&&$(window).scrollTop()<lineH_3){
			$(".mui-title a").eq(1).addClass("active").siblings().removeClass("active");
		}else if($(window).scrollTop()>=lineH_3&&$(window).scrollTop()<lineH_4){
			$(".mui-title a").eq(2).addClass("active").siblings().removeClass("active");
		}
	})
})
