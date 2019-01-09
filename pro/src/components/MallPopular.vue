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
				<!--18限定美妆-->
				<mt-tab-container-item id="limit">
					<mt-cell class="Mall" v-for="n in 5">
						<div class="MallImg" slot="title">
							<img slot="icon" src="../assets/logo.png" width="120" height="120" style="display: inline-block;">
							<div class="MallList">
								<div>
									<p>
										<mt-badge size="small" type="success">TOP{{n}}</mt-badge>
										<span>当家花旦烈焰蓝金</span>
									</p>
							  		<p>Dior迪奥 红管口红 555 Ultra Kiss 3.2g</p>
								</div>
							  	<div>
							  		<p>￥55</p>
							  		<mt-button type="primary">加入购物车</mt-button>
							  	</div>
							</div>
						</div>
					</mt-cell>
					<!--<mt-cell class="Mall">
						<div class="MallImg" slot="title">
							<img slot="icon" src="../assets/logo.png" width="120" height="120" style="display: inline-block;">
							<div class="MallList">
								<div>
									<p>
										<mt-badge size="small" type="success">TOP2</mt-badge>
										<span>日夜两用颜控标配</span>
									</p>
							  		<p>Shiseido Maquillage 资生堂心彩妆 心机  雪花蜜粉饼 2018新版单芯</p>
								</div>
							  	<div>
							  		<p>￥55</p>
							  		<mt-button type="primary">加入购物车</mt-button>
							  	</div>
							</div>
						</div>
					</mt-cell>
					<mt-cell class="Mall">
						<div class="MallImg" slot="title">
							<img slot="icon" src="../assets/logo.png" width="120" height="120" style="display: inline-block;">
							<div class="MallList">
								<div>
									<p>
										<mt-badge size="small" type="success">TOP3</mt-badge>
										<span>细腻显白玫红色</span>
									</p>
							  		<p>Suqqu 四色眼影盘 限定版 06 晚霞红 5.6g
</p>
								</div>
							  	<div>
							  		<p>￥55</p>
							  		<mt-button type="primary">加入购物车</mt-button>
							  	</div>
							</div>
						</div>
					</mt-cell>
					<mt-cell class="Mall">
						<div class="MallImg" slot="title">
							<img slot="icon" src="../assets/logo.png" width="120" height="120" style="display: inline-block;">
							<div class="MallList">
								<div>
									<p>
										<mt-badge size="small" type="success">TOP4</mt-badge>
										<span>粉嫩闪亮人鱼高光</span>
									</p>
							  		<p>BECCA 高光粉饼 LILAC GEODE 人鱼姬色 限量</p>
								</div>
							  	<div>
							  		<p>￥55</p>
							  		<mt-button type="primary">加入购物车</mt-button>
							  	</div>
							</div>
						</div>
					</mt-cell>
					<mt-cell class="Mall">
						<div class="MallImg" slot="title">
							<img slot="icon" src="../assets/logo.png" width="120" height="120" style="display: inline-block;">
							<div class="MallList">
								<div>
									<p>
										<mt-badge size="small" type="success">TOP5</mt-badge>
										<span>精致少女限量收藏</span>
									</p>
							  		<p>O HUI欧蕙 超粉嫩空姐限量版遮瑕气垫BB霜赠口红 限量款套盒</p>
								</div>
							  	<div>
							  		<p>￥55</p>
							  		<mt-button type="primary">加入购物车</mt-button>
							  	</div>
							</div>
						</div>
					</mt-cell>-->
					<div class="mallBtn">
						<router-link to="/MallLimit" tag="div">
							<mt-button plain>点击查看更多</mt-button>
						</router-link>
					</div>
				</mt-tab-container-item>
				<!--达人推荐-->
				<mt-tab-container-item id="recommend">
					<div style="margin: 5px 0;" v-for="n in 10">
						<img src="../assets/logo.png" width="100%" height="200px" style="margin-bottom: -40px;"/>
						<mt-cell class="Mall">
							<div class="MallImg" slot="title">
								<img slot="icon" src="../assets/logo.png" width="60" height="60" style="border-radius: 50%;">
								<div class="MallList">
									<div>
										<p>软萌是一只喵</p>
								  		<p>这盘眼影基本人手一盘，价格便宜  颜色都非常实用</p>
									</div>
								</div>
							</div>
							<mt-button type="primary">查看分享</mt-button>
						</mt-cell>
					</div>
				</mt-tab-container-item>
				<!--人气专辑-->
				<mt-tab-container-item id="album">
					<mt-cell class="Mall">
						<div class="MallImg" slot="title">
							<img slot="icon" src="../assets/logo.png" width="110" height="110" style="display: inline-block;">
							<div class="MallList">
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
	section .mallBtn{
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 8px 0;
	}
	section .mallBtn button{
		width: 200px;
		height: 40px;
		border-radius: 20px;
	}
</style>
