<template>
	<div class="">
		 <aside>
			<mt-swipe :auto="3000" style="height:200px">
			  <mt-swipe-item style="background: red;">1</mt-swipe-item>
			  <mt-swipe-item style="background: yellow;">2</mt-swipe-item>
			  <mt-swipe-item style="background: pink;">3</mt-swipe-item>
			  <mt-swipe-item style="background: green;">4</mt-swipe-item>
			</mt-swipe>
			<router-link to="/MallActivity" class="activity">
				<div>
					<img src="" width="80" height="80"/>
					<div>
						<p>春节来了</p>
						<p style="font-size: 16px;">抢春节特惠</p>
					</div>
				</div>
				<span>GO</span>
			</router-link>
			<div class="preferential">
				<router-link to="/MallSeckill">
					<p>春节同价限时购</p>
					<div style="margin-top: 10px;">
						<img src="" width="50" height="50" style="margin-right: 20px;"/>
						<img src="" width="50" height="50" />
					</div>
				</router-link>
				<router-link to="/MallPreferential">
					<p>春节预售</p>
					<div style="margin-top: 10px;">
						<img src="" width="50" height="50" style="margin-right: 20px;"/>
						<img src="" width="50" height="50" />
					</div>
				</router-link>
			</div>
			<div class="preferential">
				<router-link to="/MallSuperpreferential">
					<p>超值特惠</p>
					<div>
						<img src="" width="60" height="60" />
					</div>
				</router-link>
				<router-link to="/MallPopular">
					<p>人气产品</p>
					<div>
						<img src="" width="60" height="60" />
					</div>
				</router-link>
				<router-link to="/MallShop">
					<p>小红店</p>
					<div>
						<img src="" width="60" height="60" />
					</div>
				</router-link>
			</div>
		</aside>
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
/*header{
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
}*/
aside{
	padding: 0 20px;
}
aside .activity{
	width: 100%;
	height: 100px;
	border-radius: 8px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	background: #aaa;
	font-size: 12px;
	color: #101010;
}
aside .activity>div{
	display: flex;
	justify-content: space-between;
	align-items: center;
}
aside .activity>div>div{
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-left: 20px;
	font-weight: 700;
}
aside .activity>span{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 60px;
	height: 60px;
	color: #262626;
	border-radius: 50%;
	background: #fff;
}
aside .preferential{
	margin-top: 10px;
	display: flex;
	justify-content: space-between;
	width: 100%;
}
aside .preferential a{
	display: flex;
	flex-direction: column;
	height: 80px;
	border-radius: 5px;
	background: #aaa;
	font-size: 12px;
	color: #262626;
	font-weight: 700;
	padding: 10px 20px;
}
aside .preferential a>div{
	display: flex;
	justify-content: space-between;
}
aside .popular{
	
}
</style>