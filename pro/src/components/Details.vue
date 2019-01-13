<template>
	<div class="hello">
		<mt-header title="商品详情">
		  <router-link to="/" slot="left" style="font-size: 24px;" @click="back()">
		  		&lt;
		  </router-link>
		</mt-header>
		
		<section>
			<div class="detailsOne">
				<img src="../../build/logo.png" width="100%" height="300"/>
				<mt-cell class="yonghu">
					<div slot="title">
						<div class="yongTil">
							<p>￥242</p>
							<p>深豆沙色显气质。黑管唇釉Carmin Session#407</p>
						</div>							 	
					</div>
					<mt-button size="small" style="width: 60px;height: 20px;padding: 0;">心愿单</mt-button>
				</mt-cell>
				<p>大热断货王 黑管407！#407#有人说是枯玫瑰色，涂抹
					出来是带细闪的豆沙棕色，薄涂紫调多一点，是只秋冬
					气质的唇釉，真的好貌美，之所以这么大火大概是因为
					它真的完全不挑皮而且实在是太突显气质了。而且和镜
					面唇釉相比，他的黏稠度变小了。
				</p>
			</div>
				<router-link to="#" class="kefu" tag="div">
					客服
				</router-link>	
		</section>
		
		<footer>
			<router-link to="#" tag="em" style="font-size: 14px;border-right: 1px solid #8C8C8C;padding: 0 20px;">店铺</router-link>
   			<router-link to="/ShareDetail" tag='em' style="font-size: 14px;border-right: 1px solid #8C8C8C;padding: 0 20px;">购物车</router-link>
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
	
	section .detailsOne p{
		margin-bottom: 6px;
		line-height: 1.4;
		font-size: 14px;
	}
	section .detailsOne>p{
		padding: 15px 30px;
		line-height: 1.8;
		font-size: 12px;
	}
	.detailsOne{
		position: relative;
	}
	.yonghu{
		min-height: 100px;
		background: #F8F8F8;
		font-weight: 600;
	}
	.yonghu .yongTil{
		
	}
	/*.mint-cell{
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
	}*/
	.kefu{
		width: 50px;
		height: 50px;
		background: #CCCCCC;
		font-size: 14px;
		line-height: 44px;
		text-align: center;
		border-radius: 50%;
		position: absolute;
		right: 20px;
		bottom: 10px;
	}
	footer em{
		font-style:normal ;
	}
</style>