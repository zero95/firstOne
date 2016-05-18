// 引入模板
var myTpl = require('../tpl/my.string');

// 定义一个视图
SPA.defineView('my', {
  // 将模板写在body里
  html: myTpl,

  plugins: [
    'delegated'
  ],

bindEvents:{
		beforeShow:function(){
			//保存视图对象
			var that = this;
			//获得avalon的vm
			//var vm = that.getVM();
		}
	}
});