<template>
	<!--收到的赞和收藏-->
	<div id="">
		<mt-header title="收到的赞和收藏" style="background: #F8F8F8;color: #101010;">
			  <router-link to="/news" slot="left">
			    <mt-button @click="handleClose" style="width: 30px;height: 30px;background: #fff;">返回</mt-button>
			  </router-link>
			</mt-header>
			
		<section>
			<div class="tops">
				<mt-cell >
					<div class="yonghu" slot="title" style="height: 70px;line-height: 24px;">
					 	<img slot="icon" src="../../build/logo.png" width="40" height="40" style="display: inline-block;border-radius: 50%;margin-top: 15px;">
						<div class="">
							<p>是三三啊  收藏了你的笔记至  个人专辑</p>
							<p>刚刚</p>
						</div>							 	
					</div>
				</mt-cell>
				
				<mt-cell >
					<div class="yonghu" slot="title" style="height: 70px;line-height: 24px;">
					 	<img slot="icon" src="../../build/logo.png" width="40" height="40" style="display: inline-block;border-radius: 50%;margin-top: 15px;">
						<div class="">
							<p>是三三啊  赞了你的笔记至  </p>
							<p>刚刚</p>
						</div>							 	
					</div>
				</mt-cell>
			</div>
		</section>	
	</div>
</template>

<script>
	export default {
  name: 'NewsPraise',
  data () {
    return {
      src: '',
    }
  }
}
</script>

<style>
	
</style>