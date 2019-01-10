<template>
	<div class="hello">
		<mt-header title="人气产品">
			<router-link to="/mall" slot="left">
				<mt-button icon="back" @click="back()">返回</mt-button>
			</router-link>
			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>

		<section style="margin-top: 2px;" ref="viewBox">
			<img src="../assets/logo.png" width="100%" height="145px" />
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

			<mt-navbar v-model="active" :class="{'MallNav':'true','isFixed':istrue}">
				<mt-tab-item id="limit" style="padding: 10px 0;">18限定美妆</mt-tab-item>
				<mt-tab-item id="recommend" style="padding: 10px 0;">达人推荐</mt-tab-item>
				<mt-tab-item id="album" style="padding: 10px 0;">人气专辑</mt-tab-item>
			</mt-navbar>

			<mt-tab-container v-model="active" :swipeable="true">
				<!--18限定美妆-->
				<mt-tab-container-item id="limit">
					<mt-cell class="Mall">
						<div class="MallImg" slot="title">
							<img slot="icon" src="../assets/logo.png" width="120" height="120" style="display: inline-block;">
							<div class="MallList">
								<div>
									<p>
										<mt-badge size="small" type="success">TOP1</mt-badge>
										<span>当家花旦烈焰蓝金</span>
									</p>
									<p class="multiLine">Dior迪奥 红管口红 555 Ultra Kiss 3.2g</p>
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
					<div style="margin: 5px 0;">
						<div class="MallPosition">
							<img src="../assets/logo.png" width="100%" height="200px" style="margin-bottom: -40px;" />
							<div>
								<p>Venus 大理石眼影盘</p>
								<p>
									<span style="font-size: 14px;">￥125</span>
									<span style="color: #8C8C8C;text-decoration: line-through;">￥239</span>
								</p>
								<img src="../assets/logo.png" width="85" height="65" style="align-self: center;" />
							</div>
						</div>
						<mt-cell class="Mall">
							<div class="MallImg" slot="title">
								<img slot="icon" src="../assets/logo.png" width="60" height="60" style="border-radius: 50%;">
								<div class="MallList">
									<div>
										<p>软萌是一只喵</p>
										<p class="multiLine">这盘眼影基本人手一盘，价格便宜 颜色都非常实用</p>
									</div>
								</div>
							</div>
							<router-link to="/ShareDetail">
								<mt-button type="primary">查看分享</mt-button>
							</router-link>
						</mt-cell>
					</div>
				</mt-tab-container-item>
				<!--人气专辑-->
				<mt-tab-container-item id="album">
					<div class="MallTitl" v-for="n in 6">
						<div>
							<p>职场面试妆 轻松斩offer</p>
							<p>秋招求职季，化一个得体又大方的面试妆容就靠TA</p>
							<img src="../assets/logo.png" width="100%" height="120" />
						</div>
						<div class="">
							<mt-swipe :auto="0" :continuous="false" :show-indicators="false" :stopPropagation="true" style="height: 140px;">
								<mt-swipe-item>
									<ul class="MallDl">
										<li v-for="n in 4">
											<img src="../assets/logo.png" width="70" height="70" />
											<div>
												<p class="multiLine">毛孔隐形妆前乳</p>
												<p>￥85</p>
											</div>

										</li>
									</ul>
								</mt-swipe-item>
								<mt-swipe-item>
									<ul class="MallDl">
										<li v-for="n in 3">
											<img src="../assets/logo.png" width="70" height="70" />
											<p class="multiLine">但是噶三维股份蓝</p>
											<p>￥85</p>
										</li>
										<li class="MallMore">
											<router-link to="/MallMore">
												<mt-button plain>查看更多</mt-button>
											</router-link>
										</li>
									</ul>

								</mt-swipe-item>
							</mt-swipe>
						</div>
					</div>
				</mt-tab-container-item>
			</mt-tab-container>
		</section>
	</div>
</template>

<script>
	export default {
		name: 'MallPopular',
		data() {
			return {
				src: '',
				active: 'limit',
				istrue: ''
			}
		},
		mounted: function() {
			this.box = this.$refs.viewBox
			this.box.addEventListener('scroll', this.handleScroll, true) // 监听（绑定）滚轮滚动事件
		},
		methods: {
			handleScroll() {
				var scrollTop = this.$refs.viewBox.scrollTop
				if(scrollTop > 250) {
					this.istrue = true
				} else {
					this.istrue = false
				}
			},
			back() {
				this.$router.go(-1);
			}
		},
		destroyed: function() {
			window.removeEventListener('scroll', this.handleScroll); //  离开页面清除（移除）滚轮滚动事件
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	section .mallBtn {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 8px 0;
	}
	
	section .mallBtn button {
		width: 200px;
		height: 40px;
		border-radius: 20px;
	}
	
	div.MallTitl {
		margin: 8px 0;
	}
	
	div.MallTitl>div:first-child {
		padding: 10px;
		background: #F8F8F8;
	}
	
	div.MallTitl>div:first-child p:last-of-type {
		font-size: 12px;
		color: #8C8C8C;
	}
	
	ul.MallDl {
		display: flex;
		justify-content: space-around;
		margin-top: 10px;
	}
	
	ul.MallDl li {
		width: 70px;
		display: flex;
		flex-direction: column;
		padding: 5px;
		background: #F8F8F8;
	}
	
	ul.MallDl li>div {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	
	ul.MallDl p {
		font-size: 12px;
	}
	
	ul.MallDl li.MallMore {
		height: 100px;
		align-self: center;
	}
	
	ul.MallDl li.MallMore button {
		height: 100px;
		font-size: 16px;
		border: none;
	}
</style>