<template>
	<div id="">
		<article>
			<router-link to='*'><img src="#" /></router-link>
			<p>数据模仿</p>
			<div class="info">
				<img src="*"/>
				<router-link to='#' tag="span" style="width: 41px;height: 30px;background: #F1F1F1;line-height: 30px;text-align: center;margin-left: 154px;">收藏</router-link>
				<router-link to='#' tag="span" style="width: 41px;height: 30px;background: #F1F1F1;line-height: 30px;text-align: center;margin: 0 10px;">评论</router-link>
				<router-link to='#' tag="span" style="width: 41px;height: 30px;background: #F1F1F1;line-height: 30px;text-align: center;">点赞</router-link>
			</div>
		</article>
	</div>
</template>

<script>
	
	
	export default {
  name: 'Follow',
  data () {
    return {
      src: ''
    }
  }
}
</script>

	

<style>
	article{
		border-bottom: 1px solid #E8E8E8;
		padding: 0 10px;
	}
	article a img{
		width: 100%;
		height: 230px;
		margin: 30px 0 20px 0;
		background-size:100% ;
	}
	article p{
		margin-left: 28px;
	}
	.info{
		display: flex;
		align-items: center;
		
	}
	.info img{
		width: 50px;
		height: 50px;
		border-radius: 50%;
		overflow: hidden;
	}
</style>