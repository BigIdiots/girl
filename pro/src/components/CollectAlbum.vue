<template>
	<div class="dvd">
		<mt-cell title="创建新专辑" class="collAls">
		  <img slot="icon" src="../../build/logo.png" width="30" height="30" style="display: inline-block;border-radius: 50%;">
		</mt-cell>
		
		<article class="collAl">
			<p>美美哒</p>
			<p>笔记1</p>
			<img src="../../build/logo.png" width="80" height="80" style="display: inline-block;border:1px solid #E8E8E8;"/>
			<img src="../../build/logo.png" width="80" height="80" style="display: inline-block;border:1px solid #E8E8E8;"/>
			<img src="../../build/logo.png" width="80" height="80" style="display: inline-block;border:1px solid #E8E8E8;"/>
			<img src="../../build/logo.png" width="80" height="80" style="display: inline-block;border:1px solid #E8E8E8;"/>
		</article>
	</div>
</template>

<script>
	export default {
  name: 'CollectAlbum',
  data () {
    return {
      src: ''
    }
  }
}
</script>

<style>
	.mint-cell-title{
		font-size: 14px;
	}
	.mint-cell-text{
		margin-left: 10px;
	}
	.collAls{
		background: #F8F8F8;
	}
	/*盒子包裹*/
	.dvd{
		margin-top: 10px;
	}
	article.collAl{
		margin-top: 10px;
		background: #F8F8F8;
		padding-left:20px;
	}
	article.collAl p{
		font-size:14px ;
		line-height: 30px;
	}
</style>