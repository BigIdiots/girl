<template>
	<!--私信-->
	<div class="">
		<mt-header title="私信" style="background: #F8F8F8;color: #101010;">
			  <router-link to="/news" slot="left">
			    <mt-button @click="handleClose" style="width: 37px;height: 30px;background: #fff;">返回</mt-button>
			  </router-link>
			  <router-link to="#" slot="right">
			    <mt-button @click="handleClose" style="width: 70px;height: 30px;background: #fff;">发起私信</mt-button>
			  </router-link>
		</mt-header>
		
		<section>
			<div class="topss">
				<mt-cell >
					<router-link to="#" class="yonghu" slot="title" style="height: 105px;line-height: 24px;">
					 	<img slot="icon" src="../../build/logo.png" width="40" height="40" style="display: inline-block;border-radius: 50%;margin-top: 15px;">
						<div class="">
							<p>是三三啊  评论了你的笔记</p>
							<p>刚刚</p>
							<p>嘿嘿嘿</p>
						</div>							 	
					</router-link>
				</mt-cell>
			</div>
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
  }
}
</script>

<style>
	.topss{
		
	}
</style>