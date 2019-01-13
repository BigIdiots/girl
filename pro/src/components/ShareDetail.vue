<template>
	<div class="hello">
		<mt-header title="查看分享">
		  <router-link to="/" slot="left" style="font-size: 24px;">
		  	<!--	&lt;-->
		  	<mt-button icon="back" @click="back()">返回</mt-button>
		  </router-link>
		</mt-header>
		
		<section>
			<div class="detailsOne">
				<img src="../../build/logo.png" width="100%" height="240"/>
				<p>
					仅仅是肯定积分时代峻峰就快乐圣诞节按法律框架空间分
					回复大家撒谎复合肥很放得开缴费萨科技方会计师空间发
					分行贷款缴费的精髓附近的空间空间案件发动机爱福家代
					减肥的索拉卡疯狂绝对是附加费的刷卡缴费看时间阿道夫
					肯定是减肥
				</p>
			</div>
		</section>
		
		<footer>
			<router-link to="#" tag="em" style="font-size: 14px;border-right: 1px solid #8C8C8C;padding: 0 20px;">店铺</router-link>
   			<router-link to="/details" tag='em' style="font-size: 14px;border-right: 1px solid #8C8C8C;padding: 0 20px;">购物车</router-link>
   			<router-link to="#" tag='em' style="font-size: 14px;border-right: 1px solid #8C8C8C;padding: 0 20px;">加入购物车</router-link>
   			<router-link to="#" tag='em' style="font-size: 14px;border-right: 1px solid #8C8C8C;padding: 0 20px;">立即购买</router-link>
		</footer>
	</div>
</template>

<script>
		export default {
		  name: 'ShareDetail',
		  data () {
		    return {
		      src: '',
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
	
	/*section .detailsOne p{
		display: block;
		padding: 16px 36px 46px 40px;
		line-height: 2;
		font-size: 14px;
	}
	.detailsOne{
		position: relative;
	}
	.mint-cell{
		background: #F8F8F8;
	}
	.mint-button--default{
		background: #FFFFFF;
	}
	.yonghu{
		display: flex;
		font-size: 14px;
		color: #888;
	}
	.yonghu p{
		margin: 5px 0 3px 6px;
	}
	.kefu{
		width: 44px;
		height: 44px;
		background: #CCCCCC;
		font-size: 14px;
		line-height: 44px;
		text-align: center;
		border-radius: 50%;
		position: absolute;
		right: 19px;
		bottom: 0;
	}
	footer em{
		font-style:normal ;
	}*/
</style>