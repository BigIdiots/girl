<template>
	<div class="benti">
		<ul class="follUl">
			<li class="follList special" v-for="n in 9">
				<router-link to='/*' tag="div">
				<img src="#" style="width: 100%;height: 230px;" />
				</router-link>
				<div class="info">
					<p class="multiLine">今日穿搭。很oversize</p>
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
			</li>
		</ul>
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
	ul.follUl{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	ul.follUl.otherUl{
		padding: 0 18px;
	}
	li.follList {
		width: 100%;
		border-bottom: 1px solid #E8E8E8;
		margin-top: 15px;
		color: #8C8C8C;
	}
	li.follList.special{
		padding: 0 15px;
	}
	li.follList.otherList{
		width: 47%;
		border-bottom: none;
	}
	li.follList:last-child {
		margin-bottom: 8px;
	}
	
	li.follList .info {
		display: flex;
		flex-direction: column;
		padding: 10px;
	}
	
	li.follList .info img {
		border-radius: 50%;
		margin-top: 5px;
		overflow: hidden;
	}
	
	li.follList .info>div {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}
	
	li.follList .info button {
		width: 40px;
		height: 30px;
		font-size: 12px;
		padding: 5px;
		margin-left: 5px;
	}
</style>