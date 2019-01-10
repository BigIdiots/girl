<template>
	<!--我的收藏-->
	<div id="shoucang">
		<header class="header">
			<router-link to="/" tag="em">返回</router-link>
			<router-link to="/collectAll" tag="span" style="margin-left: 65px;">所有收藏</router-link>
			<router-link to="/collectAlbum" tag='span' style="margin-right: 100px;">我的专辑</router-link>
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
		}
	}
</script>

<style>
	#shoucang {
		height: 100vh;
		display: flex;
		flex-direction: column;
	}
	
	header.header{
		position: relative;
		display: flex;
		justify-content: space-between;
		
		height: 50px;
		background: #f1f1f1;
		color: #a1a1a1;
		font-size: 14px;
	}
	
	header>span{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 86px;
		height: 50px;
		font-weight: 900;
	}
	header:hover>span:first-of-type{
		color: #8c8c8c;
	}
	header:hover>span:hover,header>span:first-of-type{
		color: black;
	}
	header em{
		font-style: normal;
		line-height: 50px;
		margin-left: 10px;
	}
	section {
		flex: 1;
		overflow: auto;
	}
</style>