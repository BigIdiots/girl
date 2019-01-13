<template>
	<!--个人资料-->
	<div class="hello">
		<mt-header title="个人资料" style="background: #F8F8F8;color: #101010;">
			  <router-link to="/" slot="left">
			    <mt-button icon="back" @click="back()" >返回</mt-button>
			  </router-link>
			</mt-header>
			
			
		<section>
			<mt-cell >
					<div class="yonghu" slot="title" style="height: 68px;line-height: 68px;">
					 	<img slot="icon" src="../../build/logo.png" width="40" height="40" style="display: inline-block;border-radius: 50%;margin-top: 15px;">
					</div>
				</mt-cell>
			<mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
			<mt-field label="身份证" placeholder="请输入身份证" type="number" v-model="number"></mt-field>
			<mt-field label="个性签名" placeholder="请输入个性签名" type="text" v-model="text"></mt-field>
			<mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
			<mt-field label="生日" placeholder="请输入生日" type="date" v-model="birthday"></mt-field>
		</section>
	</div>
</template>

<script>
	export default{
		name:'PersonData',
		data(){
			return{
				src:''
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
	
</style>