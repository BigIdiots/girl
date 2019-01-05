<template>
  <div class="hello">
 <header>
 	<img :src="src">
	<div class="mint-searchbar">
		<router-link to="/search" class="mint-searchbar-inner">
			<i class="mintui mintui-search"></i>
			<input type="search" placeholder="大家都在搜“玩转春节”" class="mint-searchbar-core">
		</router-link>
	</div>
 </header>
 <nav>
 	<router-link to="/recommend" tag="span">推荐</router-link>
	<router-link to="/skin" tag='span'>护肤</router-link>
	<router-link to="/cosmetics" tag='span'>彩妆</router-link>
 </nav>
	<section>
		<mt-swipe :auto="3000" style="height:200px">
		  <mt-swipe-item style="background: red;">1</mt-swipe-item>
		  <mt-swipe-item style="background: yellow;">2</mt-swipe-item>
		  <mt-swipe-item style="background: pink;">3</mt-swipe-item>
		</mt-swipe>	
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
.hello{
height: 100vh;
display: flex;
flex-direction: column;
}
header{
	position: relative;
	display: flex;
	justify-content: center;
	height: 50px;
	background: #f1f1f1;
	color: #a1a1a1;
	font-size: 14px;
}
header img{
	position: absolute;
	left: 10px;
	top: 0;
	width: 50px;
	height: 50px;
	overflow: hidden;
	border-radius: 50%;
	background: #fff;
}
header .mint-searchbar{
	width: 305px;
    margin-left: 60px;
    height: 100%;
	background-color: transparent;
}
header .mint-searchbar input{
	margin-left: 5px;
}
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
section{
	flex: 1;
	overflow: auto;
}
footer{
	display: flex;
	justify-content: space-between;
	height: 50px;
	background: #f1f1f1;
	text-align: center;
	line-height: 50px;
	color: #8C8C8C;
	font-size: 18px;
}
footer span{
	display: block;
	width: 50px;
	height: 50px;
	font-weight: 900;
}
footer span:hover{
	color: black;
}
footer span:nth-child(3){
	border-radius: 50%;
	font-size: 40px;
	font-weight: 900;
	color: black;
}
</style>
