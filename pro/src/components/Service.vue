<template>
	<!--客服中心-->
	<div class="services">
		<header>
			<mt-header title="客服中心" style="background: #F8F8F8;color: #101010;">
			  <router-link to="#" slot="left">
			    <mt-button @click="handleClose" style="width: 30px;height: 30px;background: #E8E8E8;">返回</mt-button>
			  </router-link>
			</mt-header>
		</header>
		<img src="../../build/logo.png" width="100%" height="185"/>
		<mt-navbar v-model="active" style="background: #F8F8F8;">
			<mt-tab-item id="shop">商城问题</mt-tab-item>
			<mt-tab-item id="community">社区问题</mt-tab-item>
		</mt-navbar>
		
		<section>
			
		</section>
		
		<footer>
			
		</footer>
	</div>
</template>

<script>
</script>

<style>
</style>