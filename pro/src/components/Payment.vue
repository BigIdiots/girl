<template>
	<!--支付面板-->
	<div class="hello">
		<mt-header title="订单支付" style="background: #F8F8F8;color: #101010;">
			  <router-link to="#" slot="left">
			    <mt-button icon="back" @click="back">返回</mt-button>
			  </router-link>
			</mt-header>
			
		<section>
			
			
		</section>
	</div>
</template>

<script>
	export default {
		name: 'MallSeckill',
		data() {
			return {
				src: '',
			}
		},
		methods: {
			back() {
				this.$router.go(-1);
			}
		}
	}
</script>

<style>
</style>