import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Mall from '@/components/Mall'
import Follow from '@/components/Follow'
import About from '@/components/About'
import Discover from '@/components/Discover'
import Search from '@/components/Search'
import Commit from '@/components/Commit'
import Skin from '@/components/Skin'
import Videos from '@/components/Videos'
import Makeup from '@/components/Makeup'
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
		    		path:'/follow',
		    		component:Follow
		    },
		    {
		    		path:'/about',
		    		component:About
		    },
		    {
		    		path:'/discover',
		    		component:Discover,
		    		children:[//发现菜单的子菜单
		    			{
		    				path:'/commit',
		    				component:Commit
		    			},
		    			{
		    				path:'/makeup',
		    				component:Makeup
		    			},
		    			{
		    				path:'/skin',
		    				component:Skin
		    			},
		    			{
		    				path:'/videos',
		    				component:Videos
		    			}
		    		]
		    }
      ]
    },
    {
    	path: '/mall',
      component: Mall
    },
    {
    	path: '/search',
      component: Search
    }
  ]
})
