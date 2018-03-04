$(function() {
	//接收json格式的图片地址
	var jsonImg={"img":["img/goods/grape1.jpg", "img/goods/grape3.jpg", "img/goods/grape4.jpg", "img/goods/grape5.jpg"]}
	var img = jsonImg.img;
	//轮播图前半段代码
	var carouse1 = '<div class="mui-slider-item"><a href="#"><img src="';
	//轮播图后半段代码
	var carouse2 = '" data-preview-src="" data-preview-group="1"></a></div>';
	//轮播图循环小点HTML片段
	var carousePoint = '<div class="mui-indicator"></div>'
	var str = "";
	$.each(img, function(index, value) {
		str += carouse1 + value + carouse2;
	});
	$(".mui-slider-group1").append(str);
	var str1 = "";
	$.each(img, function(index, value) {
		str1 += carousePoint;
	})
	$(".mui-slider-goods").append(str1);
	$(".mui-indicator").eq(0).addClass("mui-active");
})