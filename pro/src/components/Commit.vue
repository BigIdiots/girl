<template>
	<div class="benti">
		<figure>
			<router-link to='#'><img src="#" /></router-link>
			<p>数据模仿</p>
			<div class="lietu">
				<img src="*"/>
				<span>pink</span>
				<router-link to='#' tag="span">点赞</router-link>
			</div>
		</figure>
		<figure>
			<router-link to='#'><img src="#" /></router-link>
			<p>数据模仿</p>
			<div class="lietu">
				<img src="*"/>
				<span>pink</span>
				<router-link to='#' tag="span">点赞</router-link>
			</div>
		</figure>
	</div>
</template>

<script>
		export default {
  name: 'Commit',
  data () {
    return {
      src: ''
    }
  }
}
</script>

<style>
	figure{
		width: 175px;
		float: left;
		margin: 13px ;
	}
	figure img{
		width: 175px;
		height: 214px;
		background-size:100%;
	}
	.lietu img{
		width: 34px;
		height: 34px;
		border-radius: 50%;
		overflow: hidden;
	}
</style>