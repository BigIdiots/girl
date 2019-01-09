<template>
	<!--客服对话-->
	<div class="">
		<mt-header title="新西兰邮政官方旗舰店" style="background: #F8F8F8;color: #101010;">
			  <router-link to="/news" slot="left">
			    <mt-button @click="handleClose" style="width: 37px;height: 30px;background: #E8E8E8;">返回</mt-button>
			  </router-link>
			  <router-link to="#" slot="right">
			    <mt-button @click="handleClose" style="width: 70px;height: 30px;background: #E8E8E8;">分享</mt-button>
			  </router-link>
		</mt-header>
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
</style>