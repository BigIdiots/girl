<template>
	<div class="benti">
		<mt-navbar v-model="active">
			<mt-tab-item id="1">推荐</mt-tab-item>
			<mt-tab-item id="2">彩妆</mt-tab-item>
			<mt-tab-item id="3">护肤</mt-tab-item>
		</mt-navbar>

		<section class="article">
			<mt-tab-container v-model="active" :swipeable="true">
				<mt-tab-container-item id="1">
					<!--推荐-->
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
				</mt-tab-container-item>

				<mt-tab-container-item id="2">
					<!--彩妆-->
					<ul class="follUl otherUl">
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
				</mt-tab-container-item>

				<mt-tab-container-item id="3">
					<!--护肤-->
					<ul class="follUl otherUl">
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
				</mt-tab-container-item>

			</mt-tab-container>
		</section>
	</div>
</template>

<script>
	/*
		 解决post请求方法（三种）：
		 * 详见：
		 * https://github.com/mzabriskie/axios/blob/master/README.md#using-applicationx-www-form-urlencoded-format.
		 * */
	//	import axios from 'axios'//请求axios
	/*
	 请求qs方法：
	 * 只有当post请求就写，get请求不用
	 * 为的是将post请求时，将请求的数据参数的形式request payload改为form data，
	 * 默认情况下，axios将JavaScript对象序列化为JSON
	 * 用Qs.stringify()将对象序列化成URL的形式，Qs是axios里面自带的，所以直接引入就可以了
	 *注：
	 * ①默认情况下，axios将JavaScript对象序列化为JSON。要以application/x-www-form-urlencoded格式发送数据
	 * ②我们使用不同请求方式时，参数的传输方式是不一样的，但是服务端在取我们接口的请求参数时，
	 * 用的方法其实却是一样的，都是使用request.getParameter(key)来获取，
	 * 其实是因为tomcat在中间会对请求参数进行解析处理，
	 * 处理完把解析出来的表单参数放在request parameter map中，
	 * 所以后端就可以通过request.getParameter(key)来统一获取数据，
	 * 而tomcat解析的时候是怎么知道当前的请求是post请求的呢，
	 * 就是通过'contentType'，
	 * 当'contentType'为"application/x-www-form-urlencoded",它才会去读取请求体数据。
	 * */
	//	import Qs from 'qs'

	export default {
		name: 'Discover',
		data() {
			return {
				src: '',
				active: '1',
				list: [],
				limit: 12,
				val: "1"
			}
		},
		watch: {
			active: function(val, oldVal) {
				// 这里就可以通过 val 的值变更来确定
				this.val = val
				/*数据转换*/
				var _this = this
				this.Axios.post('/showSimpleZone.do', _this.Qs.stringify({
					limit: _this.limit,
					page: _this.active,
					style: _this.val
				})).then((data) => {
					var data = data.data.data;
					console.log(data)
					this.list = data;
				})
			},
		},
		mounted() {
			var _this = this
			this.Axios.post('/showSimpleZone.do', _this.Qs.stringify({
				limit: _this.limit,
				page: _this.active,
				style: _this.val
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
	.benti{
		display: flex;
		flex-direction: column;
		height: 100%;
	}
</style>