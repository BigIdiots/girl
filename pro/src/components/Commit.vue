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
		width: 156px;
		float: left;
		margin: 13px ;
	}
	figure img{
		width: 168px;
		height: 214px;
		background-size:100%;
	}
	.lietu{
		height: 34px;
		display: flex;
		align-items: center;
	}
	.lietu img{
		width: 34px;
		height: 34px;
		border-radius: 50%;
		overflow: hidden;
	}
	.lietu p{
		margin-left:10px ;
		font-size:14px ;
	}
	.lietu h5{
		margin-left: 20px;
	}
</style>