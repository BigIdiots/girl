<template>
	<div class="benti">
		<figure>
			<router-link to='/#'><img src="#" /></router-link>
			<p>数据模仿ddddddddddddddddddasdsaasasdadddddddddddddddddd</p>
			<div class="lietu">
				<img src="*"/>
				<span>pink</span>
				<router-link to='#' tag="h5">点赞</router-link>
			</div>
		</figure>
		<figure>
			<router-link to='/#'><img src="#" /></router-link>
			<p>数据模仿ddddddddddddddddddasdsaasasdadddddddddddddddddd</p>
			<div class="lietu">
				<img src="*"/>
				<span>pink</span>
				<router-link to='#' tag="h5">点赞</router-link>
			</div>
		</figure>
		<figure>
			<router-link to='/#'><img src="#" /></router-link>
			<p>数据模仿</p>
			<div class="lietu">
				<img src="*"/>
				<span>pink</span>
				<router-link to='#' tag="h5">点赞</router-link>
			</div>
		</figure>
		<figure>
			<router-link to='/#'><img src="#" /></router-link>
			<p>数据模仿</p>
			<div class="lietu">
				<img src="*"/>
				<span>pink</span>
				<router-link to='#' tag="h5">点赞</router-link>
			</div>
		</figure>
	</div>
</template>

<script>
		export default {
		  name: 'DiscoverCommit',
		  data () {
		    return {
		      src: ''
		    }
		  }
		}
</script>

<style>
	.benti{
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
	figure{
		width: 156px;
		/*float: left;*/
		margin: 15px 6px;

	}
	figure img{
		width: 100%;
		height: 214px;
		background-size:100%;
	}
	figure p{
		margin:12px 0 ;
		width: 147px;
		 word-wrap:break-word;
    	word-break:break-all;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		text-overflow: ellipsis;
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
	.lietu span{
		margin-left:10px ;
		font-size:14px ;
	}
	.lietu h5{
		margin-left: 55px;
	}
</style>