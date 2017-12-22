<template>
    <div id="tmpl">
        <!-- 评论组件 -->
        <div id="postcomment">
        	<h3>提交评论</h3>
        	<p class="p"></p>
        	<textarea placeholder="请输入你要评论的内容" v-model="postcontent"></textarea>
			<mt-button type="primary" size="large" @click="postcomment">发表</mt-button>
        </div>
        <!-- 评论列表 -->
        <div id="list">
        	<h3>评论列表</h3>
        	<div class="p">
        	<div v-for="(item,index) in list">
				<div class="title">
					<span>第{{index + 1}}楼:</span>
					<span>用户：{{item.user_name}}</span>
					<span>发表时间：{{item.add_time | datefmt('YYYY-MM-DD HH:mm:ss')}}</span>
				</div>
				<ul class="mui-table-view">
					<li class="mui-table-view-cell" v-text="item.content"></li>
				</ul>
			</div>
        	</div>
        </div>
    </div>
</template>

<script>
	import common from '../../kits/common.js';
	import { Toast } from 'mint-ui';
	export default {
		data(){
			return{
				pageindex:1,
				postcontent:'',
				list:[]
			}
		},
		props:['id'],
		created(){
			this.getcommentlist(1);
		},
		methods:{ 
				// 2.0获取当前的评论数据  pageindex 代表的是获取那一页的数据 默认是1
				getcommentlist(pageindex){
					pageindex = pageindex | 1;
					// 确定评论数据的url
					var url = common.apidomain+'/api/getcomments/'+this.id+'?pageindex='+pageindex;
					// 发出ajax请求
					this.$http.get(url).then(function(res){
						if(res.body.status !=0){
							Toast(res.body.message);
							return;
						}
						this.list = res.body.message;
					})
				},

			// 1.0评论组件的提交
			postcomment(){


				// 0.0判断用户是否输入内容
				if(this.postcontent.trim().length <=0){
					Toast("你输入的内容为空");
					return;

				}
				// 1.0确定提交的地址
				var url = common.apidomain+"/api/postcomment/"+this.id;
				// 2.0利用post请求提交到指定地址
				// 2.0.1获取用户在文本框中的内容，提交到请求报文体重
				this.$http.post(url,{content:this.postcontent},{emulateJSON:true}).then(function(res){
					Toast(res.body.message);
					// 3.0将评论内容清空
					this.postcontent ="";
				})
			}
		}

	}
</script>

<style scoped>
#postcomment{
	padding:5px;
}
#postcomment p{
	height: 1px;
	width: 100%;
	border-bottom: 1px solid #ccc;
}
	/*2.0 评论列表的样式*/
#list{
	padding: 5px;
}
.title{
	padding: 5px;
	color: #6d6d72;
	font-size: 15px;
	background-color: rgba(0,0,0,0.1);
}

</style>
