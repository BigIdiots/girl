<template>
	<div class="hello">
		<mt-header title="超值特惠">
		  <router-link to="/mall" slot="left">
		    <mt-button icon="back" @click="back()">返回</mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>

		
		<section ref="viewBox">
			<img src="../assets/logo.png" width="100%" height="145px" />
			<aside style="margin-bottom: 6px;">
			<router-link to="/MallActivity" class="activity">
				<div>
					<img src="" width="80" height="80" />
					<div>
						<p>春节来了</p>
						<p style="font-size: 16px;">抢春节特惠</p>
					</div>
				</div>
				<span>GO</span>
			</router-link>
			</aside>
			<mt-navbar v-model="active" :class="{'MallNav':'true','isFixed':istrue}">
				<mt-tab-item id="optional" style="padding: 10px 0;">任选囤货</mt-tab-item>
				<mt-tab-item id="advance" style="padding: 10px 0;">春节提前购</mt-tab-item>
				<mt-tab-item id="skin" style="padding: 10px 0;">护肤</mt-tab-item>
				<mt-tab-item id="cosmetics" style="padding: 10px 0;">彩妆</mt-tab-item>
			</mt-navbar>
			<mt-tab-container v-model="active" :swipeable="true">
				<mt-tab-container-item id="optional">
					<aside class="aside">
						<ul class="mallList">
							<li>
							<router-link to="/details" >
								<img src="" width="100%" height="150">
							</router-link>
								<p>滋润丰盈肌肤神器</p>
								<p>兰蔻精华修复肌底液</p>
								<p>￥200</p>
							</li>
						</ul>
					</aside>
				</mt-tab-container-item>

				<mt-tab-container-item id="advance">
					<aside class="aside">
						<ul class="mallList">
							<li>
								<router-link to="/details" >
								<img src="" width="100%" height="150">
							</router-link>
								<p>滋润丰盈肌肤神器</p>
								<p>兰蔻精华修复肌底液</p>
								<p>￥200</p>
							</li>
						</ul>
					</aside>
				</mt-tab-container-item>

				<mt-tab-container-item id="skin">
					<aside class="aside">
						<ul class="mallList">
							<li>
								<router-link to="/details" >
								<img src="" width="100%" height="150">
							</router-link>
								<p>滋润丰盈肌肤神器</p>
								<p>兰蔻精华修复肌底液</p>
								<p>￥200</p>
							</li>
						</ul>
					</aside>
				</mt-tab-container-item>
				
				<mt-tab-container-item id="cosmetics">
					<aside class="aside">
						<ul class="mallList">
							<li>
								<router-link to="/details" >
									<img src="" width="100%" height="150">
								</router-link>
									<p>滋润丰盈肌肤神器</p>
									<p>兰蔻精华修复肌底液</p>
									<p>￥200</p>
							</li>
						</ul>
					</aside>
				</mt-tab-container-item>
			</mt-tab-container>
		</section>
	</div>
</template>

<script>
	export default {
		name: 'MallSuperpreferential',
		data() {
			return {
				src: '',
				active: 'optional',
				istrue: ''
			}
		},
		mounted: function() {
			this.box = this.$refs.viewBox
			this.box.addEventListener('scroll', this.handleScroll, true) // 监听（绑定）滚轮滚动事件
		},
		methods: {
			handleScroll() {
				var scrollTop = this.$refs.viewBox.scrollTop
				if(scrollTop > 250) {
					this.istrue = true
				} else {
					this.istrue = false
				}
			},
			back(){
		  		this.$router.go(-1);
		  	}
		},
		destroyed: function() {
			window.removeEventListener('scroll', this.handleScroll); //  离开页面清除（移除）滚轮滚动事件
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
