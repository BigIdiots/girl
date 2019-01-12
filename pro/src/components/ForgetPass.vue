<template>
	<div class="hello">
		<mt-header style="height: 50px;font-size: 24px;" title="密码找回">
			<router-link to="/" slot="left">
				<mt-button style="font-size: 18px;" icon="back">首页</mt-button>
			</router-link>
		</mt-header>
		
		<section>
			<div class="zhuti">
				<mt-field label="手机号:" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
				<mt-field style="padding: 0 7px;" label="验 证 码:" placeholder="请输入验证码" :disableClear="true" v-model="test">
					<mt-button size="small" @click="send()">发送验证码</mt-button>
				</mt-field>
				<mt-button size="large" type="primary" @click="login()" style="font-size: 16px;margin-bottom: 10px;">确　认</mt-button>
				<div class="zhutis">
					<router-link to="/register" tag="div" style="color: #656b79;font-size: 14px;">
						<mt-button plain>注册账号</mt-button>
					</router-link>
					<router-link to="/login" tag="div" style="color: #656b79;font-size: 14px;">
						<mt-button plain>密码登录</mt-button>
					</router-link>
				<!--需要更改连接-->
				</div>
			</div>
		</section>
		
		<footer style="height: 150px;background: #FFFFFF;">
			<div class="rests">
				<h4>第三方登录</h4>
				<router-link to="/weixin" tag="em">微信</router-link>
				<router-link to="/tengxun" tag="em">QQ</router-link>
				<router-link to="/weibo" tag="em">微博</router-link>
			</div>
		</footer>
	</div>
</template>

<script>
	export default{
		name:'Login',
		data(){
			return{
				src:'',
				phone:'',
				test:''
			}
		},
		methods:{
			send() {
				var _this = this;
				if(this.phone != "") {
					this.Axios({
						method: 'post',
						url: '/user/loginMessage.do',
						params: {
							phone: this.phone
						}
					}).then(function(data) {
						console.log(data)
					})
				} else {
					_this.$toast({
						message: '请您输入正确的手机号',
						position: 'middle',
						duration: 2000
					})
				}

			},
			login(){
				var _this=this;
				if(_this.phone==""&&_this.test==""){
					_this.$toast({
						message: '您的输入有误！！！',
						position: 'middle',
						duration: 2000
					})
				}else{
					this.Axios({
						method: 'post',
						url: '/user/loginByMessage.do',
						params: {
							phone: _this.phone,
							code: _this.test
						}
					}).then(function(data) {
						//var data=data.data
						console.log(data)
					})
				}
			}
		}
	}
</script>

<style>
	/*header em{
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
	}*/
	/*.zhuti{
		width: 330px;
		text-align: center;
		margin:18px 0 0 24px;
	}
	 .zhuti h3{
	 	font-weight: normal;
	 	color: #656b79;
	 	font-size: 28px;
	 	margin-bottom: 30px;
	 }*/
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
	 section .zhuti .zhutis{
	 	width: 100%;
	 	display: flex;
	 	justify-content: space-between;
	 }
	 section .zhuti .zhutis button{
	 	margin: 0 10px;
	 	height: 30px;
	 	font-size: 14px;
	 }
</style>