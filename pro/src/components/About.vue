<template>
	<div id="">
		<div class="mint-searchbar" style="background: #fff;padding: 8px 40px;">
			<router-link to="/search" class="mint-searchbar-inner" style="background: #F1F1F1;">
				<i class="mintui mintui-search"></i>
				<input type="search" placeholder="大家都在搜“玩转春节”" class="mint-searchbar-core" style="background: #F1F1F1;">
			</router-link>
		</div>
		<div class="benti">
			<figure>
				<router-link to='/#'><img src="#" /></router-link>
				<p>数据模仿</p>
				<div class="lietu">
					<img src="*"/>
					<span>pink</span>
					<router-link to='#' tag="h5">点赞</router-link>
				</div>
			</figure>
			<figure>
				<router-link to='/#'><img src="#" /></router-link>
				<p>数据模仿</p>
				<div class="lietu">
					<img src="*"/>
					<span>pink</span>
					<router-link to='#' tag="h5">点赞</router-link>
				</div>
			</figure>
			
		</div>
	</div>
</template>

<script>
	export default {
  name: 'About',
  data () {
    return {
      src: ''
    }
  }
}
</script>

<style>
</style>