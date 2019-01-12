<template>
	<!--新增关注-->
	<div id="">
		<mt-header title="新增关注" style="background: #F8F8F8;color: #101010;">
			  <router-link to="/news" slot="left">
			    <mt-button icon="back" @click="back()">返回</mt-button>
			  </router-link>
		</mt-header>
		
		<section>
			<div class="tops">
				<mt-cell >
					<div class="yonghu" slot="title" style="height: 68px;line-height: 24px;">
					 	<img slot="icon" src="../../build/logo.png" width="40" height="40" style="display: inline-block;border-radius: 50%;margin-top: 15px;">
						<div class="">
							<p>是三三啊  开始关注你了</p>
							<p>今天&nbsp;&nbsp;11:20</p>
						</div>							 	
					</div>
					<mt-button size="small" style="width: 80px;height: 20px;">关注</mt-button>
				</mt-cell>
				
				<mt-cell >
					<div class="yonghu" slot="title" style="height: 68px;line-height: 24px;">
					 	<img slot="icon" src="../../build/logo.png" width="40" height="40" style="display: inline-block;border-radius: 50%;margin-top: 15px;">
						<div class="">
							<p>是思思啊  开始关注你了</p>
							<p>今天&nbsp;&nbsp;11:20</p>
						</div>							 	
					</div>
					<mt-button size="small" style="width: 80px;height: 20px;">关注</mt-button>
				</mt-cell>
			</div>
			
		</section>
	</div>
</template>

<script>
	export default {
  name: 'NewsAdd',
  data () {
    return {
      src: '',
    }
  }
}
</script>

<style>
</style>