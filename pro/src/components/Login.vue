<template>
	<div class="hello">
		<mt-header style="height: 50px;font-size: 24px;" title="手机密码登录">
			<router-link to="/" slot="left">
				<mt-button style="font-size: 18px;" icon="back">首页</mt-button>
			</router-link>
		</mt-header>
		
		<section>
			<div class="zhuti">
				<mt-field label="手 机 号:" :state="phonejudge" placeholder="请输入手机号" @focus.native.capture="pmessage()" type="tel" :disableClear="true" v-model="phone"></mt-field>
				<mt-field label="密　　码:" placeholder="请输入密码" type="password" @focus.native.capture="message()" :disableClear="true" v-model="pass"></mt-field>
				<mt-button size="large" type="primary" @click="login()" style="font-size: 16px;">登　录</mt-button>
				<router-link to="/register" style="width: 100%;">
						<mt-button size="large" type="danger">注册新账号</mt-button>
					</router-link>
				<div class="zhutis">
					<router-link to="/ForgetPass" tag="div" style="color: #656b79;font-size: 14px;">
						<mt-button plain>忘记密码</mt-button>
					</router-link>
					<router-link to="/YzmLogin" tag="div" style="color: #656b79;font-size: 14px;">
						<mt-button plain>验证码登录</mt-button>
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
  				pass:'',
  				instance:""
			}
		},
		methods:{
			login(){
				var _this=this;
				this.Axios({
					method:'post',
					url:'/user/login.do',
					params:{phone:_this.phone,password:_this.pass}
				}).then(function(data){
					var code=data.data.code;
					console.log(data)
					if(code==0){
						_this.$toast({
						message: '该账号不存在',
						position: 'middle',
						duration: 2000
					})
					}else{
						localStorage.setItem('phone',_this.user)
						_this.$router.push('/')
					}
					
				})
			},
			message() {
				if(this.instance != "") {
					this.instance.close();
				}
				this.instance = this.$toast('请输入您的密码');
			},
			pmessage() {
				if(this.instance != "") {
					this.instance.close();
				}
				this.instance = this.$toast('请输入您的手机号码')
			},
		},
		computed: {
		phonejudge() {
			var _this = this;
			var aa = ''
			var reg = /^1(3|5|7|8)\d{9}$/g;
			if(_this.phone == "") {
				aa = ""
			} else if(reg.test(_this.phone)) {
				aa = "success";
			} else {
				aa = "error";
			}
			return aa
		}
	}
	}
</script>

<style>
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