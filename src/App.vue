<!-- 以后项目的根组件 -->
<template>
<!-- 	<div>
	1.0 利用mint-ui中的header组件四线整个系统的头部
	<mt-header fixed title="Vue项目商场"></mt-header>
	2.0 利用vue-route的<router-view>进行占位
	<router-view></router-view>
	3.0 利用mui中的tabbar组件实现系统的地步
	<nav class="mui-bar mui-bar-tab">
		<a class="mui-tab-item mui-active" href="#tabbar">
			<span class="mui-icon mui-icon-home"></span>
			<span class="mui-tab-label">首页</span>
		</a>
		<a class="mui-tab-item" href="#tabbar-with-chat">
			<span class="mui-icon mui-icon-email"></span>
			<span class="mui-tab-label">消息</span>
		</a>
		<a class="mui-tab-item" href="#tabbar-with-contact">
			<span class="mui-icon mui-icon-contact"><span class="mui-badge">9</span></span>
			<span class="mui-tab-label">通讯录</span>
		</a>
		<a class="mui-tab-item" href="#tabbar-with-map">
			<span class="mui-icon mui-icon-gear"></span>
			<span class="mui-tab-label">设置</span>
		</a>
	</nav>
</div> -->
	<div>
		<!-- 1.利用mint-ui中的header组件 -->
		<mt-header fixed title="Vue商城项目123"></mt-header>
		<!-- 2.0 利用vue-route的<router-view>进行占位 -->
		<router-view></router-view>
		<!-- 3.mui中的tab bar 组件？ -->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-contact"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>

	</div>
</template>

<script>
	// 负责导出 .vue这个组件对象(它本质上是一个Vue对象,所以Vue中该定义的元素都可以使用)
	export default{  // es6的导出对象的写法
		data(){  //等价于 es5的 data:function(){
			return {
				msg :'hello vuejs111111'
			}
		},
		methods:{

		},
		created(){

		}
	}
</script>

<style scoped>
/*当前页面的css样式写到这里，其中scoped表示这个里面写的css代码只是在当前组件页面上有效，不会去影响到其他组件页面*/
	.red{
		color: red;
	}
</style>
