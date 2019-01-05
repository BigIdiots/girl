<template>
	<div id="">
		<div class="mint-searchbar">
			<router-link to="/search" class="mint-searchbar-inner">
				<i class="mintui mintui-search"></i>
				<input type="search" placeholder="大家都在搜“玩转春节”" class="mint-searchbar-core">
			</router-link>
		</div>
	<nav id="">
		
		<router-link to="/commit" tag="span">推荐</router-link>
		<router-link to="/makeup" tag='span'>彩妆</router-link>
		<router-link to="/skin" tag='span'>护肤</router-link>
		<router-link to="/videos" tag='span'>视频</router-link>
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
	nav:hover span:first-of-type{
	color: #8c8c8c;
	}
	nav:hover span:hover,nav span:first-of-type{
	color: black;
	}
</style>