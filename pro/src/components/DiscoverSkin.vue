<template>
	<div class="benti">
		<figure>
			<router-link to='/follow'><img src="#" /></router-link>
			<p>数据模仿</p>
			<div class="lietu">
				<img src="*"/>
				<p>pink</p>
				<router-link to='#' tag="h5">点赞</router-link>
			</div>
		</figure>
		<figure>
			<router-link to='#'><img src="#" /></router-link>
			<p>数据模仿</p>
			<div class="lietu">
				<img src="*"/>
				<p>pink</p>
				<router-link to='#' tag="h5">点赞</router-link>
			</div>
		</figure>
	</div>
</template>

<script>
	export default {
		  name: 'DiscoverSkin',
		  data () {
		    return {
		      src: ''
		    }
		  }
		}
</script>

<style>
</style>