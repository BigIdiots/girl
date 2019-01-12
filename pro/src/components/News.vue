<template>
	<!--消息-->
	<div class="hello">
			<mt-header title="客服中心" style="background: #F8F8F8;color: #101010;">
			  <router-link to="/" slot="left">
			    <mt-button icon="back" @click="back">返回</mt-button>
			  </router-link>
			</mt-header>
		
		<section>
			<div class="newsList">
				<router-link to="/newsPraise" tag="p">收到的赞和收藏</router-link>
				<router-link to="/newsDiscuss" tag="p">收到的评论和@</router-link>
				<router-link to="/newsAdd" tag="p">新增关注</router-link>
				<router-link to="/newsInform" tag="p">通知消息</router-link>
				<router-link to="/newsPrivate" tag="p">私信</router-link>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
  name: 'News',
  data () {
    return {
      src: '',
    }
  }
}
</script>

<style>
	.newsList{
		margin-top: 10px;
		background: #E8E8E8;
	}
	.newsList p{
		padding-left: 7px;
		height: 58px;
		line-height: 58px;
		font-size: 14px;
		border-bottom: 1px solid #CCCCCC;
	}
	.tops{
		margin: 8px 0 15px;
		background: #F8F8F8;
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
</style>