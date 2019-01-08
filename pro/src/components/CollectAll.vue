<template>
	<div class="articles">
		<ul class="discoverList">
			<li>
				<img src="" width="156" height="214">
				<p>数据模仿</p>
				<div class="lietus">
					<img src="*" />
					<span>pink</span>
					<router-link to='#' tag="h5">点赞</router-link>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
			export default {
  name: 'CollectAll',
  data () {
    return {
      src: ''
    }
  }
}
</script>

<style>
	.articles {
		flex: 1;
		overflow: auto;
		padding: 15px 25px;
	}
	
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
	
	.lietus {
		height: 34px;
		display: flex;
		align-items: center;
	}
	
	.lietus img {
		width: 34px;
		height: 34px;
		border-radius: 50%;
		overflow: hidden;
	}
	
	.lietus span {
		margin-left: 10px;
		font-size: 14px;
	}
	
	.lietus h5 {
		margin-left: 55px;
	}
</style>