<template>
	<!--<div id="">-->
		<div class="benti">
			<ul class="follUl otherUl" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
						<li class="follList otherList" v-for="item in list">
							<router-link to='/details' tag="div">
								<img :src="item.imgPath" width="100%" height="200" />
							</router-link>
							<div class="info">
								<p class="multiLine">{{item.uName}}</p>
								<div>
									<img src="item.headUrl" width="40" height="40" />
									<div>
										<router-link to='#' tag="span">
											<mt-button type="default">点赞</mt-button>
										</router-link>
									</div>
								</div>
							</div>
						</li>
					</ul>	
		</div>
	<!--</div>-->
</template>

<script>
	export default {
  name: 'About',
  data () {
    return {
      list:[]
    }
  },
  mounted() {
	var _this = this
	var uid=localStorage.getItem('id')
	if(uid==''){
		uid=125;
	}
	this.Axios.post('/showNearByZone.do', _this.Qs.stringify({
		limit: 20,
		page: 1,
		uid: uid
	})).then((data) => {
		var data = data.data.data;
		this.list = data;
	})
},
methods: {
			loadMore() {
				this.loading = true;
				setTimeout(() => {
					let last = this.list[this.list.length - 1];
					for(let i = 1; i <= 10; i++) {
						this.list.push(last + i);
					}
					this.loading = false;
				}, 2000);
			}
		}
}
</script>

<style>
</style>