<template>
	<!--客服对话-->
	<div class="hello">
		<mt-header title="新西兰邮政官方旗舰店" style="background: #F8F8F8;color: #101010;">
			  <router-link to="#" slot="left">
			    <mt-button icon="back" @click="back()">返回</mt-button>
			  </router-link>
			  <router-link to="#" slot="right">
			    <mt-button  @click="back">分享</mt-button>
			  </router-link>
		</mt-header>
		
		<section>
			<router-link to="#" class="Officials" tag="div">
				<p>美白抗皱祛黑头.Swisse平价护肤组合 摩洛哥坚果滋养 眼霜15ML=麦卡卢蜂蜜排毒面膜70g</p>
				<img src="../../build/logo.png" width="130" height="80" />
				<div >
					发送链接
				</div>
			</router-link>
		</section>
		
		<footer>
			<div class="xinxi">
				<input type="text" name="" id="" value="" placeholder="请输入相关问题"/>
			</div>
			<mt-button @click.native="handleClick" style="width: 26px;height: 26px;margin:15px 20px 0 0 ;">
				<img src="../../build/logo.png" width="23" height="23" />
			</mt-button>
		</footer>
	</div>
</template>

<script>
	export default{
		name:'Official',
		data(){
			return{
				src:''
			}
		}
	}
</script>

<style>
	.Officials{
		border: 1px solid #CCCCCC;
		margin: 100px 6px 0 9px;
		color: #8C8C8C;
		font-size: 14px;
	}
	.Officials img{
		margin-left: 220px;
	}
	.Officials div{
		border-top:1px solid #CCCCCC ;
		text-align: center;
	}
	.xinxi{
		margin-left: 20px;
	}
	.xinxi input{
		width: 290px;
		height: 26px;
		border: 0;
		border-radius: 10px;
	}
</style>