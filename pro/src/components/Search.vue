<template>
<div class="hello">
	<header>
	 	<mt-button icon="back" style="position: absolute;left: 6px;background: none;border: none;box-shadow: none;" @click="back()">返回</mt-button>
	 	<router-link to="/" tag="span">关注</router-link>
		<router-link to="/discover" tag='span'>发现</router-link>
		<router-link to="/about" tag='span'>附近</router-link>
	</header>
	<mt-search v-model="value" :autofocus="true" placeholder="大家都在搜“玩转春节”">
		<mt-cell class="Mall" v-for="item in list" :title="item.uName" :value="item.value">
						<div class="MallImg" slot="title">
							<img slot="icon" src="item.imgPath" width="120" height="120" style="display: inline-block;">
							<div class="MallList">
								<div>
									<p>
										<span>{{item.uName}}</span>
									</p>
									<p class="multiLine">{{item.title}}</p>
								</div>
								<div>
									<p>￥55</p>
									<router-link to="/shopcart">
									<mt-button type="primary">加入购物车</mt-button>
									</router-link>
								</div>
							</div>
						</div>
		</mt-cell>
	</mt-search>

</div>
</template>

<script>
	
	
	export default {
  name: 'Search',
  data () {
    return {
      value: '',
      list:[]
    }
  },
  mounted(){
  	var _this=this;
  	this.Axios({
		method: 'post',
		url: '/searchZone.do',
		params: {
			limit: 20,
			page:1,
			query:_this.value
		}
	}).then(function(data) {
		var data=data.data.data
		_this.list=data
	})
  },
  methods:{
  	back(){
  		this.$router.go(-1)
  	}
  }
}
</script>

	

<style>
	.mint-search-list {
		margin-top: 100px;
	}
</style>