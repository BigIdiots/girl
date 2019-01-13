<template>
	<div class="hello">
		<mt-header title="我的订单" style="background: #F8F8F8;color: #101010;">
			  <router-link to="/" slot="left">
			    <mt-button icon="back" @click="back()">返回</mt-button>
			  </router-link>
			</mt-header>
		
		<mt-navbar v-model="active">
			<mt-tab-item id="1">全部</mt-tab-item>
			<mt-tab-item id="2">待付款</mt-tab-item>
			<mt-tab-item id="3">待收货</mt-tab-item>
			<mt-tab-item id="4">已完成</mt-tab-item>
			<mt-tab-item id="5">已取消</mt-tab-item>
		</mt-navbar>
		
		<section class="article">
			
				
				
			
		</section>
		
	</div>
	
</template>

<script>
	export default {
		name:'Indent',
     data() {
     return {
       		src:''
     	}
    
     },
    
     }
</script>

<style >
	
</style>