<template>
	<div class="benti">
		<header>
			<div class="mint-searchbar" style="background: #fff;padding: 8px 40px;">
				<router-link to="/search" class="mint-searchbar-inner" style="background: #F1F1F1;">
					<i class="mintui mintui-search"></i>
					<input type="search" placeholder="大家都在搜“玩转春节”" class="mint-searchbar-core" style="background: #F1F1F1;">
				</router-link>
			</div>
		</header>
	<!--<nav id="">
		
		<router-link to="/discoverCommit" tag="span">推荐</router-link>
		<router-link to="/discoverMakeup" tag='span'>彩妆</router-link>
		<router-link to="/discoverSkin" tag='span'>护肤</router-link>
		<router-link to="/discoverVideos" tag='span'>视频</router-link>
	</nav>-->
		<mt-navbar v-model="active">
		  <mt-tab-item id="DiscoverCommit">推荐</mt-tab-item>
		  <mt-tab-item id="DiscoverMakeup">彩妆</mt-tab-item>
		  <mt-tab-item id="DiscoverSkin">护肤</mt-tab-item>
		  <mt-tab-item id="DiscoverVideos">视频</mt-tab-item>
		</mt-navbar>
		<!--<router-view @toparent="getdata"></router-view>-->
		<section>
			<mt-tab-container v-model="active" swipeable="true">
				<mt-tab-container-item id="DiscoverCommit"><!--推荐-->
					<ul class="discoverList">
						<li>
							<img src="" width="156" height="214">
							<p>数据模仿</p>
							<div class="lietu">
								<img src="*"/>
								<span>pink</span>
								<router-link to='#' tag="h5">点赞</router-link>
							</div>
						</li>
						<li>
							<img src="" width="156" height="214">
							<p>数据模仿</p>
							<div class="lietu">
								<img src="*"/>
								<span>pink</span>
								<router-link to='#' tag="h5">点赞</router-link>
							</div>
						</li>
						<li>
							<img src="" width="156" height="214">
							<p>数据模仿</p>
							<div class="lietu">
								<img src="*"/>
								<span>pink</span>
								<router-link to='#' tag="h5">点赞</router-link>
							</div>
						</li>
						<li>
							<img src="" width="156" height="214">
							<p>数据模仿</p>
							<div class="lietu">
								<img src="*"/>
								<span>pink</span>
								<router-link to='#' tag="h5">点赞</router-link>
							</div>
						</li>
					</ul>
				</mt-tab-container-item>
				
				<mt-tab-container-item id="DiscoverMakeup">
					
				</mt-tab-container-item>
				
				<mt-tab-container-item id="DiscoverSkin">
					
				</mt-tab-container-item>
				
				<mt-tab-container-item id="DiscoverVideos">
					
				</mt-tab-container-item>
			</mt-tab-container>
		</section>
	</div>
</template>

<script>
	export default {
  name: 'Discover',
  data () {
    return {
      src: '',
      arctive:'DiscoverCommit'
    }
  }
}
</script>

<style>
	nav{
		height: 30px;
		background: #E8E8E8;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	
	
	
</style>