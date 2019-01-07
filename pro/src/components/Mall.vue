<template>
  <div class="mall">
 <header>
 	<img :src="src">
	<div class="mint-searchbar">
		<router-link to="/search" class="mint-searchbar-inner">
			<i class="mintui mintui-search"></i>
			<input type="search" placeholder="大家都在搜“玩转春节”" class="mint-searchbar-core">
		</router-link>
	</div>
 </header>
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
.mall{
height: 100vh;
display: flex;
flex-direction: column;
}
</style>
