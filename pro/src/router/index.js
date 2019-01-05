import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Mall from '@/components/Mall'
import Follow from '@/components/Follow'
import About from '@/components/About'
import Discover from '@/components/Discover'
import Search from '@/components/Search'


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
		    		component:Discover
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
