// 引入模板
var homeTpl = require('../tpl/home.string');

// 定义一个视图
SPA.defineView('home', {
  // 将模板写在body里
  html: homeTpl,

  plugins: [
    'delegated'
  ],

bindEvents:{
		beforeShow:function(){
			//保存视图对象
			var that = this;
			//获得avalon的vm
			//var vm = that.getVM();
			var mySwiper = new Swiper ('.swiper-container', {
			    autoplay:2000,
			    loop: false,
			    
			    // 分页器
			    pagination: '.swiper-pagination',
			})
		}
	}
});