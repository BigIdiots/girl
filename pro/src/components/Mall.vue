<template>
	<div class="hello">
		<div class="navs" v-show="isShow" v-on:click="toggle()">
			<div class="navs_a" @click.stop="show1()">
				<h2>更多</h2>
				<mt-cell title="我的关注" to="/concern" value="" class="hellos"></mt-cell>
				<mt-cell title="我的收藏" to="/collect" value="" class="hellos"></mt-cell>
				<mt-cell title="我的草稿" to="/draft" value="" class="hellos"></mt-cell>
				<mt-cell title="购物车" to="/shopcart" value="" class="hellos"></mt-cell>
				<mt-cell title="订单" to="#" value="" class="hellos"></mt-cell>
				<mt-cell title="PIN券" to="#" value="" class="hellos"></mt-cell>
				<mt-cell title="心愿单" to="#" value="" class="hellos"></mt-cell>
				<mt-cell title="pin会员卡" to="#" value="" class="hellos"></mt-cell>
				<mt-cell title="客服中心" to="/service" value="" class="hellos"></mt-cell>
				<mt-cell title="设置" to="/setting" value="" class="hellos"></mt-cell>
			</div>
		</div>

		<header>
			<img src="#" v-on:click="toggle()">
			<div class="mint-searchbar">
				<router-link to="/search" class="mint-searchbar-inner" style="background: #fff;">
					<i class="mintui mintui-search"></i>
					<input type="search" placeholder="大家都在搜“玩转春节”" class="mint-searchbar-core" style="background: #fff;">
				</router-link>
			</div>
		</header>

		<mt-navbar v-model="active">
			<mt-tab-item id="MallRecommend" style="padding: 10px 0;">推荐</mt-tab-item>
			<mt-tab-item id="MallSkin" style="padding: 10px 0;">护肤</mt-tab-item>
			<mt-tab-item id="MallCosmetics" style="padding: 10px 0;">彩妆</mt-tab-item>
		</mt-navbar>

		<section>
			<mt-tab-container v-model="active" :swipeable=true>
				<mt-tab-container-item id="MallRecommend">
					<aside>
						<mt-swipe :auto="3000" style="height:200px" :stopPropagation="true">
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

						</div>

						<ul class="mallList" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
							<li v-for="item in list">
								<router-link to="/details">
									<img src="" width="100%" height="150">
								</router-link>
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
							<li v-for="n in 9">
								<router-link to="/details">
									<img src="" width="100%" height="150">
								</router-link>
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
							<li v-for="n in 9">
								<router-link to="/details">
									<img src="" width="100%" height="150">
								</router-link>
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
			<router-link to="/mall" tag='span' class="hover">商城</router-link>
			<router-link to="/news" tag='span'>消息</router-link>
			<router-link to='/myself' tag="span">我</router-link>
		</footer>
	</div>
</template>

<script>
	export default {
		name: 'Mall',
		data() {
			return {
				list: [],
				active: 'MallRecommend',
				isShow: false
			}
		},
		methods: {
			toggle: function() {
				this.isShow = !this.isShow;
			},
			show1: function() {

			},
			loadMore() {
				this.loading = true;
				setTimeout(() => {
					let last = this.list[this.list.length - 1];
					for(let i = 1; i <= 10; i++) {
						this.list.push(last + i);
					}
					this.loading = false;
				}, 2000);
			}
		},
		mounted() {
			console.log(this.val)
			var _this = this
			this.Axios.post('/showSimpleZone.do', _this.Qs.stringify({
				limit: _this.limit,
				page: _this.active,
				style: _this.val
			})).then((data) => {
				var data = data.data.data;
				console.log(data)
				this.list = data;
			})
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	header .mint-searchbar {
		flex: 1;
		margin-left: 60px;
		background: transparent;
	}
	
	.mint-navbar .mint-tab-item {
		font-size: 18px;
	}
	
	.mint-navbar .mint-tab-item.is-selected {
		border-bottom: 2px solid #26a2ff;
		color: #26a2ff;
		margin-bottom: 0;
	}
	
	.mint-tab-item-label {
		font-size: 16px;
		font-weight: 700;
	}
	
	aside {
		padding: 0 15px;
	}
	
	aside .activity {
		width: 100%;
		height: 100px;
		border-radius: 8px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background: red;
		font-size: 12px;
		color: #101010;
	}
	
	aside .activity>div {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	aside .activity>div>div {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-left: 20px;
		font-weight: 700;
	}
	
	aside .activity>span {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 60px;
		height: 60px;
		color: #262626;
		border-radius: 50%;
		background: #fff;
	}
	
	aside .preferential {
		margin-top: 10px;
		display: flex;
		justify-content: space-between;
		width: 100%;
	}
	
	aside p {
		height: 20px;
		line-height: 20px;
	}
	
	aside .preferential a {
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
	
	aside .preferential a>div {
		display: flex;
		justify-content: space-between;
	}
	
	aside .preferential.sale a {
		background: #F8F8F8;
	}
	
	aside .preferential.sale p {
		margin-left: -10px;
	}
	
	ul.mallList {
		width: 100%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		font-size: 14px;
		/*margin-top: 40px;*/
	}
	
	ul.mallList li {
		width: 43%;
		padding: 10px;
		background: #f8f8f8;
		margin-top: 10px;
		border-radius: 5px;
	}
	
	ul.mallList li img {
		margin-bottom: 10px;
	}
	
	ul.mallList li p:nth-of-type(2) {
		color: #8C8C8C;
		margin-bottom: 10px;
	}
	
	section {
		position: relative;
	}
	
	section .MallNav {
		width: 100%;
		background: #AAAAAA;
	}
	
	section .MallNav.isFixed {
		position: fixed;
		left: 0;
		top: 40px;
		z-index: 99;
	}
	
	section .Mall {
		background: #F8F8F8;
		border-bottom: 1px solid #AAAAAA;
	}
	
	section .Mall>div {
		background-image: none;
		padding: 10px;
	}
	
	section .Mall:last-of-type {
		border-bottom: none;
	}
	
	section div.MallImg {
		display: flex;
	}
	
	section div.MallPosition {
		position: relative;
	}
	
	section div.MallPosition>div {
		width: 118px;
		height: 110px;
		position: absolute;
		top: 10px;
		right: 15px;
		display: flex;
		flex-direction: column;
		background: pink;
		font-size: 12px;
		font-weight: 600;
		padding: 10px 6px;
	}
	
	section div.MallList {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		flex: 1;
		font-size: 12px;
		margin-left: 20px;
		padding: 8px 0;
	}
	
	section div.MallList>div:first-of-type {
		display: flex;
		flex-direction: column;
	}
	
	section div.MallList>div:nth-of-type(2) {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}
	
	section .Mall button {
		margin-left: 20px;
		height: 26px;
		border-radius: 15px;
		font-size: 12px;
	}
	
	section div.MallList>div p:first-of-type {
		color: #101010;
		font-weight: 700;
		font-size: 14px;
	}
	
	section div.MallList>div p:nth-child(2) {
		margin-top: 6px;
		color: #8C8C8C;
		line-height: 1.2;
	}
</style>