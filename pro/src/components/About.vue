<template>
	<!--<div id="">-->
		<div class="benti">
			<ul class="discoverList" style="padding: 0 25px;">
				<li>
					<router-link to='/#'><img src="#" width="156" height="214"/></router-link>
					<p>数据模仿</p>
					<div class="lietu">
						<img src="*"/>
						<span>pink</span>
						<router-link to='#' tag="h5">点赞</router-link>
					</div>
				</li>
				<li>
					<router-link to='/#'><img src="#" width="156" height="214"/></router-link>
					<p>数据模仿</p>
					<div class="lietu">
						<img src="*"/>
						<span>pink</span>
						<router-link to='#' tag="h5">点赞</router-link>
					</div>
				</li>
				<li>
					<router-link to='/#'><img src="#" width="156" height="214"/></router-link>
					<p>数据模仿</p>
					<div class="lietu">
						<img src="*"/>
						<span>pink</span>
						<router-link to='#' tag="h5">点赞</router-link>
					</div>
				</li>
			</ul>			
		</div>
	<!--</div>-->
</template>

<script>
	export default {
  name: 'About',
  data () {
    return {
      src: ''
    }
  }
}
</script>

<style>
	.benti {
		display: flex;
		justify-content: center;
		flex-direction: column;
		height: 100%;
		width: 100%;
	}
/*	/*
	.mint-navbar .mint-tab-item {
		font-size: 18px;
	}
	
	.mint-navbar .mint-tab-item.is-selected {
		border-bottom: 2px solid #26a2ff;
		color: #26a2ff;
		margin-bottom: 0;
	}
	
	.mint-tab-item-label {
		font-size: 16px;
		font-weight: 700;
	}
	
	.article {
		flex: 1;
		overflow: auto;
		padding: 15px 25px;
	}*/
	
	.discoverList {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		color: #8c8c8c;
	}
	
	.discoverList li {
		margin-bottom: 10px;
	}
	
	.discoverList p {
		margin: 12px 0;
		width: 147px;
		word-wrap: break-word;
		word-break: break-all;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.lietu {
		height: 34px;
		display: flex;
		align-items: center;
	}
	
	.lietu img {
		width: 34px;
		height: 34px;
		border-radius: 50%;
		overflow: hidden;
	}
	
	.lietu span {
		margin-left: 10px;
		font-size: 14px;
	}
	
	.lietu h5 {
		margin-left: 55px;
	}
</style>