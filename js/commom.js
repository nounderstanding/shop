$(function(){
//	导航条跳转
	$('.mui-control-item').eq(0).click(function(){
		window.location.href="index.html"
	});
	$('.mui-control-item').eq(1).click(function(){
		window.location.href="fruits.html"
	});
	$('.mui-control-item').eq(2).click(function(){
		window.location.href="seafood.html"
	});
	$('.mui-control-item').eq(3).click(function(){
		window.location.href="meat.html"
	});
	$('.mui-control-item').eq(4).click(function(){
		window.location.href="quick_freeze.html"
	});
	$('.mui-control-item').eq(5).click(function(){
		window.location.href="vegetables_eggs.html"
	});
//	当导航条滑动到44px时，搜索和顶部导航固定
	$(window).scroll(function(){
		if($(window).scrollTop()>=44){
			$(".form").addClass("active");
			$(".mui-content").addClass("active");
		}
		if($(window).scrollTop()<44){
			$(".form").removeClass("active");
			$(".mui-content").removeClass("active");
		}
	});
	$("input").keydown(function(event){
		if(event.keyCode==13){
			window.location.href="searching.html";
			var searchContent=$("input").val();
			sessionStorage.setItem("searchContent",searchContent);
		}
	});
	$('.search_logo').click(function(){
		window.location.href="searching.html";
		var searchContent=$("input").val();
		sessionStorage.setItem("searchContent",searchContent);
	});
});
//关于购物车的一切
$(function(){
	var count=0;
	var offset = $("#end").offset(); 
    $(".addcar").click(function(event){ 
        var addcar = $(this); 
        var img = addcar.parent().parent().children('.gs_img').children("img").attr('src'); 
        var flyer = $('<img class="u-flyer" src="'+img+'">'); 
        flyer.fly({ 
            start: { 
                left: event.pageX, //开始位置（必填）#fly元素会被设置成position: fixed 
                top: event.pageY //开始位置（必填） 
            }, 
            end: { 
                left: offset.left+10, //结束位置（必填） 
                top: offset.top+10, //结束位置（必填） 
                width: 0, //结束时宽度 
                height: 0 //结束时高度 
            }, 
            onEnd: function(){ //结束回调 
//              $("#msg").show().animate({width: '160px'}, 200).fadeOut(1000); //提示信息 
                this.destory(); //移除dom 
            } 
        }); 
        console.log(event.pageX);
        console.log(event.pageY);
        //计算进入购物车的数量
        count++;
        if(count>=1){
        	setTimeout(function(){
        	$(".addcar_number").css("display","block");
        	$(".addcar_number").text(count);
        	if(count>=10&&count<=99){
        		$(".addcar_number").addClass("ten")
        	}
        	else if(count>=100){
        		$(".addcar_number").addClass("hundred")
        	}
        	},500)
        }
        console.log(count)
//      var addcarNumber=$(".addcar_number").text();
		localStorage.setItem("addcarNumber",count);
		var addcarGetnumber=localStorage.getItem("addcarNumber");
        var addcarNumber=$(".addcar_number").text(addcarGetnumber);
		
        //阻止事件冒泡
        return false;
    }); 
});