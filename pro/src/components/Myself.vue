<template>
	<div class="hello">
		<mt-header :title="users">
			  <router-link to="/" slot="left">
			   <mt-button icon="back" @click="back()">返回</mt-button>
			  </router-link>
			  <router-link to="#" slot="right">
			   <mt-button @click="backLogin()">退出登录</mt-button>
			  </router-link>
		</mt-header>
		
		<section style="padding: 20px;">
			<div class="mines">
				<div >
					<img src="../../build/logo.png" height="80" width="80" style="border-radius: 50%;"/>
				</div>
				<div class="mines_a">
					<div class="mines_b1">
						<figure>
							<span>2</span>
							<figcaption>关注</figcaption>
						</figure>
						<figure>
							<span>2</span>
							<figcaption>粉丝</figcaption>
						</figure>
						<figure>
							<span>2</span>
							<figcaption>获赞</figcaption>
						</figure>
					</div>
					<router-link to="/personData" tag="button">个人资料</router-link>
				</div>
			</div>
			
			<div class="mines_c">
				<textarea cols="47" rows="5" placeholder="个性说明"></textarea>
			</div>
			
			<div class="mines_d">
				<router-link to='#' tag="span">
							<mt-button type="danger">分享</mt-button>
				</router-link>
				<router-link to='#' tag="span">
					<mt-button type="primary">收藏</mt-button>
				</router-link>
			</div>
		</section>
	</div>
</template>

<script>
	export default{
		name:'Myself',
		data(){
			return{
				users:""
			}
		},
		created () {
            var a = localStorage.getItem('name')
            if (a) {
                // console.log(a)
                this.users="欢迎您："+a
//              localStorage.removeItem('phone')
            }else{
                this.$router.push("/login")
            }
        },
		methods:{
			back(){
				this.$router.go(-1)
			},
			backLogin(){
				this.$messagebox({
				  title: '提示',
				  message: '确定退出登录?',
				  showCancelButton: true
				}).then(()=>{
					localStorage.clear()
					this.$router.push("/")
				})
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
	section .mines{
		display: flex;
		margin-bottom: 10px;
	}
	section .mines_a{
		display: flex;
		flex-direction: column;
		margin-left:34px;
	}
	section .mines_a>button{
		width: 220px;
		height: 30px;
		line-height: 30px;
		border-radius:10px ;
		border: 1px solid #CCCCCC;
		background: #FFFFFF;
	}
	section .mines_b1{
		display: flex;
		justify-content: space-around;
		margin-bottom: 12px;
	}
	section .mines_b1>figure{
		text-align: center;
	}
	section .mines_d{
		text-align: center;
		margin-top: 20px;
	}
</style>