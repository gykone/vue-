<template>
    <div id="tmpl">
      <!-- 1.0轮播图 mint-ui 中的mt-swipe 组件？ -->
		<mt-swipe :auto="2000">
		  <!-- <mt-swipe-item>1</mt-swipe-item> -->
		  <mt-swipe-item v-for="item in list">
		  	<img  :src="item.img" >
		  </mt-swipe-item>
		  
		</mt-swipe>
		<!-- 2.0导航 mui的9宫格样式实现导航区域 -->
		<div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/news/newslist">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/photo/photolist">
		                    <span class="mui-icon mui-icon-email"></span>
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/goods/goodslist">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/feedback">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">留言反馈</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/vide">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">视频专区</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/callme">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div></router-link></li>
		            
		        </ul> 
		</div>

    </div>
</template>

<script>
	import { Toast } from 'mint-ui';
	export default {
		data(){
			return{
				list:[
					// {
					// url: "http://www.itcast.cn/subject/phoneweb/index.html",
					// img: "http://ofv795nmp.bkt.clouddn.com/vuelogobanner1.jpg"
					// },
					// {
					// url: "http://www.itcast.cn/subject/phoneweb/index.html",
					// img: "http://ofv795nmp.bkt.clouddn.com/vuelogobanner2-1.jpg"
					// },
					// {
					// url: "http://www.itcast.cn/subject/phoneweb/index.html",
					// img: "http://ofv795nmp.bkt.clouddn.com/vuelogobanner1.jpg"
					// }
				]
			}
		},
		created(){
			// 当页面中的data和methods对象创建完毕以后 ，就会自动调用created
			this.getimgs();
		},
		methods:{
			getimgs(){
				// 实现轮播组件的数据请求
				// 1.0确定url
				var url = 'http://vue.studyit.io/api/getlunbo';
				// 2.0调用$http.getimgs()
				this.$http.get(url).then(function(response){
					var data = response.body;
					if(data.status !=0){
						Toast(data.message);
						return;
					}
					// 如果服务器返回数据正常则赋值给list
					this.list = data.message;
				})
			}
		}
	}
</script>

<style scoped>
.mint-swipe-item{
		background-color: red;
		width: 100%;
		height: 300px;
	}
	.mint-swipe-item img{
		width: 100%;
	}
	.mint-swipe{
		height: 300px;
	}
	.mui-content,.mui-content ul{
		background-color: #fff;
	}
	.mui-grid-view.mui-grid-9 .mui-table-view-cell{
		border-right: 0px;
		border-bottom: 0px;
	}
	.mui-grid-view.mui-grid-9{
		border-top: 0px;
		border-right: 0px;
	}
	.mui-icon-home:before,.mui-icon-email:before,.mui-icon-chatbubble:before,.mui-icon-location:before,.mui-icon-search:before,.mui-icon-phone:before{
		display: inline-block;
		width: 50px;
		height: 50px;
		background-repeat: round;
		content: '';
		
	}
	.mui-icon-home:before{
		background-image:url(../../statics/imgs/1.png);
	}
	.mui-icon-email:before{
		background-image:url(../../statics/imgs/2.png);
	}
	.mui-icon-chatbubble:before{
		background-image:url(../../statics/imgs/3.png);
	}
	.mui-icon-location:before{
		background-image:url(../../statics/imgs/4.png);
	}
	.mui-icon-search:before{
		background-image:url(../../statics/imgs/5.png);
	}
	.mui-icon-phone:before{
		background-image:url(../../statics/imgs/6.png);
	}

</style>
