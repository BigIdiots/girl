import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Mall from '@/components/Mall'
import Follow from '@/components/Follow'
import About from '@/components/About'
import Search from '@/components/Search'
import MallSkin from '@/components/MallSkin'
import MallCosmetics from '@/components/MallCosmetics'
import MallRecommend from '@/components/MallRecommend'
import Discover from '@/components/Discover'
import DiscoverCommit from '@/components/DiscoverCommit'
import DiscoverSkin from '@/components/DiscoverSkin'
import DiscoverVideos from '@/components/DiscoverVideos'
import DiscoverMakeup from '@/components/DiscoverMakeup'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect:'/follow',
      component: HelloWorld,
      children:[
		     {
		    		path:'/follow',//关注
		    		component:Follow
		    },
		    {
		    		path:'/about',//附近
		    		component:About
		    },
		    {
		    		path:'/discover',//发现
		    		redirect:'/discoverCommit',
		    		component:Discover,
		    		children:[//发现菜单的子菜单
		    			{
		    				path:'/discoverCommit',
		    				component:DiscoverCommit
		    			},
		    			{
		    				path:'/discoverMakeup',
		    				component:DiscoverMakeup
		    			},
		    			{
		    				path:'/discoverSkin',
		    				component:DiscoverSkin
		    			},
		    			{
		    				path:'/discoverVideos',
		    				component:DiscoverVideos
		    			}
		    		]
		    }
      ]
    },
    {
    	path: '/mall',//商城部分
      component: Mall,
      redirect:'/MallRecommend',
      children:[
      	{
					path:'/MallRecommend',
					component:MallRecommend
				},
				{
					path:'/MallSkin',
					component:MallSkin
				},
				{
					path:'/MallCosmetics',
					component:MallCosmetics
				}
      ]
    },
    {
    	path: '/search',//搜索界面
      component: Search
    },
    {
    	path:'/login',//验证码登录
    	component:Login,
    }
  ]
})
