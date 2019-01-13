<template>
	<div class="hello">
		<mt-header style="height: 50px;font-size: 24px;" title="重置密码">
			<router-link to="/" slot="left">
				<mt-button style="font-size: 18px;" @click="back()" icon="back">返回</mt-button>
			</router-link>
		</mt-header>
		
		<section>
			<div class="zhuti">
				<mt-field label="重置密码:" placeholder="请输入新密码" type="password" @focus.native.capture="message()" :disableClear="true" :state="passjudge" v-model="pass"></mt-field>
				<mt-field label="确认密码:" placeholder="再次输入密码" type="password" @focus.native.capture="rmessage()" :disableClear="true" :state="repassjudge" v-model="repass"></mt-field>
				<mt-button size="large" type="primary" @click="login()" style="font-size: 16px;">确　认</mt-button>
				<!--<div class="zhutis">
					<router-link to="#" tag="div" style="color: #656b79;font-size: 14px;">
						<mt-button plain>忘记密码</mt-button>
					</router-link>
					<router-link to="/login" tag="div" style="color: #656b79;font-size: 14px;">
						<mt-button plain>密码登录</mt-button>
					</router-link>
				</div>-->
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
		name:'ResetPass',
		data(){
			return{
				src:'',
				instance:'',
				pass:'',
				repass:'',
				state: 0,
				restate: 0,
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			message() {
				if(this.instance != "") {
					this.instance.close();
				}
				this.instance = this.$toast('请输入您的密码，密码长度6-16位，数字、字母、标点符号，不能含有空格');
			},
			rmessage() {
				if(this.instance != "") {
					this.instance.close();
				}
				this.instance = this.$toast('请确认您的密码')
			},
			login(){
				var _this=this;
				if(_this.pass==""&&_this.repass==""){
					_this.$toast({
						message: '您的输入有误！！！',
						position: 'middle',
						duration: 2000
					})
				}else{
					this.Axios({
						method: 'post',
						url: '/user/forgetPassword.do',
						params: {
							phone: _this.$route.query.phone,
							code: _this.$route.query.code,
							passwork:_this.pass
						}
					}).then(function(data) {
						//var data=data.data
						console.log(data)
						_this.$router('/login')
					})
				}
			}
		},
		computed: {
		passjudge() {
			var _this = this;
			var aa = "";
			var reg5 = /^[\x00-\xff]{6,16}$/;
			var reg6 = /\s+/g;
			if(_this.pass == "") {
				aa = ""
			} else if(reg6.test(_this.pass)) {
				aa = "warning";
				this.state = 0
			} else if(reg5.test(_this.pass)) {
				aa = "success";
				this.state = 1
			} else {
				aa = "error";
				this.state = 0
			}
			return aa
		},
		repassjudge() {
			var _this = this;
			var aa = "";
			if(_this.repass == "") {
				aa = ""
			} else if(_this.repass == _this.pass && _this.repass != 0) {
				aa = "success";
				this.restate = 1
			} else {
				aa = "error";
				this.restate = 0
			}
			return aa
		},
	}
	}
</script>

<style>
</style>