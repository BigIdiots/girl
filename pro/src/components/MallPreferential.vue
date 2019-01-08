<template>
	<div class="hello">
		<mt-header title="特惠">
		  <router-link to="/mall" slot="left">
		     <mt-button icon="back"></mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>

		<mt-navbar v-model="active" style="background: #AAAAAA;">
			<mt-tab-item id="MallSeckill1" style="padding: 5px 0;">
				<div class="nav">
					<span>20:00</span>
					<span>爆款直降</span>
				</div>
			</mt-tab-item>
			<mt-tab-item id="MallSeckill2" style="padding: 5px 0;">
				<div class="nav">
					<span>20:00</span>
					<span>爆款直降</span>
				</div>
			</mt-tab-item>
			<mt-tab-item id="MallSeckill3" style="padding: 5px 0;">
				<div class="nav">
					<span>20:00</span>
					<span>爆款直降</span>
				</div>
			</mt-tab-item>
			<mt-tab-item id="MallSeckill4" style="padding: 5px 0;">
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
			<mt-tab-container v-model="active" swipeable="true">
				<mt-tab-container-item id="MallSeckill1">
					<mt-cell class="MallSeckill">
						<div class="MallSeckillImg" slot="title">
							<img slot="icon" src="../assets/logo.png" width="110" height="110" style="display: inline-block;">
						</div>
						<div class="MallSeckillList">
						  	<p>淡夜茉莉版大宝</p>
						  	<p>好评大宝 100ml 管装x2</p>
						  	<p>￥55</p>
						  	<mt-progress :value="45" :bar-height="10">
							  	<span slot="end" style="color: #8C8C8C;">已抢45%</span>
							</mt-progress>
						</div>
						<mt-button plain>马上抢</mt-button>
					</mt-cell>
				</mt-tab-container-item>

				<mt-tab-container-item id="MallSeckill2">
					<mt-cell class="MallSeckill">
						<div class="MallSeckillImg" slot="title">
							<img slot="icon" src="../assets/logo.png" width="110" height="110" style="display: inline-block;">
						</div>
						<div class="MallSeckillList">
						  	<p>淡夜茉莉版大宝</p>
						  	<p>好评大宝 100ml 管装x2</p>
						  	<p>￥55</p>
						  	<mt-progress :value="45" :bar-height="10">
							  	<span slot="end" style="color: #8C8C8C;">已抢45%</span>
							</mt-progress>
						</div>
						<mt-button plain>马上抢</mt-button>
					</mt-cell>
				</mt-tab-container-item>

				<mt-tab-container-item id="MallSeckill3">
					<mt-cell class="MallSeckill">
						<div class="MallSeckillImg" slot="title">
							<img slot="icon" src="../assets/logo.png" width="110" height="110" style="display: inline-block;">
						</div>
						<div class="MallSeckillList">
						  	<p>淡夜茉莉版大宝</p>
						  	<p>好评大宝 100ml 管装x2</p>
						  	<p>￥55</p>
						  	<mt-progress :value="45" :bar-height="10">
							  	<span slot="end" style="color: #8C8C8C;">已抢45%</span>
							</mt-progress>
						</div>
						<mt-button plain>马上抢</mt-button>
					</mt-cell>
				</mt-tab-container-item>
				
				<mt-tab-container-item id="MallSeckill4">
					<mt-cell class="MallSeckill">
						<div class="MallSeckillImg" slot="title">
							<img slot="icon" src="../assets/logo.png" width="110" height="110" style="display: inline-block;">
						</div>
						<div class="MallSeckillList">
						  	<p>淡夜茉莉版大宝</p>
						  	<p>好评大宝 100ml 管装x2</p>
						  	<p>￥55</p>
						  	<mt-progress :value="45" :bar-height="10">
							  	<span slot="end" style="color: #8C8C8C;">已抢45%</span>
							</mt-progress>
						</div>
						<mt-button plain>马上抢</mt-button>
					</mt-cell>
					<mt-cell class="MallSeckill">
						<div class="MallSeckillImg" slot="title">
							<img slot="icon" src="../assets/logo.png" width="110" height="110" style="display: inline-block;">
						</div>
						<div class="MallSeckillList">
						  	<p>淡夜茉莉版大宝</p>
						  	<p>好评大宝 100ml 管装x2</p>
						  	<p>￥55</p>
						  	<mt-progress :value="45" :bar-height="10">
							  	<span slot="end" style="color: #8C8C8C;">已抢45%</span>
							</mt-progress>
						</div>
						<mt-button plain>马上抢</mt-button>
					</mt-cell>
					<mt-cell class="MallSeckill">
						<div class="MallSeckillImg" slot="title">
							<img slot="icon" src="../assets/logo.png" width="110" height="110" style="display: inline-block;">
						</div>
						<div class="MallSeckillList">
						  	<p>淡夜茉莉版大宝</p>
						  	<p>好评大宝 100ml 管装x2</p>
						  	<p>￥55</p>
						  	<mt-progress :value="45" :bar-height="10">
							  	<span slot="end" style="color: #8C8C8C;">已抢45%</span>
							</mt-progress>
						</div>
						<mt-button plain>马上抢</mt-button>
					</mt-cell>
					<mt-cell class="MallSeckill">
						<div class="MallSeckillImg" slot="title">
							<img slot="icon" src="../assets/logo.png" width="110" height="110" style="display: inline-block;">
						</div>
						<div class="MallSeckillList">
						  	<p>淡夜茉莉版大宝</p>
						  	<p>好评大宝 100ml 管装x2</p>
						  	<p>￥55</p>
						  	<mt-progress :value="45" :bar-height="10">
							  	<span slot="end" style="color: #8C8C8C;">已抢45%</span>
							</mt-progress>
						</div>
						<mt-button plain>马上抢</mt-button>
					</mt-cell>
					<mt-cell class="MallSeckill">
						<div class="MallSeckillImg" slot="title">
							<img slot="icon" src="../assets/logo.png" width="110" height="110" style="display: inline-block;">
						</div>
						<div class="MallSeckillList">
						  	<p>淡夜茉莉版大宝</p>
						  	<p>好评大宝 100ml 管装x2</p>
						  	<p>￥55</p>
						  	<mt-progress :value="45" :bar-height="10">
							  	<span slot="end" style="color: #8C8C8C;">已抢45%</span>
							</mt-progress>
						</div>
						<mt-button plain>马上抢</mt-button>
					</mt-cell>
					<mt-cell class="MallSeckill">
						<div class="MallSeckillImg" slot="title">
							<img slot="icon" src="../assets/logo.png" width="110" height="110" style="display: inline-block;">
						</div>
						<div class="MallSeckillList">
						  	<p>淡夜茉莉版大宝</p>
						  	<p>好评大宝 100ml 管装x2</p>
						  	<p>￥55</p>
						  	<mt-progress :value="45" :bar-height="10">
							  	<span slot="end" style="color: #8C8C8C;">已抢45%</span>
							</mt-progress>
						</div>
						<mt-button plain>马上抢</mt-button>
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
      active:'MallSeckill1'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/*.mint-navbar .mint-tab-item{
	font-size: 14px;
}
.mint-navbar .mint-tab-item.is-selected {
    border-bottom: 2px solid #26a2ff;
    color: #26a2ff;
    margin-bottom: 0;
}
.mint-tab-item-label{
	font-size: 14px;
	font-weight: 700;
}*/
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
section .MallSeckill{
	background: #F8F8F8;
	height: 120px;
	border-bottom: 1px solid #AAAAAA;
}
section .MallSeckill:last-of-type{
	border-bottom: none;
}
section .MallSeckill button{
	height: 20px;
	font-size: 12px;
	width: 70px;
	margin-left: 30px;
	align-self: flex-end;
	margin-bottom: 15px;
}
section .MallSeckillList{
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	font-size: 12px;
	height: 110px;
	padding: 5px 0;
}
section .MallSeckillList p:first-of-type,section .MallSeckillList p:last-of-type{
	color: #101010;
	font-weight: 700;
}
</style>
