<template>
	<div id="">
		<div class="mint-searchbar" style="background: #fff;padding: 8px 40px;">
			<router-link to="/search" class="mint-searchbar-inner" style="background: #F1F1F1;">
				<i class="mintui mintui-search"></i>
				<input type="search" placeholder="大家都在搜“玩转春节”" class="mint-searchbar-core" style="background: #F1F1F1;">
			</router-link>
		</div>
	<nav id="">
		
		<router-link to="/discoverCommit" tag="span">推荐</router-link>
		<router-link to="/discoverMakeup" tag='span'>彩妆</router-link>
		<router-link to="/discoverSkin" tag='span'>护肤</router-link>
		<router-link to="/discoverVideos" tag='span'>视频</router-link>
	</nav>
		<router-view @toparent="getdata"></router-view>
	</div>
</template>

<script>
	export default {
  name: 'Discover',
  data () {
    return {
      src: ''
    }
  }
}
</script>

<style>
	nav{
		height: 30px;
		background: #E8E8E8;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
</style>