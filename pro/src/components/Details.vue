<template>
	<div class="hello">
		<mt-header title="商品详情">
		  <router-link to="/" slot="left" style="font-size: 24px;">
		  		&lt;
		  </router-link>
		</mt-header>
		
		<section>
			<div class="detailsOne">
				<img src="../../build/logo.png" height="350"/>
				<mt-cell >
					<div class="yonghu" slot="title" style="height: 104px;line-height: 24px;">
						<div class="">
							<p>￥242</p>
							<p>深豆沙色显气质。黑管唇釉Carmin Session#407</p>
						</div>							 	
					</div>
					<mt-button size="small" style="width: 80px;height: 20px;">心愿单</mt-button>
				</mt-cell>
				<span >大热断货王 黑管407！#407#有人说是枯玫瑰色，涂抹
					出来是带细闪的豆沙棕色，薄涂紫调多一点，是只秋冬
					气质的唇釉，真的好貌美，之所以这么大火大概是因为
					它真的完全不挑皮而且实在是太突显气质了。而且和镜
					面唇釉相比，他的黏稠度变小了。
				</span>
				<router-link to="#" class="kefu" tag="div">
					客服
				</router-link>	
			</div>
		</section>
		
		<footer>
			<router-link to="#" tag="em" style="font-size: 14px;border-right: 1px solid #8C8C8C;padding: 0 20px;">店铺</router-link>
   			<router-link to="#" tag='em' style="font-size: 14px;border-right: 1px solid #8C8C8C;padding: 0 20px;">购物车</router-link>
   			<router-link to="#" tag='em' style="font-size: 14px;border-right: 1px solid #8C8C8C;padding: 0 20px;">加入购物车</router-link>
   			<router-link to="#" tag='em' style="font-size: 14px;border-right: 1px solid #8C8C8C;padding: 0 20px;">立即购买</router-link>
		</footer>
	</div>
</template>

<script>
		export default {
		  name: 'Details',
		  data () {
		    return {
		      src: '',
		    }
		  }
		}
</script>

<style>
	
	section .detailsOne span{
		display: block;
		padding: 16px 36px 46px 40px;
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
	}
</style>