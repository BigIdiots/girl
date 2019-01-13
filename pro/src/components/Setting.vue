<template>
	<!--设置-->
	<div class="hello">
		<mt-header title="设置" style="background: #F8F8F8;color: #101010;">
			  <router-link to="/" slot="left">
			    <mt-button @click="back()" style="width: 30px;height: 30px;background: #fff;">返回</mt-button>
			  </router-link>
		</mt-header>
		
		<section>
			<div class="setting_a">
				<mt-cell
				  title="个人资料"
				  to="/personData"
				  is-link
				  >
				</mt-cell>
				
				<mt-cell
				  title="账号与安全"
				  to="#"
				  is-link
				  >
				</mt-cell>
			</div>
		</section>
		
	</div>
</template>

<script>
	export default{
		name:'Setting',
		data(){
			return{
				src:'',
			}
		},
		methods:{
		  	back(){
		  		this.$router.go(-1);
		  	}
		  }
	}
</script>

<style>
	.setting_a{
		margin: 12px 10px 0 12px;
		border: 1px solid #E8E8E8;
	}
</style>