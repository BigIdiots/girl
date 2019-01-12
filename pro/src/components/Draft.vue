<template>
	<!--我的草稿-->
	<div id="">
			<mt-header title="我的草稿" style="background: #F8F8F8;color: #101010;">
				<router-link to="#" slot="left">
					<mt-button icon="back" @click="back()">返回</mt-button>
				</router-link>
			</mt-header>

		<section>
			<article class="drafts">
				<img src=""  style="width: 100px; height: 100px;margin: 15px;"/>
				<div>
					<h2><span>很可爱</span></h2>
					<time>2017-10-01 14:54:22</time>
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
	section article.drafts{
		height: 140px;
		display: flex;
		padding: 9px 7px;
		background:#F8F8F8;
		margin-top: 5px;
	}
	
	/*section article img {
		width: 100px;
		height: 100px;
		margin: 15px;
	}*/
	
	section article.drafts>div {
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