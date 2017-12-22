// 1.0 导入vue核心包
import Vue from 'vue';
// 2.0 导入App.vue的vue对象
import App from './App.vue';

// 3.0 将 vue-route 集成到这个项目中来
import VueRouter from 'vue-router';
// 3.0.1 将 vueRoute 对象绑定到vue对象上
Vue.use(VueRouter);
// 3.0.2 导入路由规则对应的组件对象
import home from './components/Home.vue';
import shopcar from './components/shopcar/car.vue';
import newslist from './components/news/newslist.vue';
import newsinfo from './components/news/newsinfo.vue';


// 3.0.3 定义路由规则
var router1 = new VueRouter({
	linkActiveClass:"mui-active",
	routes : [
		{path : '/home', component: home},
		{path: '/shopcar', component: shopcar},
		{path: '/news/newslist', component: newslist},
		{path: '/news/newsinfo/:id', component: newsinfo}


	]
})

// 4.0 使用mint-ui
import mintUi from 'mint-ui';
import 'mint-ui/lib/style.min.css';
// 4.1 将 mint-ui 对象绑定到vue对象上
Vue.use(mintUi);

// 5.0 使用mui
import '../statics/mui/css/mui.css';

// 6.0导入一个当前系统的全局基本样式
import '../statics/css/site.css';
// 7.0将vue-resource在vue中绑定，自动在vue对象实例上注入一个$http对象就可以使用；
import vueResource from 'vue-resource';
Vue.use(vueResource);

// 导入全局时间过滤器
import moment from 'moment';
// 8.定义全局过滤器
Vue.filter("datefmt",function(input,fmtstring){
	return moment(input).format(fmtstring);

})

// 3.0 利用Vue对象进行解析渲染
new Vue({
	el:'#app',
	router: router1,
	render:c=>c(App)
});
