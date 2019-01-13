<template>
	<!--我的收藏-->
	<div id="shoucang" class="hello">
		<header class="collHeader">
			<router-link to="/" tag="span">
				<mt-button icon="back" @click="back()">返回</mt-button>
			</router-link>
			<router-link to="/collectAll" tag="span">所有收藏</router-link>
			<router-link to="/collectAlbum" tag='span'>我的专辑</router-link>
		</header>

		<section>
			<router-view @toparent="getdata"></router-view>
		</section>

		<footer>

		</footer>
	</div>
</template>

<script>
	export default {
		name: 'Collect',
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
	header.collHeader button{
		position: absolute;
		left: 5px;
		top: 0;
		height: 40px;
		font-size: 14px;
		background: none;
		padding: 0 5px;
		box-shadow: none;
	}
</style>