<template>
    <div id="tmpl">
        <div class="title">
		   <h4 v-text="info.title"></h4>
		   <p>{{ info.add_time | datefmt('YYYY-MM-DD') }}  {{info.click}}次浏览</p>
	   </div>
		<div id="content" v-html="info.content" ></div>

		<!-- 2.实现品论组件 -->
		<comment :id="id"></comment>
    </div>

    
</template>

<script>
	import { Toast } from 'mint-ui';
	import common from '../../kits/common.js';
	import comment from '../subcom/comment.vue';
	export default {
		components:{
			comment
		},
		data(){
			return{
				id:0,
				info:{

				}

			}
		},
		created(){
			this.id = this.$route.params.id;
			this.getinfo();
		},
		methods:{
			getinfo(){
				// 确定url
				var url = common.apidomain+"/api/getnew/"+this.id;
				this.$http.get(url).then(function(res){
					var data = res.body;
					if(data.status != 0){
						Toast(data.message);
						return;
					}
					this.info = data.message[0];
					console.log(data.message);
				})
			}
		}
	}
</script>

<style scoped>
.title h4{
		color: #0094ff;
	}
.title p{
		color:rgba(0,0,0,0.5);
}

.title,#content{
	padding: 5px;
}

</style>
