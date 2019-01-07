<template>
	<div class="benti">
		<address style="font-style: normal;">
			<router-link to='#'><img src="#" /></router-link>
			<p>数据模仿</p>
			<div class="lietus">
				<img src="*"/>
				<p>pink</p>
				<router-link to='#' tag="h5">点赞</router-link>
			</div>
		</address>
		<address style="font-style: normal;">
			<router-link to='#'><img src="#" /></router-link>
			<p>数据模仿</p>
			<div class="lietus">
				<img src="*"/>
				<p>pink</p>
				<router-link to='#' tag="h5">点赞</router-link>
			</div>
		</address>
	</div>
</template>

<script>
	export default {
		  name: 'DiscoverVideos',
		  data () {
		    return {
		      src: ''
		    }
		  }
		}
</script>

<style>
	address{
		width: 312px;
		margin: 15px 0;
	}
	address img{
		width: 100%;
		height: 570px;
		background-size: 100%;
	}
	address p{
		margin:12px 0 ;
	}
	.lietus{
		height: 34px;
		display: flex;
		align-items: center;
	}
	.lietus img{
		width: 34px;
		height: 34px;
		border-radius: 50%;
		overflow: hidden;
	}
	.lietus p{
		margin-left:10px ;
		font-size:14px ;
	}
	.lietus h5{
		margin-left: 55px;
	}
</style>