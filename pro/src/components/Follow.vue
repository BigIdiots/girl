<template>
	<div id="">
		<mt-search
		  v-model="value"
		  cancel-text="取消"
		  placeholder="搜索" style="height: 53px;">
		</mt-search>
		
		<figure>
			<router-link to='#'><img src="" /></router-link>
			<p>数据模仿</p>
			<div class="info">
				<img src="*"/>
				<router-link to='#' tag="span" style="width: 41px;height: 30px;background: #8e8e8e;line-height: 30px;text-align: center;margin-left: 154px;">收藏</router-link>
				<router-link to='#' tag="span" style="width: 41px;height: 30px;background: #8e8e8e;line-height: 30px;text-align: center;margin: 0 10px;">评论</router-link>
				<router-link to='#' tag="span" style="width: 41px;height: 30px;background: #8e8e8e;line-height: 30px;text-align: center;">点赞</router-link>
			</div>
		</figure>
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
	
	figure{
		border-bottom: 1px solid #E8E8E8;
	}
	figure img{
		width: 357px;
		height: 230px;
		margin: 20px 10px;
		background-size:100% ;
	}
	figure p{
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