<template>
	<div class="hello">
		<mt-header title="限时购">
		  <router-link to="/mall" slot="left">
		     <mt-button icon="back"></mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>

		<mt-navbar v-model="active">
			<mt-tab-item id="MallRecommend">
				<div class="nav">
					<span>20:00</span>
					<span>爆款直降</span>
				</div>
			</mt-tab-item>
			<mt-tab-item id="MallSkin">护肤</mt-tab-item>
			<mt-tab-item id="MallCosmetics">彩妆</mt-tab-item>
		</mt-navbar>

		<section>
			<mt-tab-container v-model="active" swipeable="true">
				<mt-tab-container-item id="MallRecommend">
					<aside>
						<mt-swipe :auto="3000" style="height:200px" stopPropagation="true" prevent="true">
							<mt-swipe-item style="background: red;">1</mt-swipe-item>
							<mt-swipe-item style="background: yellow;">2</mt-swipe-item>
							<mt-swipe-item style="background: pink;">3</mt-swipe-item>
							<mt-swipe-item style="background: green;">4</mt-swipe-item>
						</mt-swipe>
						<router-link to="/MallActivity" class="activity">
							<div>
								<img src="" width="80" height="80" />
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
									<img src="" width="50" height="50" style="margin-right: 20px;" />
									<img src="" width="50" height="50" />
								</div>
							</router-link>
							<router-link to="/MallPreferential">
								<p>春节预售</p>
								<div style="margin-top: 10px;">
									<img src="" width="50" height="50" style="margin-right: 20px;" />
									<img src="" width="50" height="50" />
								</div>
							</router-link>
						</div>
						<div class="preferential sale">
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
						
						<ul class="mallList">
							<li>
								<img src="" width="150" height="150">
								<p>滋润丰盈肌肤神器</p>
								<p>兰蔻精华修复肌底液</p>
								<p>￥200</p>
							</li>
						</ul>
					</aside>
				</mt-tab-container-item>

				<mt-tab-container-item id="MallSkin">
					<aside class="aside">
						<ul class="mallList">
							<li>
								<img src="" width="150" height="150">
								<p>滋润丰盈肌肤神器</p>
								<p>兰蔻精华修复肌底液</p>
								<p>￥200</p>
							</li>
						</ul>
					</aside>
				</mt-tab-container-item>

				<mt-tab-container-item id="MallCosmetics">
					<aside class="aside">
						<ul class="mallList">
							<li>
								<img src="" width="150" height="150">
								<p>滋润丰盈肌肤神器</p>
								<p>兰蔻精华修复肌底液</p>
								<p>￥200</p>
							</li>
						</ul>
					</aside>
				</mt-tab-container-item>
			</mt-tab-container>
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
      src: '',
      active:'MallRecommend'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
header .mint-searchbar{
	flex: 1;
	margin-left: 60px;
	background: transparent;
}
.mint-navbar .mint-tab-item{
	font-size: 18px;
}
.mint-navbar .mint-tab-item.is-selected {
    border-bottom: 2px solid #26a2ff;
    color: #26a2ff;
    margin-bottom: 0;
}
.mint-tab-item-label{
	font-size: 16px;
	font-weight: 700;
}
aside{
	padding: 0 15px;
}
aside.aside{
	padding: 0 12px;
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
aside p{
	height: 20px;
	line-height: 20px;
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
aside .preferential.sale a{
	background: #F8F8F8;
}
aside .preferential.sale p{
	margin-left: -10px;
}
ul.mallList{
	width: 100%;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	font-size: 14px;
}
ul.mallList li{
	padding: 10px;
	background: #f8f8f8;
	margin-top: 10px;
	border-radius: 5px;
}
ul.mallList li img{
	margin-bottom: 10px;
}
ul.mallList li p:nth-of-type(2){
	color: #8C8C8C;
	margin-bottom: 10px;
}
</style>
