<template>
	<div class="hello">
		<mt-header title="限时购">
			<router-link to="/mall" slot="left">
				<mt-button icon="back" @click="back">返回</mt-button>
			</router-link>
			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>

		<mt-navbar v-model="active" style="background: #AAAAAA;">
			<mt-tab-item id="1" style="padding: 5px 0;">
				<div class="nav">
					<span>{{time1}}</span>
					<span>爆款直降</span>
				</div>
			</mt-tab-item>
			<mt-tab-item id="2" style="padding: 5px 0;">
				<div class="nav">
					<span>{{time2}}</span>
					<span>爆款直降</span>
				</div>
			</mt-tab-item>
			<mt-tab-item id="3" style="padding: 5px 0;">
				<div class="nav">
					<span>{{time3}}</span>
					<span>爆款直降</span>
				</div>
			</mt-tab-item>
			<mt-tab-item id="4" style="padding: 5px 0;">
				<div class="nav">
					<span>{{time4}}</span>
					<span>爆款直降</span>
				</div>
			</mt-tab-item>
		</mt-navbar>

		<section style="margin-top: 2px;">
			<mt-tab-container v-model="active" :swipeable="true">
				<mt-tab-container-item id="1">
					<div class="countdown">
						<p>春节同价提前购</p>
						<p v-show="Show">结束倒计时:{{timing}}</p>
						<p v-show="Show1">活动已结束</p>
					</div>
					<mt-cell class="Mall mall_other">
						<div class="MallImg" slot="title">
							<img slot="icon" src="../assets/logo.png" width="120" height="120" style="display: inline-block;">
							<div class="MallList">
								<div>
									<p>淡夜茉莉版大宝</p>
									<p class="multiLine">好评大宝 100ml 管装x2</p>
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

				<mt-tab-container-item id="2">
					<div class="countdown">
						<p>春节同价提前购</p>
						<p v-show="Show">结束倒计时:{{timing}}</p>
						<p v-show="Show1">活动已结束</p>
					</div>
					<mt-cell class="Mall mall_other">
						<div class="MallImg" slot="title">
							<img slot="icon" src="../assets/logo.png" width="120" height="120" style="display: inline-block;">
							<div class="MallList">
								<div>
									<p>淡夜茉莉版大宝</p>
									<p class="multiLine">好评大宝 100ml 管装x2</p>
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

				<mt-tab-container-item id="3">
					<div class="countdown">
						<p>春节同价提前购</p>
						<p v-show="Show">结束倒计时:{{timing}}</p>
						<p v-show="Show1">活动已结束</p>
					</div>
					<mt-cell class="Mall mall_other">
						<div class="MallImg" slot="title">
							<img slot="icon" src="../assets/logo.png" width="120" height="120" style="display: inline-block;">
							<div class="MallList">
								<div>
									<p>淡夜茉莉版大宝</p>
									<p class="multiLine">好评大宝 100ml 管装x2</p>
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

				<mt-tab-container-item id="4">
					<div class="countdown">
						<p>春节同价提前购</p>
						<p v-show="Show">结束倒计时:{{timing}}</p>
						<p v-show="Show1">活动已结束</p>
					</div>
					<mt-cell class="Mall mall_other" v-for="n in 9">
						<div class="MallImg" slot="title">
							<img slot="icon" src="../assets/logo.png" width="120" height="120" style="display: inline-block;">
							<div class="MallList">
								<div>
									<p>淡夜茉莉版大宝</p>
									<p class="multiLine">好评大宝 100ml 管装x2</p>
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
		data() {
			return {
				src: '',
				active: '1',
				timing:'',
				Show:'',
				Show1:'',
				timer:null,
				time:"",
				time1:"20:00",
				time2:"21:00",
				time3:"22:00",
				time4:"23:00"
			}
		},
		mounted(){
			var _this=this;
//			var date1=""
//			var time="2019-01-20 20:00"
//			console.log(date1,date2)
//			_this.miaosha(date1,date2);
			_this.timer = setInterval(function(){
			switch(_this.active){
				case "1":
					_this.time="2019-01-20 20:00";
					break;
				case "2":
					_this.time="2019-01-20 21:00";
					break;
				case "3":
					_this.time="2019-01-20 22:00";
					break;
				case "4":
					_this.time="2019-01-20 23:00";
					break;
			}
//			console.log(_this.time)
			var date2 = new Date(_this.time);
				var date1 = new Date();
				var ss = (date2-date1)/1000;
				var day = Math.floor(ss/86400);
				var hour = Math.floor(ss/3600%24);
				var minute = Math.floor(ss/60%60);
				var second = Math.floor(ss%60);
				_this.timing=day+"天"+hour+"小时"+minute+"分"+second+"秒";

				ss = Math.floor(ss);
//				console.log(ss)
				if(ss>0){
					_this.Show=true;
					_this.Show1=false;
				}else{
					_this.Show=false;
					_this.Show1=true;
//					clearInterval(_this.timer);
					
				}
			},1000)
		},
		methods: {
			back() {
				this.$router.go(-1);
			},
			miaosha(date1,date2){
				var _this=this
				var ss = (date2-date1)/1000;
				var hour = Math.floor(ss/3600);
				var minute = Math.floor(ss/60%60);
				var second = Math.floor(ss%60);
				this.timing=hour + ":" + minute + ":" + second;

				ss = Math.floor(ss);
				if(ss<=0){
					this.isShow=false;
					this.isShow1=true;
					clearInterval(_this.timer);
				}
				
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	.nav {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 14px;
	}
	
	.nav span {
		display: block;
	}
	
	div.countdown {
		display: flex;
		justify-content: space-between;
		box-shadow: 0 1px 5px;
	    font-size: 14px;
	    position: fixed;
	    z-index: 99;
	    width: 100%;
	    height: 25px;
	    align-items: center;
	}
	div.countdown>p{
		margin:0 10px
	}
	.mall_other:first-of-type{
		margin-top: 30px;
	}
</style>