import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Mall from '@/components/Mall'
import Follow from '@/components/Follow'
import About from '@/components/About'
import Search from '@/components/Search'
import Discover from '@/components/Discover'
import DiscoverCommit from '@/components/DiscoverCommit'
import DiscoverSkin from '@/components/DiscoverSkin'
import DiscoverVideos from '@/components/DiscoverVideos'
import DiscoverMakeup from '@/components/DiscoverMakeup'

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
    	path: '/mall',
      component: Mall
    },
    {
    	path: '/search',
      component: Search
    }
  ]
})
