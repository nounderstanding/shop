$(function() {
	//接收json格式的图片地址
	var jsonImg={"img":["img/index/banner1.jpg","img/index/banner2.jpg", "img/index/banner3.jpg", "img/index/banner4.jpg", "img/index/banner5.jpg"]}
	var img = jsonImg.img;
	//轮播图第一个节点是最后一张轮播
	var firstImg='<div class="mui-slider-item mui-slider-item-duplicate"><a href="#"><img src="'+img[img.length-1]+'"></a></div>';
	//轮播图前半段代码
	var carouse1 = '<div class="mui-slider-item"><a href="#"><img src="';
	//轮播图后半段代码
	var carouse2 = '" data-preview-src="" data-preview-group="1"></a></div>';
	//轮播图最后一个节点是第一张轮播
	var lastImg='<div class="mui-slider-item mui-slider-item-duplicate"><a href="#"><img src="'+img[0]+'"></a></div>';
	//轮播图循环小点HTML片段
	var carousePoint = '<div class="mui-indicator"></div>';
	//设置一个空的变量值
	var str = "";
	//添加轮播图第一个节点；
	str=firstImg;
	//循环后台给的图片地址，来确定轮播图的个数
	$.each(img, function(index, value) {
		str += carouse1 + value + carouse2;
	});
	//添加轮播图最后一个节点；
	str+=lastImg;
	//为轮播图的父级加上这些代码
	$(".mui-slider-group").append(str);
	//设置一个空的变量值来存储轮播点的代码
	var str1 = "";
	//循环后台给的图片地址，来确定轮播小点的个数
	$.each(img, function(index, value) {
		str1 += carousePoint;
	})
	//为轮播图小点的父级加上这些代码
	$(".mui-slider-indicator-banner").append(str1);
	//为第一个轮播小点添加"mui-active";
	$(".mui-indicator").eq(0).addClass("mui-active");
})