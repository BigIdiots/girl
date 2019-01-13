<template>
	<div class="hello">
		<mt-header title="购物车">
			  <router-link to="#" slot="left">
			    <mt-button icon="back" @click="back()">返回</mt-button>
			  </router-link>
			</mt-header>
		
		<section class="delete">
        <div class="container"  v-if="list.length">
  <ul>
    <li class="list-item " v-for="(item,index) in list " data-type="0">
      <div class="list-box" @touchstart.capture="touchStart" @touchend.capture="touchEnd" @click="skip">
        <img class="list-img" :src="item.imgUrl" width="100" height="100">
        <div class="list-content">
        	<div>
        		<p class="title">{{item.title}}</p>
          		<p class="tips">{{item.tips}}</p>
        	</div>
          	<div style="display: flex;justify-content: space-between;">
				<p class="title" style="width: 100%;">￥{{item.pric}}</p>
				<div class="cartBtn">
					<button class="title" @click="jian(index)" :disabled="item.count==1">-</button>
					<input class="txt title" type="text" :value="item.count" disabled>
					<button class="title" @click="add(index)">+</button>
				</div>
			</div>
        </div>
      </div>
      <div class="delete" @click="deleteItem" :data-index="index">删除</div>
    </li>
  </ul>
  
</div>
 <div v-else>
            购物车为空
        </div>
     </section>
     
     <footer style="padding: 0 30px;">
     	<!--底部写结算-->
     	<p style="font-size: 20px;font-weight: 700;">总价：¥{{totalPrice}}</p>
     		<mt-button @click="tishi" type="primary">立即购买</mt-button>
     </footer>
	</div>
	
</template>
<script>
	export default{
 name: 'ShopCart',
 data () {
 return {
 	list1:[],
  list : [
  {
   title : 'Chrome更新了' ,
   imgUrl : './static/images/Chrome.png' ,
   tips : '不再支持Flash视频播放' ,
   time : '上午 8:30',
   count:2,
   pric:255
  },
  {
   title : '电影新资讯' ,
   imgUrl : './static/images/Sina.png' ,
   tips : '电影《红海行动》上映以来票房暴涨，很多国人表示对国产电影有了新的改观' ,
   count:4,
   time : '上午 12:00',
   pric:55
  },
        {
   title : '聚焦两会·共筑中国梦' ,
   imgUrl : './static/images/video.png' ,
   tips : '习近平代表的两会故事' ,
   time : '下午 17:45',
   count:5,
   pric:25
        },
        {
   title : '微信团队' ,
   imgUrl : './static/images/Wechat.png' ,
   tips : '您的帐号有异常登录，如非本人操作，请及时修改密码' ,
   time : '昨天',
   count:1,
   pric:515
   
        }
  ],
  startX : 0 ,
  endX : 0 ,
 }
 },
 methods : {
 	tishi(){
 		this.$messagebox({
  title: '提示',
  message: '暂不支持此功能'
});
 	},
 	back(){
 		this.$router.go(-1)
 	},
 //跳转
 skip(){
  if( this.checkSlide() ){
  this.restSlide();
      }else{
//alert('You click the slide!')
      }
 },
 //滑动开始
 touchStart(e){
   // 记录初始位置
  this.startX = e.touches[0].clientX;
 },
 //滑动结束
 touchEnd(e){
            // 当前滑动的父级元素
  let parentElement = e.currentTarget.parentElement;
  // 记录结束位置
  this.endX = e.changedTouches[0].clientX;
            // 左滑
  if( parentElement.dataset.type == 0 && this.startX - this.endX > 30 ){
  this.restSlide();
  parentElement.dataset.type = 1;
  }
            // 右滑
  if( parentElement.dataset.type == 1 && this.startX - this.endX < -30 ){
  this.restSlide();
  parentElement.dataset.type = 0;
  }
  this.startX = 0;
  this.endX = 0;
 },
    //判断当前是否有滑块处于滑动状态
    checkSlide(){
  let listItems = document.querySelectorAll('.list-item');
  for( let i = 0 ; i < listItems.length ; i++){
  if( listItems[i].dataset.type == 1 ) {
   return true;
        }
  }
  return false;
    },
 //复位滑动状态
 restSlide(){
  let listItems = document.querySelectorAll('.list-item');
             // 复位
  for( let i = 0 ; i < listItems.length ; i++){
  listItems[i].dataset.type = 0;
  }
 },
 //删除
 deleteItem(e){
   // 当前索引
  let index = e.currentTarget.dataset.index;
  // 复位
  this.restSlide();
  // 删除
  this.list.splice(index,1);
 },
 add(index){
 	// 当前索引
//let index = e.currentTarget.dataset.index;
	this.list[index].count++;
	if(this.list[index].count>=99){
		this.list[index].count=99
	}
},
jian(index){
	this.list[index].count--;
	if(this.list[index].count<=1){
		this.list[index].count=1
	}
}
 },
 computed: {
        totalPrice: function() {
            var total = 0;
            for(var i = 0, len = this.list.length; i < len; i++) {
                total += this.list[i].pric * this.list[i].count;
            }
            //每隔三位加一个逗号
            return total.toString().replace(/\B(?=(\d{3})+$)/g, ',');
        }
    }
}
</script>

<style>
        div.cartBtn{
        	display: flex;
        }
    div.cartBtn>button {
	width: 25px;
	height: 25px;
	background: #cecece;
	line-height: 25px;
	text-align: center;
	border: none;
	outline: none;
}

div.cartBtn .txt {
	width: 40px;
	height: 20px;
	text-align: center;
	outline: none;
}
.page-title{
  text-align: center;
  font-size: 17px;
  padding: 10px 15px;
  position: relative;
}
.page-title:after{
  content: " ";
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 1px;
  border-bottom: 1px solid #ccc;
  color: #ccc;
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  z-index: 2;
}
.list-item{
  position: relative;
  height: 130px;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}
.list-item[data-type="0"]{
  transform: translate3d(0,0,0);
  overflow: hidden;
}
.list-item[data-type="1"]{
  transform: translate3d(-200px,0,0);
}
.list-item:after{
  content: " ";
  position: absolute;
  left: 20px;
  bottom: 0;
  right: 0;
  height: 1px;
  border-bottom: 1px solid #ccc;
  color: #ccc;
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  z-index: 2;
}
.list-box{
  padding: 10px 20px ;
  background: #fff;
  display: flex;
  align-items: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  font-size: 0;
}
.list-item .list-img{
  display: block;
  width: 100px;
  height: 100px;
}
.list-item .list-content{
  padding: 10px 0 10px 20px;
  height: 100px;
  display: flex;
  position: relative;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  overflow: hidden;
}
.list-item .list-content>div{
	width: 100%;
}
.list-item .title{
  display: block;
  color: #333;
  overflow: hidden;
  font-size: 15px;
  font-weight: bold;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.list-item .tips{
  display: block;
  overflow: hidden;
  font-size: 12px;
  color: #999;
  line-height: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.list-item .delete{
  width: 200px;
  height: 130px;
  background: #ff4949;
  font-size: 17px;
  color: #fff;
  text-align: center;
  line-height: 130px;
  position: absolute;
  top:0;
  right: -200px;
}
.cartfoot {
	padding: 0 30px;
}
</style>