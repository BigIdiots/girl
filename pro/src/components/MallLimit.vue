<template>
	<div class="hello">
		<mt-header title="限定美妆专场">
		  <router-link to="/mall" slot="left">
		     <mt-button icon="back"></mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>

			<mt-navbar v-model="active" style="background: #AAAAAA;">
				<mt-tab-item id="limit" style="padding: 10px 0;">18限定</mt-tab-item>
				<mt-tab-item id="recommend" style="padding: 10px 0;">限量好物</mt-tab-item>
				<mt-tab-item id="album" style="padding: 10px 0;">颜控必入</mt-tab-item>
			</mt-navbar>
		<section style="margin-top: 2px;">
			
			<mt-tab-container v-model="active" swipeable="true">
				<!--18限定-->
				<mt-tab-container-item id="limit">
					<mt-cell class="Mall" v-for="n in 5">
						<div class="MallImg" slot="title">
							<img slot="icon" src="../assets/logo.png" width="120" height="120" style="display: inline-block;">
							<div class="MallList">
								<div>
									<p>当家花旦烈焰蓝金</p>
							  		<p>Dior迪奥 红管口红 555 Ultra Kiss 3.2g</p>
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
							<li v-for="n in 9">
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
							<li v-for="n in 9">
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	section .mallBtn{
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 8px 0;
	}
	section .mallBtn button{
		width: 200px;
		height: 40px;
		border-radius: 20px;
	}
</style>
