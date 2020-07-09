$(document).ready(function(){
	/* 
	*选项卡切换*
	*/
	var $navItems = $(".nav_resumeInfo>a");
	var $articles = $(".mainInfo>article");
	$navItems.bind("click",function(){
		$(this).siblings().addClass("unactive_navItem");
		$(this).siblings().removeClass("active_navItem");
		$($articles[$(this).index()]).siblings().addClass("hide");
		$($articles[$(this).index()]).siblings().removeClass("show");
		
		$($articles[$(this).index()]).removeClass("hide");
		$($articles[$(this).index()]).addClass("show");
		$(this).removeClass("unactive_navItem");
		$(this).addClass("active_navItem");
	});
	
	/*
	*flex布局控制*
	*/
   // 1.获取操作元件
	var $demo_flexLayout=$(".demo_flexLayout");//获取布局演示的盒子
	var $items_demo=$demo_flexLayout.children();//获取布局演示盒子的子元素
	var $flex_direction=$("[name=flex_direction]");//获取方向控制元件
	var $justify_content=$("[name=justify_content]");//获取对齐控制元件(主轴)
	var $align_items=$("[name=align_items]");//获取对齐控制元件（交叉轴）
	var $align_content=$("[name=align_content]");//获取多轴对齐控制元件
	var $flex_wrap=$("[name=flex_wrap]");//获取换行控制元件
	// 2.执行操作元件
	// 主轴方向
	$flex_direction.change(function(){
		$demo_flexLayout.css('flex-direction',$(this).val());//铺排方向控制
		switch($(this).val()){
			case 'row' || 'row-reverse':console.log('row');
			$demo_flexLayout.css('height','20rem');
			break;
			case 'column' || 'column-reverse':console.log('column');
			$demo_flexLayout.css('height','40rem');
			break;
		}
	});
	// 主轴对齐
	$justify_content.change(function(){
		$demo_flexLayout.css('justify-content',$(this).val());//对齐方式控制
	});
	// 换行控制
	$flex_wrap.change(function(){
		if($(this).val()=='nowrap'){
			for (var i=4;i<8;i++){
				$($items_demo[i]).addClass("hide")
				console.log($items_demo[i])
			};
			$demo_flexLayout.css('flex-wrap',$(this).val())
		}else{
			for (var i=4;i<8;i++){
				$($items_demo[i]).removeClass("hide")
				console.log($items_demo[i])
			};
			switch($(this).val()){
				case 'wrap':$demo_flexLayout.css('flex-wrap',$(this).val());
				break;
				case 'wrap-reverse':$demo_flexLayout.css('flex-wrap',$(this).val());
				break;
			}
		}
	})
	// 交叉轴对齐
	$align_items.change(function(){
		$demo_flexLayout.css("align-items",$(this).val());
	})
	// 多轴对齐
	$align_content.change(function(){
		$demo_flexLayout.css("align-content",$(this).val());
	})
	
	/*
	*自我介绍-能力图*
	*/
    // 基于准备好的dom，初始化echarts实例
   var myTechnology = echarts.init(document.getElementById('myTechnology'));
   var myEthic = echarts.init(document.getElementById('myEthic'));
   // 指定图表的配置项和数据
   var option_myTechnology = {
    title: {
        text: '技术能力'
    },
    tooltip: {},
    radar: {
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        indicator: [
            { name: 'HTML5', max: 100},
            { name: 'CSS3', max: 100},
            { name: 'Javascript', max: 100},
            { name: 'jQuery', max: 100},
            { name: 'python', max: 100},
            { name: 'webpack', max: 100}
        ]
    },
    series: [{
        name: 'myTechnology',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [
            {
                value: [82, 80, 86, 78, 60, 30]
            }
        ]
    }]
};
var option_myEthic = option = {
	title: {
	    text: '通识素养'
	},
    xAxis: {
        type: 'value',
    },
    yAxis: {
        type: 'category',
        data: ['学习能力', '沟通能力', '协作能力', '技术热忱', '逻辑演算']
    },
    series: [{
        data: [86, 72, 80, 100, 76],
        type: 'bar'
    }]
};


   // 使用刚指定的配置项和数据显示图表。
   myTechnology.setOption(option_myTechnology);
   myEthic.setOption(option_myEthic)
})