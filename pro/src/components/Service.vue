<template>
	<!--客服中心-->
	<div class="services">
		<header>
			<mt-header title="客服中心" style="background: #F8F8F8;color: #101010;">
			  <router-link to="#" slot="left">
			    <mt-button @click="handleClose" style="width: 30px;height: 30px;background: #E8E8E8;">返回</mt-button>
			  </router-link>
			</mt-header>
		</header>
		<img src="../../build/logo.png" width="100%" height="185"/>
		<mt-navbar v-model="active" style="background: #F8F8F8;">
			<mt-tab-item id="shop">商城问题</mt-tab-item>
			<mt-tab-item id="community">社区问题</mt-tab-item>
		</mt-navbar>
		
		<section>
			<mt-tab-container v-model="active" swipeable="true">
				<mt-tab-container-item id="shop">
					<!--商城-->
					<div class="servicesShop">
						<span >
							<p>物流问题</p>
							<p>订单问题</p>
							<p>退换货问题</p>
						</span>
						<div id="apps">
					        <div class="list" v-for="(l,i) in lists" :key="i">
					            <div class="title" @click="toggle(i)">{{l.title}}</div>
					            <ul class="item" v-show="l.show">
					                <li v-for="(item,index) in l.items" :key="index">{{item}}</li>
					            </ul>
					        </div>
					    </div>
					</div>
				</mt-tab-container-item>
				
				<mt-tab-container-item id="community">
					<!--社区-->
				</mt-tab-container-item>
			</mt-tab-container>
		</section>
		
		<footer>
			
		</footer>
	</div>
</template>

<script>
	export default {
		el:'#app',
	  name: 'Service',
	  data () {
	    return {
	      src: '',
	      active:'shop',
	      lists: [
                   { title: '我的同学', items: ["张三", "李四", "王五"], show: false },
                    { title: '我的同事', items: ["张三1", "李四1", "王五1"], show: false },
                    { title: '我的家人', items: ["张三2", "李四2", "王五2"], show: false }
                ]
	    }
	  },
	  methods:{
	  	 toggle: function(index){
                   this.lists.forEach((list, i) => list.show = i == index)
                }
	  }
	}
</script>

<style>
		li{
            padding-left: 10px;
            line-height: 2;
        }

        li:hover{
            background-color: #eee;
        }

        /*.list{
            padding: 0 50px;
        }*/

        .list .title{
            border: 1px solid #ccc;
            padding: 10px 5px;
            cursor: pointer;
            -webkit-user-select: none;
            user-select: none;
            font-size: 18px;
            font-weight: bold;
        }

        .list .item{
            border: 1px solid #ccc;
        }
        .servicesShop{
        	margin-top: 10px;
        	display: flex;
        	justify-content: space-around;
        	/*align-items: center;*/
        }
        #apps{
        	width: 100%;
        }
        .servicesShop span{
        	background: #E8E8E8;
        	
        }
        .servicesShop p{
        	line-height: 23px;
        	padding: 17px;
        }
</style>