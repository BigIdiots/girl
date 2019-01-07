import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Mall from '@/components/Mall'
import Follow from '@/components/Follow'
import About from '@/components/About'
import Search from '@/components/Search'
import Discover from '@/components/Discover'
import Login from '@/components/Login'
import Concern from '@/components/Concern' 
import MallActivity from '@/components/MallActivity' 
import Draft from '@/components/Draft'
import Collect from '@/components/Collect'
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
    	path:'/MallActivity',
    	component:MallActivity
    },
    {
    	path:'/draft',//我的草稿
    	component:Draft
    },
    {
    	path:'/collect',//我的收藏
    	component:Collect,
    }
  ]
})
