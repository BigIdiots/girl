<template>
	<div class="hello">
		<mt-header title="限时购">
		  <router-link to="/mall" slot="left">
		     <mt-button icon="back" @click="back()">返回</mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>

		<mt-navbar v-model="active" style="background: #AAAAAA;">
			<mt-tab-item id="Mall1" style="padding: 5px 0;">
				<div class="nav">
					<span>20:00</span>
					<span>爆款直降</span>
				</div>
			</mt-tab-item>
			<mt-tab-item id="Mall2" style="padding: 5px 0;">
				<div class="nav">
					<span>20:00</span>
					<span>爆款直降</span>
				</div>
			</mt-tab-item>
			<mt-tab-item id="Mall3" style="padding: 5px 0;">
				<div class="nav">
					<span>20:00</span>
					<span>爆款直降</span>
				</div>
			</mt-tab-item>
			<mt-tab-item id="Mall4" style="padding: 5px 0;">
				<div class="nav">
					<span>20:00</span>
					<span>爆款直降</span>
				</div>
			</mt-tab-item>
		</mt-navbar>
		
		<div class="countdown">
			<p>春节同价提前购</p>
			<p>距离结束还有　<span>3</span>　小时</p>
		</div>
		
		<section style="margin-top: 2px;">
			<mt-tab-container v-model="active" :swipeable="true">
				<mt-tab-container-item id="Mall1">
					<mt-cell class="Mall">
						<div class="MallImg" slot="title">
							<img slot="icon" src="../assets/logo.png" width="120" height="120" style="display: inline-block;">
							<div class="MallList">
								<div>
									<p>淡夜茉莉版大宝</p>
							  		<p>好评大宝 100ml 管装x2</p>
								</div>
							  	<div>
							  		<div style="flex: 1;">
							  			<p>￥55</p>
									  	<mt-progress :value="45" :bar-height="10">
										  	<span slot="end" style="color: #8C8C8C;">已抢45%</span>
										</mt-progress>
							  		</div>
									<mt-button plain>马上抢</mt-button>
							  	</div>
							</div>
						</div>
					</mt-cell>
				</mt-tab-container-item>

				<mt-tab-container-item id="Mall2">
					<mt-cell class="Mall">
						<div class="MallImg" slot="title">
							<img slot="icon" src="../assets/logo.png" width="120" height="120" style="display: inline-block;">
							<div class="MallList">
								<div>
									<p>淡夜茉莉版大宝</p>
							  		<p>好评大宝 100ml 管装x2</p>
								</div>
							  	<div>
							  		<div style="flex: 1;">
							  			<p>￥55</p>
									  	<mt-progress :value="45" :bar-height="10">
										  	<span slot="end" style="color: #8C8C8C;">已抢45%</span>
										</mt-progress>
							  		</div>
									<mt-button plain>马上抢</mt-button>
							  	</div>
							</div>
						</div>
					</mt-cell>
				</mt-tab-container-item>

				<mt-tab-container-item id="Mall3">
					<mt-cell class="Mall">
						<div class="MallImg" slot="title">
							<img slot="icon" src="../assets/logo.png" width="120" height="120" style="display: inline-block;">
							<div class="MallList">
								<div>
									<p>淡夜茉莉版大宝</p>
							  		<p>好评大宝 100ml 管装x2</p>
								</div>
							  	<div>
							  		<div style="flex: 1;">
							  			<p>￥55</p>
									  	<mt-progress :value="45" :bar-height="10">
										  	<span slot="end" style="color: #8C8C8C;">已抢45%</span>
										</mt-progress>
							  		</div>
									<mt-button plain>马上抢</mt-button>
							  	</div>
							</div>
						</div>
					</mt-cell>
				</mt-tab-container-item>
				
				<mt-tab-container-item id="Mall4">
					<mt-cell class="Mall">
						<div class="MallImg" slot="title">
							<img slot="icon" src="../assets/logo.png" width="120" height="120" style="display: inline-block;">
							<div class="MallList">
								<div>
									<p>淡夜茉莉版大宝</p>
							  		<p>好评大宝 100ml 管装x2</p>
								</div>
							  	<div>
							  		<div style="flex: 1;">
							  			<p>￥55</p>
									  	<mt-progress :value="45" :bar-height="10">
										  	<span slot="end" style="color: #8C8C8C;">已抢45%</span>
										</mt-progress>
							  		</div>
									<mt-button plain>马上抢</mt-button>
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
  name: 'MallSeckill',
  data () {
    return {
      src: '',
      active:'Mall1'
    }
  },
  methods:{
  	back(){
  		this.$router.go(-1);
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.nav{
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 14px;
}
.nav span{
	display: block;
}
div.countdown{
	display: flex;
	justify-content: space-between;
	padding: 2px 20px;
	box-shadow: 0 1px 5px;
	font-size: 12px;
}
</style>
