<template>
	<div class="hello">
		<mt-header style="height: 50px;font-size: 24px;" title="手机密码登录">
			<router-link to="/" slot="left">
				<mt-button style="font-size: 18px;" icon="back">首页</mt-button>
			</router-link>
		</mt-header>
		
		<section>
			<div class="zhuti">
				<mt-field label="手机号:" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
				<mt-field label="密　码:" placeholder="请输入密码" type="password" v-model="pass"></mt-field>
				<mt-button size="large" type="primary" @click="login()" style="font-size: 16px;">登　录</mt-button>
				<router-link to="/register" style="width: 100%;">
						<mt-button size="large" type="danger">注　册</mt-button>
					</router-link>
				<div class="zhutis">
					<router-link to="#" tag="div" style="color: #656b79;font-size: 14px;">
						<mt-button plain>忘记密码</mt-button>
					</router-link>
					<router-link to="/register" tag="div" style="color: #656b79;font-size: 14px;">
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
  				pass:''
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
					console.log(data)
				})
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