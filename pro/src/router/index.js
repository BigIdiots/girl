import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Follow from '@/components/Follow'
import Discover from '@/components/Discover'
import About from '@/components/About'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
      		{
      			path:'/follow',
      			component:Follow
      		},
      		{
      			path:'/discover',
      			component:Discover
      		},
      		{
      			path:'/about',
      			component:About
      		}
      ]
    }
  ]
})
