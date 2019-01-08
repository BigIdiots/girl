<template>
	<div class="hello">
		<mt-header title="人气产品">
		  <router-link to="/mall" slot="left">
		     <mt-button icon="back"></mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>

		<section style="margin-top: 2px;">
			<aside style="margin-bottom: 6px;">
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
			</aside>
			
			<mt-navbar v-model="active" style="background: #AAAAAA;">
				<mt-tab-item id="limit" style="padding: 10px 0;">18限定美妆</mt-tab-item>
				<mt-tab-item id="recommend" style="padding: 10px 0;">达人推荐</mt-tab-item>
				<mt-tab-item id="album" style="padding: 10px 0;">人气专辑</mt-tab-item>
			</mt-navbar>
			
			<mt-tab-container v-model="active" swipeable="true">
				<mt-tab-container-item id="limit">
					<mt-cell class="MallSeckill">
						<div class="MallSeckillImg" slot="title">
							<img slot="icon" src="../assets/logo.png" width="120" height="120" style="display: inline-block;">
							<div class="MallSeckillList">
								<div>
									<p>当家花旦烈焰蓝金</p>
							  		<p>Shiseido Maquillage 资生堂心彩妆 心机  雪花蜜粉饼 2018新版单芯</p>
								</div>
							  	<div>
							  		<p>￥55</p>
							  		<mt-button type="primary">加入购物车</mt-button>
							  	</div>
							</div>
						</div>
					</mt-cell>
				</mt-tab-container-item>

				<mt-tab-container-item id="recommend">
					<mt-cell class="MallSeckill">
						<div class="MallSeckillImg" slot="title">
							<img slot="icon" src="../assets/logo.png" width="110" height="110" style="display: inline-block;">
							<div class="MallSeckillList">
								<div>
									<p>淡夜茉莉版大宝</p>
							  		<p>好评大宝 100ml 管装x2</p>
								</div>
							  	<div>
							  		<p>￥55</p>
							  		<mt-badge size="small" color="#888">加入购物车</mt-badge>
							  	</div>
							</div>
						</div>
					</mt-cell>
				</mt-tab-container-item>

				<mt-tab-container-item id="album">
					<mt-cell class="MallSeckill">
						<div class="MallSeckillImg" slot="title">
							<img slot="icon" src="../assets/logo.png" width="110" height="110" style="display: inline-block;">
							<div class="MallSeckillList">
								<div>
									<p>淡夜茉莉版大宝</p>
							  		<p>好评大宝 100ml 管装x2</p>
								</div>
							  	<div>
							  		<p>￥55</p>
							  		<mt-badge type="primary">加入购物车</mt-badge>
							  	</div>
							</div>
						</div>
					</mt-cell>
				</mt-tab-container-item>
			</mt-tab-container>
		</section>
	</div>
</template>

<script>
export default {
  name: 'MallPopular',
  data () {
    return {
      src: '',
      active:'limit'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
section .MallSeckill{
	background: #F8F8F8;
	height: 120px;
	border-bottom: 1px solid #AAAAAA;
}
section .MallSeckill:last-of-type{
	border-bottom: none;
}
/*section .MallSeckill button{
	height: 25px;
	font-size: 12px;
	width: 65px;
	margin-left: 30px;
	align-self: flex-end;
	margin-top: 65px;
}*/
section .MallSeckillImg{
	display: flex;
}
section .MallSeckillList{
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	font-size: 12px;
	height: 110px;
	margin-left: 20px;
	padding: 5px 0;
}
section .MallSeckillList>div:last-child{
	display: flex;
	align-items: flex-end;
}
section .MallSeckillList>div:last-child button{
	margin-left: 80px;
	width: 90px;
	height: 26px;
	border-radius: 15px;
	font-size: 12px;
}
section .MallSeckillList>div p:first-of-type{
	color: #101010;
	font-weight: 700;
	font-size: 14px;
}
section .MallSeckillList>div p:nth-child(2){
	margin-top: 6px;
	color: #8C8C8C;
	line-height: 1.2;
}
</style>
