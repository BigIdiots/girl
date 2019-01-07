<template>
	<div class="">
		 <article>
				<mt-swipe :auto="3000" style="height:200px">
				  <mt-swipe-item style="background: red;">1</mt-swipe-item>
				  <mt-swipe-item style="background: yellow;">2</mt-swipe-item>
				  <mt-swipe-item style="background: pink;">3</mt-swipe-item>
				  <mt-swipe-item style="background: green;">4</mt-swipe-item>
				</mt-swipe>	
		</article>
	</div>
</template>

<script>
export default {
  name: 'MallRecommend',
  data () {
    return {
      src: ''
    }
  }
}
</script>

<style>
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
	flex: 1;
    margin-left: 60px;
	background: transparent;
}
/*section{
	flex: 1;
	overflow: auto;
}*/
section article{
	padding: 0 20px;
}
/*footer{
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
}*/
</style>