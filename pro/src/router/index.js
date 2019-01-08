import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'//主页
import Mall from '@/components/Mall'//商城
import Follow from '@/components/Follow'//关注（首页）
import About from '@/components/About'//附近
import Search from '@/components/Search'//搜索
import Discover from '@/components/Discover'//发现
import Login from '@/components/Login'//登录
import Concern from '@/components/Concern' //我的关注
import MallActivity from '@/components/MallActivity'//商城-活动 
import MallSeckill from '@/components/MallSeckill' //商城-限时购
import MallPreferential from '@/components/MallPreferential' //商城-特惠
import Draft from '@/components/Draft'//我的草稿
import Collect from '@/components/Collect'//我的收藏
import CollectAll from '@/components/CollectAll'//我的收藏-所有收藏
import CollectAlbum from '@/components/CollectAlbum'//我的收藏-我的专辑
import Service from '@/components/Service'//客服中心
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
	    		component:Discover
		    }
      ]
    },
    {
    	path: '/mall',//商城部分
      component: Mall
    },
    {
    	path: '/search',//搜索界面
      component: Search
    },
    {
    	path:'/login',//验证码登录
    	component:Login
    },
    {
    	path:'/concern',//我的关注
    	component:Concern
    },
    {
    	path:'/MallActivity',//商城-活动
    	component:MallActivity
    },
    {
    	path:'/MallSeckill',//商城-限时购
    	component:MallSeckill
    },
    {
    	path:'/MallPreferential',//商城-特惠
    	component:MallPreferential
    },
    {
    	path:'/draft',//我的草稿
    	component:Draft
    },
    {
    	path:'/collect',//我的收藏
    	redirect:'/collectAll',
    	component:Collect,
    	children:[
    		{
    			path:'/collectAll',//所有收藏
    			component:CollectAll
    		},
    		{
    			path:'/collectAlbum',//我的专辑
    			component:CollectAlbum
    		}
    	]
    },
    {
    	path:'/service',//客服中心
    	component:Service
    }
  ]
})
