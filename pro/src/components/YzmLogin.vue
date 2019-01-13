<template>
	<div class="hello">
		<mt-header style="height: 50px;font-size: 24px;" title="验证码登录">
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
				<mt-button size="large" type="primary" @click="login()" style="font-size: 16px;">登　录</mt-button>
				<router-link to="/register" style="width: 100%;">
						<mt-button size="large" type="danger">注册账号</mt-button>
					</router-link>
				<div class="zhutis" style="flex-direction: column;">
					<router-link to="/login" tag="div" style="color: #656b79;font-size: 14px;align-self: flex-end;">
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
		name:'YzmLogin',
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
							phone: _this.phone
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
						_this.$router.push('/')
					})
				}
			}
		}
	}
</script>

<style>
</style>