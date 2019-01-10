<template>
	<div class="hello">
		<mt-navbar v-model="active">
			<mt-tab-item id="DiscoverCommit">推荐</mt-tab-item>
			<mt-tab-item id="DiscoverMakeup">彩妆</mt-tab-item>
			<mt-tab-item id="DiscoverSkin">护肤</mt-tab-item>
			<mt-tab-item id="DiscoverVideos">视频</mt-tab-item>
		</mt-navbar>

		<section class="article">
			<mt-tab-container v-model="active" :swipeable="true">
				<mt-tab-container-item id="DiscoverCommit">
					<!--推荐-->
					<ul class="follUl otherUl">
						<li class="follList otherList" v-for="n in 7">
							<router-link to='/*' tag="div">
								<img src="#" width="100%" height="200" />
							</router-link>
							<div class="info">
								<p class="multiLine">秋季穿搭：提前准备好羽绒服是不是大多数妹子老师看到过爱设计费</p>
								<div>
									<img src="*" width="40" height="40" />
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

				<mt-tab-container-item id="DiscoverMakeup">
					<!--彩妆-->
					<ul class="follUl otherUl">
						<li class="follList otherList" v-for="n in 7">
							<router-link to='/*' tag="div">
								<img src="#" width="100%" height="200" />
							</router-link>
							<div class="info">
								<p class="multiLine">秋季穿搭：提前准备好羽绒服是不是大多数妹子老师看到过爱设计费</p>
								<div>
									<img src="*" width="40" height="40" />
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

				<mt-tab-container-item id="DiscoverSkin">
					<!--护肤-->
					<ul class="follUl otherUl">
						<li class="follList otherList" v-for="n in 7">
							<router-link to='/*' tag="div">
								<img src="#" width="100%" height="200" />
							</router-link>
							<div class="info">
								<p class="multiLine">秋季穿搭：提前准备好羽绒服是不是大多数妹子老师看到过爱设计费</p>
								<div>
									<img src="*" width="40" height="40" />
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

				<mt-tab-container-item id="DiscoverVideos">
					<!--视频-->
					<ul class="follUl otherUl">
						<li class="follList otherList" v-for="n in 7">
							<router-link to='/*' tag="div">
								<img src="#" width="100%" height="200" />
							</router-link>
							<div class="info">
								<p class="multiLine">秋季穿搭：提前准备好羽绒服是不是大多数妹子老师看到过爱设计费</p>
								<div>
									<img src="*" width="40" height="40" />
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
	export default {
		name: 'Discover',
		data() {
			return {
				src: '',
				active: 'DiscoverCommit'
			}
		}
	}
</script>

<style>
</style>