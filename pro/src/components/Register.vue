<template>
	<div class="hello">
		<mt-header style="height: 50px;font-size: 24px;" title="注　册">
			<router-link to="/" slot="left">
				<mt-button style="font-size: 18px;" icon="back">首页</mt-button>
			</router-link>
		</mt-header>

		<section>
			<div class="zhuti">
				<mt-field label="称　昵:" :state="userjudge" placeholder="请输入手机号" @focus.native.capture="umessage()" type="tel" :disableClear="true" v-model="user"></mt-field>
				<mt-field label="手 机 号:" :state="phonejudge" placeholder="请输入手机号" @focus.native.capture="pmessage()" type="tel" :disableClear="true" v-model="phone"></mt-field>
				<mt-field label="密　　码:" placeholder="请输入密码" type="password" @focus.native.capture="message()" :disableClear="true" :state="passjudge" v-model="pass"></mt-field>
				<mt-field label="确认密码:" placeholder="请确认密码" type="password" @focus.native.capture="rmessage()" :disableClear="true" :state="repassjudge" v-model="repass"></mt-field>
				<mt-field style="padding: 0 7px;" label="验 证 码:" placeholder="请输入验证码" @focus.native.capture="ymessage()" :disableClear="true" v-model="test">
					<mt-button size="small" @click="send()">发送验证码</mt-button>
				</mt-field>
				<mt-button size="large" :state="judgement" type="primary" @click="register()">注　册</mt-button>
				<router-link to="/login" style="width: 100%;">
					<mt-button size="large" type="danger">已有账号，点我登录</mt-button>
				</router-link>
				<!--需要更改连接-->
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		name: 'Register',
		data() {
			return {
				src: '',
				ustate: 0,
				pstate: 0,
				state: 0,
				restate: 0,
				user:'',
				phone: '',
				pass: '',
				repass: '',
				test: '',
				instance: ""
			}
		},
		mounted() {

		},
		methods: {
			send() {
				var _this = this;
				if(this.pstate == 1) {
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
			umessage() {
				if(this.instance != "") {
					this.instance.close();
				}
				this.instance = this.$toast('请输入您的称昵，仅支持中英文、数字和下划线，且不能为纯数字');
			},
			message() {
				if(this.instance != "") {
					this.instance.close();
				}
				this.instance = this.$toast('请输入您的密码，密码长度6-16位，数字、字母、标点符号，不能含有空格');
			},
			pmessage() {
				if(this.instance != "") {
					this.instance.close();
				}
				this.instance = this.$toast('请输入您的手机号码')
			},
			rmessage() {
				if(this.instance != "") {
					this.instance.close();
				}
				this.instance = this.$toast('请确认您的密码')
			},
			ymessage() {
				if(this.instance != "") {
					this.instance.close();
				}
			},
			register() {
				var _this = this;
				if(this.judgement < 4) {
					console.log(_this.state)
					_this.$toast({
						message: '你的输入有误！！！',
						position: 'middle',
						duration: 2000
					})
				} else {
					console.log(_this.state)
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
						//if(data.code==1){
							_this.Axios({
								method: 'post',
								url: '/user/addUser.do',
								params: {
									phone: _this.phone,
									password: _this.pass,
								}
							}).then(function(data) {
								console.log(data)
								localStorage.setItem('name',_this.user)
								_this.$router.push("/login")
	
							})
						//}
					})
				}
			},
			getByteLen(val) {
				var len = 0;
				for(var i = 0; i < val.length; i++) {
					var a = val.charAt(i);
					if(a.match(/[^\x00-\xff]/ig) != null) {
						len += 2;
					} else {
						len += 1;
					}
				}
				return len;
			}
		},
	computed: {
		userjudge(){
			var _this=this;
			var aa=''
			var reg = /\w*/g;
			var reg1 = /[\u4e00-\u9fa5]*/g;
			var reg3 = /^[0-9]{1,14}$/;
			var val = this.user;
			this.user = val.replace(/\s+/g, "");
			var val = this.user;
			if(this.user==''){
				aa=''
			}else if(reg.test(val) || reg1.test(val)) {
				if(_this.getByteLen(val) <= 14) {
					if(_this.getByteLen(val) == 0) {
						aa = "warning";
						this.ustate = 0
					} else if(reg3.test(val)) {
						aa = "error";
						this.ustate = 0
					} else {
						aa = "success";
						this.ustate = 1
					}
				} else {
					aa = "error";
					this.ustate = 0
				}
			} else {
				aa = "error";
				this.ustate = 0
			}
			return aa
		},
		phonejudge() {
			var _this = this;
			var aa = ''
			var reg = /^1(3|5|7|8)\d{9}$/g;
			if(_this.phone == "") {
				aa = ""
			} else if(reg.test(_this.phone)) {
				aa = "success";
				this.pstate = 1
			} else {
				aa = "error";
				this.pstate = 0
			}
			return aa
		},
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
		judgement() {
			return this.pstate + this.state + this.restate+this.ustate
		}
	}

	}
</script>

<style>
	header em {
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
	
	.zhuti {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 40px;
		padding: 0 20px;
	}
	
	.zhuti>a {
		margin: 12px 0;
	}
	
	.mint-cell-wrapper {
		background-position: bottom left
	}
</style>