<template>
	<div class="hello">
		<mt-header title="限定美妆专场">
		  <router-link to="/mall" slot="left">
		     <mt-button icon="back" @click="back">返回</mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>

			<mt-navbar v-model="active" @scoll="fixation($event)" style="background: #AAAAAA;">
				<mt-tab-item id="limit" style="padding: 10px 0;">18限定</mt-tab-item>
				<mt-tab-item id="recommend" style="padding: 10px 0;">限量好物</mt-tab-item>
				<mt-tab-item id="album" style="padding: 10px 0;">颜控必入</mt-tab-item>
			</mt-navbar>
		<section style="margin-top: 2px;">
			
			<mt-tab-container v-model="active" :swipeable="true">
				<!--18限定-->
				<mt-tab-container-item id="limit">
					<mt-cell class="Mall">
						<div class="MallImg" slot="title">
							<img slot="icon" src="../assets/logo.png" width="120" height="120" style="display: inline-block;">
							<div class="MallList">
								<div>
									<p>当家花旦烈焰蓝金</p>
							  		<p class="multiLine">Dior迪奥 红管口红 555 Ultra Kiss 3.2g</p>
								</div>
							  	<div>
							  		<p>￥245</p>
							  		<mt-button type="primary">加入购物车</mt-button>
							  	</div>
							</div>
						</div>
					</mt-cell>
				</mt-tab-container-item>
				<!--限量好物-->
				<mt-tab-container-item id="recommend">
					<aside class="aside">
						<ul class="mallList">
							<li>
								<img src="" width="150" height="150">
								<p>滋润丰盈肌肤神器</p>
								<p>兰蔻精华修复肌底液</p>
								<p>￥200</p>
							</li>
						</ul>
					</aside>
				</mt-tab-container-item>
				<!--颜控必入-->
				<mt-tab-container-item id="album">
					<aside class="aside">
						<ul class="mallList">
							<li>
								<img src="" width="150" height="150">
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
  name: 'MallLimit',
  data () {
    return {
      src: '',
      active:'limit'
    }
  },
  methods:{
  	back(){
  		this.$router.go(-1);
  	},
  	fixation(e){
  		
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
