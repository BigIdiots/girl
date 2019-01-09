<template>
	<div class="hello">
		<mt-header title="特惠">
		  <router-link to="/mall" slot="left">
		     <mt-button icon="back"></mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>

		
		<section>
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
			
			<mt-navbar v-model="active" style="background: #AAAAAA;">
				<mt-tab-item id="popularity" style="padding: 10px 0;">人气销量王</mt-tab-item>
				<mt-tab-item id="products" style="padding: 10px 0;">新品上线</mt-tab-item>
				<mt-tab-item id="store" style="padding: 10px 0;">超值囤货</mt-tab-item>
			</mt-navbar>
			
			<mt-tab-container v-model="active" swipeable="true">
				<mt-tab-container-item id="popularity">
					<mt-cell class="Mall">
						<div class="MallImg" slot="title">
							<img slot="icon" src="../assets/logo.png" width="120" height="120">
						<div class="MallList">
							<div>
								<p>舒缓补水亮肤好物</p>
						  		<p>巴啦啦美白面膜 滋润保湿</p>
							</div>
						  	<div>
						  		<p>￥118</p>
						  		<mt-button type="primary">加入购物车</mt-button>
						  	</div>
						</div>
						</div>
					</mt-cell>
				</mt-tab-container-item>

				<mt-tab-container-item id="products">
					<mt-cell class="Mall">
						<div class="MallImg" slot="title">
							<img slot="icon" src="../assets/logo.png" width="120" height="120">
						<div class="MallList">
							<div>
								<p>舒缓补水亮肤好物</p>
						  		<p>巴啦啦美白面膜 滋润保湿</p>
							</div>
						  	<div>
						  		<p>￥118</p>
						  		<mt-button type="primary">加入购物车</mt-button>
						  	</div>
						</div>
						</div>
					</mt-cell>
				</mt-tab-container-item>

				<mt-tab-container-item id="store">
					<mt-cell class="Mall">
						<div class="MallImg" slot="title">
							<img slot="icon" src="../assets/logo.png" width="120" height="120">
						<div class="MallList">
							<div>
								<p>舒缓补水亮肤好物</p>
						  		<p>巴啦啦美白面膜 滋润保湿</p>
							</div>
						  	<div>
						  		<p>￥118</p>
						  		<mt-button type="primary">加入购物车</mt-button>
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
  name: 'MallPreferential',
  data () {
    return {
      src: '',
      active:'popularity'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
