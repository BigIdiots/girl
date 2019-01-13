<template>
  <div class="hello">
  	<div class="navs" v-show="isShow" v-on:click="toggle()">
  		<div class="navs_a" @click.stop="show1()">
  			<h2>更多</h2>
  			<mt-cell title="我的关注" to="/concern"  value="" class="hellos"></mt-cell>
  			<mt-cell title="我的收藏" to="/collect"  value="" class="hellos"></mt-cell>
  			<mt-cell title="我的草稿" to="/draft"  value="" class="hellos"></mt-cell>
  			<mt-cell title="购物车" to="/shopcart"  value="" class="hellos"></mt-cell>
  			<mt-cell title="订单" to="/indent"  value="" class="hellos"></mt-cell>
  			<mt-cell title="PIN券" to="#"  value="" class="hellos"></mt-cell>
  			<mt-cell title="心愿单" to="#"  value="" class="hellos"></mt-cell>
  			<mt-cell title="pin会员卡" to="#"  value="" class="hellos"></mt-cell>
  			<mt-cell title="客服中心" to="#"  value="" class="hellos"></mt-cell>
  			<mt-cell title="设置" to="/setting"  value="" class="hellos"></mt-cell>
  		</div>
  	</div>
 <header>
 	<img class="head" :src="src" v-on:click="toggle()">
 	<router-link to="/follow" tag="span">关注</router-link>
	<router-link to="/discover" tag='span'>发现</router-link>
	<router-link to="/about" tag='span'>附近</router-link>
 </header>

			<div class="mint-searchbar" style="background: #fff;padding: 8px 40px;">
				<router-link to="/search" class="mint-searchbar-inner" style="background: #F1F1F1;">
				<i class="mintui mintui-search"></i>
				<input type="search" placeholder="大家都在搜“玩转春节”" class="mint-searchbar-core" style="background: #F1F1F1;">
				</router-link>
			</div>
			
		<section>
   		<router-view ></router-view>
   	</section>
   	<footer>
   		<router-link to="/" tag="span">首页</router-link>
   		<router-link to="/mall" tag='span'>商城</router-link>
   		<router-link to="/login" tag='span'>+</router-link>
   		<router-link to="/news" tag='span'>消息</router-link>
   		<router-link to='/myself' tag="span">我</router-link>
   	</footer>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      src: '',
      isShow:false,
    }
  },
  methods:{
  	 toggle:function(){
             this.isShow = !this.isShow;
          },
	 show1:function(){
	 	
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
	height: 40px;
	background: #f1f1f1;
	color: #a1a1a1;
	font-size: 18px;
}
header img{
	position: absolute;
	left: 10px;
	top: 0;
	width: 40px;
	height: 40px;
	overflow: hidden;
	border-radius: 50%;
	background: #fff;
}
header>span{
	display: flex;
	justify-content: center;
	align-items: center;
	/*min-width: 50px;*/
	padding: 0 10px;
	height: 40px;
	font-weight: 900;
}
header:hover>span:first-of-type{
	color: #8c8c8c;
}
header:hover>span:hover,header>span:first-of-type{
	color: black;
}
.mint-searchbar input{
	margin-left: 5px;
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


.hello .navs{
	/*display: none;*/
	width: 100%;
	height: 100%;
	z-index: 999;
	position: absolute;
	top: 0;
	left: 0;
	background: rgba(187,187,187,0.5);
}
.hello .navs_a{
	width: 60%;
	height: 93%;
	position: absolute;
	top: 0;
	left: 0;
	background: #F8F8F8;
	padding:47px 20px 0 30px;
}
.hello .navs_a>h2{
	font-style: normal;
	font-size: 20px;
}
.hello .navs_a .hellos{
	padding-left: 40px;
	background: #F8F8F8;
}
</style>
