import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'//主页
import Follow from '@/components/Follow'//关注（首页）
import About from '@/components/About'//附近
import Search from '@/components/Search'//搜索
import Discover from '@/components/Discover'//发现
import Login from '@/components/Login'//登录
import Mall from '@/components/Mall'//商城
import MallActivity from '@/components/MallActivity'//商城-活动 
import MallSeckill from '@/components/MallSeckill' //商城-限时购
import MallPreferential from '@/components/MallPreferential' //商城-特惠
import MallSuperPreferential from '@/components/MallSuperPreferential' //商城-超值特惠
import MallPopular from '@/components/MallPopular' //商城-人气产品
import MallLimit from '@/components/MallLimit' //商城-人气产品-限定美妆专场
import Concern from '@/components/Concern' //我的关注
import Draft from '@/components/Draft'//我的草稿
import Collect from '@/components/Collect'//我的收藏
import CollectAll from '@/components/CollectAll'//我的收藏-所有收藏
import CollectAlbum from '@/components/CollectAlbum'//我的收藏-我的专辑
import Service from '@/components/Service'//客服中心
import News from '@/components/News'//消息
import NewsPraise from '@/components/NewsPraise'//消息-收到的赞和收藏
import NewsDiscuss from '@/components/NewsDiscuss'//消息-收到的评论
import NewsAdd from '@/components/NewsAdd'//消息-新增关注
import NewsInform from '@/components/NewsInform'//消息-通知消息
import NewsPrivate from '@/components/NewsPrivate'//消息-私信
import Details from '@/components/Details'//商品详情
import ShareDetail from '@/components/ShareDetail'//分享详情
import Official from '@/components/Official'//客服对话
import Setting from '@/components/Setting'//设置  未写完
import Register from '@/components/Register'//注册
import YzmLogin from '@/components/YzmLogin'//验证码登录
import ForgetPass from '@/components/ForgetPass'//忘记密码
import ResetPass from '@/components/ResetPass'//重置密码
import Myself from '@/components/Myself'//我的资料
import Indent from '@/components/Indent'//订单
import ShopCart from '@/components/ShopCart'//购物车
import Payment from '@/components/Payment'//订单支付
import PersonData from '@/components/PersonData'//个人资料
import Review from '@/components/Review'
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
    	path:'/YzmLogin',//验证码登录
    	component:YzmLogin
    },
    {
    	path:'/login',//手机号登录
    	component:Login
    },
    {
    	path:'/ForgetPass',//验证码登录
    	component:ForgetPass
    },
    {
    	path:'/ResetPass',//验证码登录
    	component:ResetPass
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
    	path:'/MallSuperPreferential',//商城-超值特惠
    	component:MallSuperPreferential
    },
    {
    	path:'/MallPopular',//商城-人气产品
    	component:MallPopular
    },
    {
    	path:'/MallLimit',//商城-人气产品-限定美妆专场
    	component:MallLimit
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
    },
    {
    	path:'/news',//消息
    	component:News
    },
			{
				path:'/newsPraise',//消息-收到的赞
				component:NewsPraise
			},
			{
				path:'/newsDiscuss',//消息-收到的评论
				component:NewsDiscuss
			},
			{
				path:'/newsAdd',//消息-新增关注
				component:NewsAdd
			},
			{
				path:'/newsInform',//消息-通知消息
				component:NewsInform
			},
			{
				path:'/newsPrivate',//消息-私信
				component:NewsPrivate
			},
			{
				path:'/details',//商品详情
				component:Details
			},
			{
				path:'/ShareDetail',//商品详情
				component:ShareDetail
			},
			{
				path:'/official',//客服对话
				component:Official
			},
			{
				path:'/setting',//设置
				component:Setting
			},
			{
				path:'/myself',//我的资料
				component:Myself
			},
			{
				path:'/register',//注册
				component:Register
			},
			{
				path:'/indent',//订单
				component:Indent
			},
			{
				path:'/shopcart',//购物车
				component:ShopCart
			},
			{
				path:'/payment',//订单支付
				component:Payment
			},
			{
				path:'/personData',//个人资料
				component:PersonData
			},
			{
				path:'/review',//评论
				component:Review
			}
  ]
})
