<template>
	<!--我的关注-->
	<div class="cons">
			<mt-header title="我的关注" style="background: #F8F8F8;color: #101010;">
			  <router-link to="#" slot="left">
			    <mt-button icon="blck">返回</mt-button>
			  </router-link>
			</mt-header>
		
		<mt-navbar v-model="active" style="background: #F8F8F8;">
			<mt-tab-item id="1">用户</mt-tab-item>
			<mt-tab-item id="2">商家</mt-tab-item>
			<mt-tab-item id="3">标签</mt-tab-item>
			<mt-tab-item id="4">专辑</mt-tab-item>
		</mt-navbar>
		
		<section>
			<mt-tab-container v-model="active" :swipeable="true">
				<mt-tab-container-item id="1">
						<mt-cell title="你可能感兴趣的人" style="padding: 5px 0;margin-top: 10px;">
							<mt-button size="small" style="width: 80px;height: 20px;">查看更多</mt-button>
						</mt-cell>
						<mt-cell v-for="item in list">
							<div class="yonghu" slot="title">
							 	<img slot="icon" :src="item.img" width="40" height="40" style="display: inline-block;border-radius: 50%;">
								<div class="">
									<p>{{item.name}}</p>
									<p>{{item.duan}}</p>
								</div>							 	
							</div>
							<mt-button size="small" style="width: 80px;height: 20px;">关注</mt-button>
						</mt-cell>
					
						<mt-cell title="我关注的好友" style="font-size: 14px;margin-top: 10px;" >
							<mt-button size="small" style="width: 80px;height: 20px;">查看更多</mt-button>
						</mt-cell>
						<mt-cell v-for="item in list">
							<div class="yonghu" slot="title">
							 	<img slot="icon" :src="item.img" width="40" height="40" style="display: inline-block;border-radius: 50%;">
								<div class="">
									<p>{{item.name}}</p>
									<p>{{item.duan}}</p>
								</div>							 	
							</div>
							<mt-button size="small" style="width: 80px;height: 20px;">关注</mt-button>
						</mt-cell>
				</mt-tab-container-item>
				
				<mt-tab-container-item id="2">
						<mt-cell title="你可能感兴趣的商家" style="padding: 5px 0;margin-top: 10px;">
							<mt-button size="small" style="width: 80px;height: 20px;">查看更多</mt-button>
						</mt-cell>
						<mt-cell v-for="item in list">
							 <div class="yonghu" slot="title" >
							 	<img slot="icon" :src="item.img" width="40" height="40" style="display: inline-block;border-radius: 50%;">
								<div class="">
									<p>{{item.name}}</p>
									<p>{{item.duan}}</p>
								</div>							 	
							</div>
							<mt-button size="small" style="width: 80px;height: 20px;">关注</mt-button>
						</mt-cell>
					
						<mt-cell title="我关注的商家" style="font-size: 14px;margin-top: 10px;">
							<mt-button size="small" style="width: 80px;height: 20px;">查看更多</mt-button>
						</mt-cell>
						<mt-cell>
							 <div class="yonghu" slot="title">
							 	<img slot="icon" src="../../build/logo.png" width="40" height="40" style="display: inline-block;border-radius: 50%;">
								<div class="">
									<p>ck兒</p>
									<p>你可能感兴趣的商家</p>
								</div>							 	
							</div>
							<mt-button size="small" style="width: 80px;height: 20px;">关注</mt-button>
						</mt-cell>
				</mt-tab-container-item>
				
				<mt-tab-container-item id="3">
						<mt-cell title="你可能感兴趣的标签" style="padding: 5px 0;margin-top: 10px;">
							<mt-button size="small" style="width: 80px;height: 20px;">查看更多</mt-button>
						</mt-cell>
						<mt-cell>
							 <div class="yonghu" slot="title">
							 	<img slot="icon" src="../../build/logo.png" width="40" height="40" style="display: inline-block;border-radius: 50%;">
								<div class="">
									<p>ck兒</p>
									<p>你可能感兴趣的标签</p>
								</div>							 	
							</div>
							<mt-button size="small" style="width: 80px;height: 20px;">关注</mt-button>
						</mt-cell>
					
						<mt-cell title="我关注的标签" style="font-size: 14px;margin-top: 10px;">
							<mt-button size="small" style="width: 80px;height: 20px;">查看更多</mt-button>
						</mt-cell>
						<mt-cell >
							 <div class="yonghu" slot="title">
							 	<img slot="icon" src="../../build/logo.png" width="40" height="40" style="display: inline-block;border-radius: 50%;">
								<div class="">
									<p>ck兒</p>
									<p>你可能感兴趣的标签</p>
								</div>							 	
							</div>
							<mt-button size="small" style="width: 80px;height: 20px;">关注</mt-button>
						</mt-cell>
				</mt-tab-container-item>
				
				<mt-tab-container-item id="4">
					<div class="topse" >
						<mt-button size="small" style="width: 80px;height: 20px;position: absolute;right: 17px;top: 25px;">已关注</mt-button>
						<p>个人专辑</p>
						<p>5篇笔记</p>
						<img src="../../build/logo.png" width="100" height="100" style="display: inline-block;"/>
						<img src="../../build/logo.png" width="100" height="100" style="display: inline-block;"/>
						<div class="">
							<mt-cell title="由hello创建" >
		  						<img slot="icon" src="../../build/logo.png" width="30" height="30" style="display: inline-block;border-radius: 50%;">
							</mt-cell>
						</div>						
					</div>
				</mt-tab-container-item>
			</mt-tab-container>
		</section>
	</div>
</template>

<script>
	
	import Mock from 'mockjs';
	
	var Random=Mock.Random;
	//自定义数据
Random.extend({
    xingzuo: function(date) {
        var constellations = ['你可能感兴趣的']
        return this.pick(constellations)
    }
})
	
	
	Mock.mock('http://www.aaa.com',{
		'users|3':[
			{
				'name':'@cname()',
				'duan':"@xingzuo()",
				"img":"@image('40x40')"
			}
		]
	})
	
	
	export default {
	  name: 'Concern',
	  data () {
	    return {
	      src: '',
	      active:'1',
	      list:[]
	    }
	  },
	  mounted(){
	  		var _this = this
				this.Axios({
					method:'get',
					url:"http://www.aaa.com"
				}).then(function(data){
					console.log(data.data.users)
					var data = data.data.users;
					_this.list=data
				})
		}
	}
</script>

<style>
	.mint-cell{
		background: #F8F8F8;
	}
	.mint-button--default{
		background: #FFFFFF;
	}
	.yonghu{
		display: flex;
		font-size: 14px;
		color: #888;
	}
	.yonghu p{
		margin: 5px 0 3px 6px;
	}
	.topse{
		margin: 8px 0 15px;
		padding-left: 20px;
		background: #F8F8F8;
	}
	.topse p{
		font-size: 14px;
		color: #888;
		margin-bottom: 5px;
	}
</style>