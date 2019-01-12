<template>
	<!--<div id="">-->
		<div class="benti">
			<ul class="follUl otherUl">
			<li class="follList otherList" v-for="n in 7">
				<router-link to='/*' tag="div">
				<img src="#" width="100%" height="200"/>
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
		</div>
	<!--</div>-->
</template>

<script>
	export default {
  name: 'About',
  data () {
    return {
      src: ''
    }
  }
}
</script>

<style>
</style>