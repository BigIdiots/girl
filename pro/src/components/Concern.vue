<template>
	<div class="cons">
		<header>
			<mt-header title="我的关注" style="background: #F8F8F8;color: #101010;">
			  <router-link to="#" slot="left">
			    <mt-button @click="handleClose" style="width: 30px;height: 30px;background: #E8E8E8;">返回</mt-button>
			  </router-link>
			</mt-header>
		</header>
		
		<mt-navbar v-model="active" style="background: #F8F8F8;">
			<mt-tab-item id="1">用户</mt-tab-item>
			<mt-tab-item id="2">商家</mt-tab-item>
			<mt-tab-item id="3">标签</mt-tab-item>
			<mt-tab-item id="4">专辑</mt-tab-item>
		</mt-navbar>
		
		<section>
			<mt-tab-container v-model="active" swipeable="true">
				<mt-tab-container-item id="1">
					<div class="top">
						<mt-cell title="你可能感兴趣的人" >
							<mt-button size="small" style="width: 80px;height: 20px;">查看更多</mt-button>
						</mt-cell>
						<mt-cell  title="标题1"  label="你可能感兴趣的人">
							 <img slot="icon" src=" " width="24" height="24" >
							<mt-button size="small" style="width: 80px;height: 20px;">关注</mt-button>
						</mt-cell>
					</div>
					
					<div class="bottom">
						<mt-cell title="我关注的好友" style="font-size: 14px;">
							<mt-button size="small" style="width: 80px;height: 20px;">查看更多</mt-button>
						</mt-cell>
						<mt-cell title="标题1" label="你可能感兴趣的人">
							<mt-button size="small" style="width: 80px;height: 20px;">关注</mt-button>
						</mt-cell>
					</div>
				</mt-tab-container-item>
				<mt-tab-container-item id="2">
					<mt-cell title="标题2" label="你可能感兴趣的人" is-link></mt-cell>
				</mt-tab-container-item>
				<mt-tab-container-item id="3">
					<mt-cell title="标题3" label="你可能感兴趣的人" is-link></mt-cell>
				</mt-tab-container-item>
				<mt-tab-container-item id="4">
					<mt-cell title="标题4" label="你可能感兴趣的人" is-link></mt-cell>
				</mt-tab-container-item>
			</mt-tab-container>
		</section>
	</div>
</template>

<script>
	export default {
	  name: 'Concern',
	  data () {
	    return {
	      src: '',
	      active:'1'
	    }
	  }
	}
</script>

<style>
	.top{
		margin: 8px 0 15px;
		background:#F8F8F8;;
	}
</style>