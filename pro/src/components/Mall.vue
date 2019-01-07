<template>
  <div class="hello">
 <header>
 	<img :src="src">
	<div class="mint-searchbar">
		<router-link to="/search" class="mint-searchbar-inner" style="background: #fff;">
			<i class="mintui mintui-search"></i>
			<input type="search" placeholder="大家都在搜“玩转春节”" class="mint-searchbar-core" style="background: #fff;">
		</router-link>
	</div>
 </header>
 <nav>
		 	<router-link to="/MallRecommend" tag="span">推荐</router-link>
			<router-link to="/MallSkin" tag='span'>护肤</router-link>
			<router-link to="/MallCosmetics" tag='span'>彩妆</router-link>
		 </nav>
	<section>
		<router-view @toparent="getdata"></router-view>
   	</section>
   	<footer>
   		<router-link to="/" tag="span">首页</router-link>
   		<router-link to="/mall" tag='span'>商城</router-link>
   		<router-link to="/photograph" tag='span'>+</router-link>
   		<router-link to="/news" tag='span'>消息</router-link>
   		<router-link to='/myself' tag="span">我</router-link>
   	</footer>
  </div>
</template>

<script>
export default {
  name: 'Mall',
  data () {
    return {
      src: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/*.hello{
height: 100vh;
display: flex;
flex-direction: column;
}*/
nav{
	height: 36px;
	display: flex;
	justify-content: space-around;
	font-size: 16px;
	line-height: 36px;
	background: #fdfdfd;
	color: #8c8c8c;
}
nav span{
	display: block;
	width: 35px;
	font-weight: 900;
}
nav:hover span:first-of-type{
	color: #8c8c8c;
}
nav:hover span:hover,nav span:first-of-type{
	color: black;
}
</style>
