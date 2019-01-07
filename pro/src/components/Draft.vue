<template>
	<!--我的草稿-->
	<div id="">
		<header>
			<mt-header title="我的草稿" style="background: #F8F8F8;color: #101010;">
				<router-link to="#" slot="left">
					<mt-button @click="handleClose" style="width: 30px;height: 30px;background: #E8E8E8;">返回</mt-button>
				</router-link>
			</mt-header>
		</header>

		<section>
			<article>
				<img src="" />
				<div>
					<h2><span>樱桃小丸子</span></h2>
					<time>下午14:54</time>
				</div>
			</article>
		</section>

		<footer></footer>
	</div>
</template>

<script>
	export default {
		name: 'Draft',
		data() {
			return {
				src: '',
			}
		}
	}
</script>

<style>
	section article {
		height: 140px;
		display: flex;
		padding: 9px 7px;
		background:#F8F8F8;
		margin-top: 5px;
	}
	
	section article img {
		width: 100px;
		height: 100px;
		margin: 15px;
	}
	
	section article div {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-left: 10px;
	}
	
	section article h2 {
		font-size: 16px;
		display: flex;
		justify-content: space-between;
		margin-bottom: 10px;
	}
</style>