<template>
	<!--私信-->
	<div class="">
		<mt-header title="私信" style="background: #F8F8F8;color: #101010;">
			  <router-link to="/news" slot="left">
			    <mt-button icon="back" @click="back()">返回</mt-button>
			  </router-link>
			  <router-link to="#" slot="right">
			    <mt-button  @click="back">发起私信</mt-button>
			  </router-link>
		</mt-header>
		
		<section>
				<mt-cell class="topss">
					<div class="yonghu" slot="title" style="height: 72px;line-height: 24px;" >
					 	<img slot="icon" src="../../build/logo.png" width="40" height="40" style="display: inline-block;border-radius: 50%;margin-top: 15px;">
						<div class="">
							<p>陌生人消息</p>
							<p>是思思啊:<span>在吗？</span></p>
						</div>							 	
					</div>
				</mt-cell>
			
				<mt-cell class="topss">
					<div class="yonghu" slot="title" style="height: 72px;line-height: 24px;" >
					 	<img slot="icon" src="../../build/logo.png" width="40" height="40" style="display: inline-block;border-radius: 50%;margin-top: 15px;">
						<div class="">
							<p>陌生人消息</p>
							<p>是思思啊:<span>在吗？</span></p>
						</div>							 	
					</div>
				</mt-cell>
		</section>
	</div>
</template>

<script>
	export default {
  name: 'NewsPrivate',
  data () {
    return {
      src: '',
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
	.topss{
		margin-top: 10px;
	}
</style>