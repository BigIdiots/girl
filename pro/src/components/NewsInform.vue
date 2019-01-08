
<template>
	<!--通知消息-->
	<div id="">
		<mt-header title="通知消息" style="background: #F8F8F8;color: #101010;">
			  <router-link to="/news" slot="left">
			    <mt-button @click="handleClose" style="width: 30px;height: 30px;background: #fff;">返回</mt-button>
			  </router-link>
		</mt-header>
		
		
		<section>
			<div class="tops">
				<mt-cell >
					<div class="yonghu" slot="title" style="height:auto;line-height: 24px;">
					 	<img slot="icon" src="../../build/logo.png" width="40" height="40" style="display: inline-block;border-radius: 50%;margin-top: 15px;">
						<div class="">
							<p>【秋冬穿搭】秋冬温暖清新的流行穿搭分享</p>
							<p>2018-11-01  19:58</p>
							<img src="../../build/logo.png" width="300" height="160" style=""/>
						</div>							 	
					</div>
				</mt-cell>
				
				<mt-cell >
					<div class="yonghu" slot="title" style="height:auto;line-height: 24px;">
					 	<img slot="icon" src="../../build/logo.png" width="40" height="40" style="display: inline-block;border-radius: 50%;margin-top: 15px;">
						<div class="">
							<p>【秋冬穿搭】秋冬温暖清新的流行穿搭分享</p>
							<p>2018-11-01  19:58</p>
							<img src="../../build/logo.png" width="300" height="160" style=""/>
						</div>							 	
					</div>
				</mt-cell>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
  name: 'NewsInform',
  data () {
    return {
      src: '',
    }
  }
}
</script>

<style>
</style>