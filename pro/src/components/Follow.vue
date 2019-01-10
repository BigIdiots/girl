<template>
	<div id="">
		<article class="folArt">
			<router-link to='/*' tag="div">
				<img src="#" style="width: 100%;height: 230px;" />
			</router-link>
			<div class="info">
				<p>今日穿搭。很oversize</p>
				<div>
					<img src="*" width="44" height="44" />
					<div>
						<router-link to='#' tag="span">
							<mt-button type="danger">收藏</mt-button>
						</router-link>
						<router-link to='#' tag="span">
							<mt-button type="primary">评论</mt-button>
						</router-link>
						<router-link to='#' tag="span">
							<mt-button type="default">点赞</mt-button>
						</router-link>
					</div>
				</div>
			</div>
		</article>
	</div>
</template>

<script>
	export default {
		name: 'Follow',
		data() {
			return {
				src: ''
			}
		}
	}
</script>

<style>
	article.folArt {
		display: flex;
		flex-direction: column;
		border-bottom: 1px solid #E8E8E8;
		margin-top: 25px;
		padding: 0 10px;
		color: #8C8C8C;
	}
	
	article.folArt:last-child {
		margin-bottom: 8px;
	}
	
	article.folArt .info {
		display: flex;
		flex-direction: column;
		padding: 10px;
	}
	
	article.folArt .info img {
		border-radius: 50%;
		margin-top: 5px;
		overflow: hidden;
	}
	
	article.folArt .info>div {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}
	
	article.folArt .info button {
		width: 40px;
		height: 30px;
		font-size: 12px;
		padding: 5px;
		margin-left: 5px;
	}
</style>