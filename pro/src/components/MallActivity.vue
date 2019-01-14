<template>
<div class="hello">
	<!--<header>-->
<mt-header title="活动">
  <router-link to="/mall" slot="left">
    <mt-button icon="back" @click="back">返回</mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
<section>
	<img src="../assets/logo.png" width="100%" height="175"/>
	<div class="mallActivity">
		<div>
			<p>全网爆款提前抢 预付定金翻倍用</p>
			<p>10.20早10点-11.01早10点</p>
		</div>
		<ul>
			<li  v-for="n in 9">
				<router-link to="/details" >
				<p>星期六</p>
					<img src="../assets/logo.png" width="40px" height="40px"/>
				<span>GO</span>
				</router-link>
			</li>
		</ul>
	</div>
	<div class="mallActivity">
		<div>
			<p>血拼在即，不一样的双11秘籍</p>
			<p>11.01早10点-11.10早10点</p>
		</div>
		<ul>
			<li  v-for="n in 9">
					<router-link to="/details" >
						<p>星期六</p>
						<img src="../assets/logo.png" width="40px" height="40px"/>
						<span>GO</span>
					</router-link>
			</li>
		</ul>
	</div>
	<p>-敬请期待-</p>
</section>
	<!--</header>-->
</div>
</template>

<script>
export default {
  name: 'MallActivity',
  data () {
    return {
      src: ''
    }
  },
  methods:{
  	back(){
  		this.$router.go(-1);
  	}
  }
}
</script>

<style>
	section .mallActivity{
		display: flex;
		flex-direction: column;
		padding: 10px 20px;
		/*margin: 10px;*/
	}
	section .mallActivity>div{
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 12px;
		color: #8C8C8C;
	}
	section .mallActivity>div p:first-child{
		background: #AAAAAA;
		border-radius: 5px;
		font-size: 14px;
		color: #101010;
		padding: 10px 20px;
		font-weight: 600;
	}
	section .mallActivity ul{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	section .mallActivity ul li{
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 8px 25px;
		margin: 10px 0;
		background: #F8F8F8;
	}
	section .mallActivity ul li span{
		font-size: 14px;
		display: block;
		width: 50px;
		height: 20px;
		line-height: 20px;
		border-radius: 10px;
		text-align: center;
		margin-top: 5px;
		background: #AAAAAA;
	}
	section>p{
		text-align: center;
		font-size: 14px;
	}
</style>