<template>
	<!--评论-->
	<div class="hello">
		<mt-header title="" style="background: #F8F8F8;color: #101010;">
			  <router-link to="/" slot="left">
			    <mt-button icon="back" @click="back()" >返回</mt-button>
			  </router-link>
			</mt-header>
		
		
		<section >
			<mt-cell style="margin-top: 10px;" v-for="n in 3">
					<div class="yonghu" slot="title" style="height: 200px;line-height: 24px;margin-left: 20px;">
					 	<img slot="icon" src="../../build/logo.png" width="60" height="60" style="display: inline-block;border-radius: 50%;margin-top: 15px;">
						<div >
							<p>很好用呀</p>
							<div class="pinglun">
								<p>热心网友：超级好用的</p>
								<p>热心网友：超级好用的</p>
							</div>
						</div>							 	
					</div>
			</mt-cell>
		</section>
	</div>
</template>

<script>
	export default {
		name: 'Review',
		data() {
			return {
				src: ''
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
	section	.yonghu{
		display: flex;
		font-size: 14px;
		color: #888;
	}
	section .yonghu p{
		margin: 5px 0 3px 6px;
	}
	section .yonghu .pinglun{
		border: 1px solid #262626;
		margin-top: 45px;
		padding:26px ;
	}
</style>