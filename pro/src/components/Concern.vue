<template>
	<!--我的关注-->
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
					<div class="tops" >
						<mt-cell title="你可能感兴趣的人" style="padding: 5px 0;">
							<mt-button size="small" style="width: 80px;height: 20px;">查看更多</mt-button>
						</mt-cell>
						<mt-cell  title="标题1"  label="你可能感兴趣的人" style="padding: 5px 0;">
							 <img slot="icon" src=" " width="40" height="40" style="display: inline-block;border-radius: 50%;">
							<mt-button size="small" style="width: 80px;height: 20px;">关注</mt-button>
						</mt-cell>
						<mt-cell  title="标题1"  label="你可能感兴趣的人" style="padding: 5px 0;">
							 <img slot="icon" src=" " width="40" height="40" style="display: inline-block;border-radius: 50%;">
							<mt-button size="small" style="width: 80px;height: 20px;">关注</mt-button>
						</mt-cell>
					</div>
					
					<div class="bottom">
						<mt-cell title="我关注的好友" style="font-size: 14px;">
							<mt-button size="small" style="width: 80px;height: 20px;">查看更多</mt-button>
						</mt-cell>
						<mt-cell  title="标题1"  label="你可能感兴趣的人" style="padding: 5px 0;">
							 <img slot="icon" src=" " width="40" height="40" style="display: inline-block;border-radius: 50%;">
							<mt-button size="small" style="width: 80px;height: 20px;">关注</mt-button>
						</mt-cell>
						<mt-cell  title="标题1"  label="你可能感兴趣的人" style="padding: 5px 0;">
							 <img slot="icon" src=" " width="40" height="40" style="display: inline-block;border-radius: 50%;">
							<mt-button size="small" style="width: 80px;height: 20px;">关注</mt-button>
						</mt-cell>
					</div>
				</mt-tab-container-item>
				
				<mt-tab-container-item id="2">
					<div class="tops">
						<mt-cell title="你可能感兴趣的商家" style="padding: 5px 0;">
							<mt-button size="small" style="width: 80px;height: 20px;">查看更多</mt-button>
						</mt-cell>
						<mt-cell  title="标题1"  label="你可能感兴趣的商家" style="padding: 5px 0;">
							 <img slot="icon" src=" " width="40" height="40" style="display: inline-block;border-radius: 50%;">
							<mt-button size="small" style="width: 80px;height: 20px;">关注</mt-button>
						</mt-cell>
						<mt-cell  title="标题1"  label="你可能感兴趣的商家" style="padding: 5px 0;">
							 <img slot="icon" src=" " width="40" height="40" style="display: inline-block;border-radius: 50%;">
							<mt-button size="small" style="width: 80px;height: 20px;">关注</mt-button>
						</mt-cell>
					</div>
					
					<div class="bottom">
						<mt-cell title="我关注的商家" style="font-size: 14px;">
							<mt-button size="small" style="width: 80px;height: 20px;">查看更多</mt-button>
						</mt-cell>
						<mt-cell  title="标题1"  label="你可能感兴趣的商家" style="padding: 5px 0;">
							 <img slot="icon" src=" " width="40" height="40" style="display: inline-block;border-radius: 50%;">
							<mt-button size="small" style="width: 80px;height: 20px;">关注</mt-button>
						</mt-cell>
						<mt-cell  title="标题1"  label="你可能感兴趣的商家" style="padding: 5px 0;">
							 <img slot="icon" src=" " width="40" height="40" style="display: inline-block;border-radius: 50%;">
							<mt-button size="small" style="width: 80px;height: 20px;">关注</mt-button>
						</mt-cell>
					</div>
				</mt-tab-container-item>
				<mt-tab-container-item id="3">
					<div class="tops">
						<mt-cell title="你可能感兴趣的标签" style="padding: 5px 0;">
							<mt-button size="small" style="width: 80px;height: 20px;">查看更多</mt-button>
						</mt-cell>
						<mt-cell  title="标题1"  label="你可能感兴趣的标签" style="padding: 5px 0;">
							 <img slot="icon" src=" " width="40" height="40" style="display: inline-block;border-radius: 50%;">
							<mt-button size="small" style="width: 80px;height: 20px;">关注</mt-button>
						</mt-cell>
						<mt-cell  title="标题1"  label="你可能感兴趣的标签" style="padding: 5px 0;">
							 <img slot="icon" src=" " width="40" height="40" style="display: inline-block;border-radius: 50%;">
							<mt-button size="small" style="width: 80px;height: 20px;">关注</mt-button>
						</mt-cell>
					</div>
					
					<div class="bottom" >
						<mt-cell title="我关注的标签" style="font-size: 14px;">
							<mt-button size="small" style="width: 80px;height: 20px;">查看更多</mt-button>
						</mt-cell>
						<mt-cell  title="标题1"  label="你可能感兴趣的标签" style="padding: 5px 0;">
							 <img slot="icon" src=" " width="40" height="40" style="display: inline-block;border-radius: 50%;">
							<mt-button size="small" style="width: 80px;height: 20px;">关注</mt-button>
						</mt-cell>
						<mt-cell  title="标题1"  label="你可能感兴趣的标签" style="padding: 5px 0;">
							 <img slot="icon" src=" " width="40" height="40" style="display: inline-block;border-radius: 50%;">
							<mt-button size="small" style="width: 80px;height: 20px;">关注</mt-button>
						</mt-cell>
					</div>
				</mt-tab-container-item>
				<mt-tab-container-item id="4">
					<div class="tops" style="width: 100%;">
						<mt-cell  title="个人专辑"  label="你可能感兴趣的标签" style="padding: 5px 0;">
							<mt-button size="small" style="width: 80px;height: 20px;">已关注</mt-button>
						</mt-cell>
						<mt-cell  style="padding: 5px 0;">
							<!--<mt-button size="small" style="width: 80px;height: 20px;">已关注</mt-button>-->
							<img src="" width="20" height="20"/>
						</mt-cell>
					</div>
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
	.tops{
		margin: 8px 0 15px;
		background: #F8F8F8;
	}
	.mint-cell{
		background: #F8F8F8;
	}
	.mint-button--default{
		background: #FFFFFF;
	}
</style>