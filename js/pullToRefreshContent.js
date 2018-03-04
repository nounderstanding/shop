refresher.init({

	id: "wrapper",

	pullDownAction: Refresh,

	pullUpAction: Load

});

var generatedCount = 0;

function Refresh() {

//	setTimeout(function() { //模拟网络拥塞，从生产中删除setTimeout！
		//写刷新内容
		myScroll.refresh(); /****记得当你完成时刷新！****/

//	}, 1000);

}

function Load() {
	setTimeout(function() { //模拟网络拥塞，从生产中删除setTimeout！
		//写刷新内容

		myScroll.refresh(); /****记得当你完成时刷新！****/
	}, 1000);

}