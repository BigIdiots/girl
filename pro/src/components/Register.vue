<template>
	<div class="hello">
		<header style="background: #fff;">
			<router-link to="/" tag="em">首页</router-link><!--需要更改连接-->
		</header>
		
		<section>
			<div class="zhuti">
				<h3>注册</h3>
				<mt-field  placeholder="请输入手机号" v-model="phonenum" style="margin:0 0 4px;"></mt-field>
				<mt-field placeholder="请输入用户密码" v-model="pass" ></mt-field>
				<mt-field placeholder="确认密码" v-model="passe"></mt-field>
				<mt-field placeholder="请输入验证码" v-model="test">
					<mt-button size="small" @click="" style="font-size: 16px;">发送验证码</mt-button>
				</mt-field>

					<router-link to="/login" tag="span" style="color: #656b79;font-size: 14px;">密码登录</router-link>
				<!--需要更改连接-->
			</div>
		</section>
		
		<footer style="height: 150px;background: #FFFFFF;">
		</footer>
	</div>
</template>

<script>
	export default {
  name: 'Register',
  data () {
    return {
      src: ''
    }
  }
}
</script>

<style>
	header em{
		font-style: normal;
		font-size: 14px;
		width: 80px;
		height: 30px;
		background: #E8E8E8;
		line-height: 30px;
		text-align: center;
		position: absolute;
		left: 8px;
		top: 18px;
	}
	.zhuti{
		width: 330px;
		text-align: center;
		margin:18px 0 0 24px;
	}
	 .zhuti h3{
	 	font-weight: normal;
	 	color: #656b79;
	 	font-size: 28px;
	 	margin-bottom: 30px;
	 }
	 .rests{
	 	width: 100%;
	 }
	 .rests h4{
	 	font-weight: normal;
	 	color: #656b79;
	 	font-size: 14px;
	 }
	 .rests em{
	 	font-style: normal;
	 	font-size: 14px;
		background: #E8E8E8;
		padding: 10px 20px;
		line-height: 30px;
		text-align: center;
		margin-left: 20px;
	 }
	 .mint-cell-wrapper{
	 	background-position:bottom left
	 }
</style>