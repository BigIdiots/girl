<template>
	<div class="hello">
		<mt-header title="购物车" style="background: #F8F8F8;color: #101010;">
			  <router-link to="#" slot="left">
			    <mt-button icon="back" @click="back()">返回</mt-button>
			  </router-link>
			</mt-header>
		
		<section class="delete">
             <div class="slider">
                   <div class="content" 
                      @touchstart='touchStart'
                      @touchmove='touchMove'
                      @touchend='touchEnd'
                      :style="deleteSlider"
                   >
                <!-- 插槽中放具体项目中需要内容         --> 
                    <slot>
                    	<div class="MallImg" slot="title">
							<img slot="icon" src="../assets/logo.png" width="100" height="100" style="display: inline-block;">
							<div class="MallList">
								<div>
									<p>淡夜茉莉版大宝</p>
									<p class="multiLine">好评大宝 100ml 管装x2</p>
								</div>
								<div>
									<div style="flex: 1;">
										<p>￥55</p>
										<mt-progress :value="45" :bar-height="10">
											<span slot="end" style="color: #8C8C8C;">已抢45%</span>
										</mt-progress>
									</div>
								</div>
							</div>
						</div>
                    </slot>
                   </div>
                   <div class="remove" ref='remove'>
                       		删除
                   </div>
            </div>
        
     </section>
     
     <footer>
     	<!--底部写结算-->
     	<router-link to="#" tag='em' style="font-size: 14px;border-right: 1px solid #8C8C8C;padding: 0 20px;">共计</router-link>
     	<router-link to="#" tag='em' style="font-size: 14px;border-right: 1px solid #8C8C8C;padding: 0 20px;">总价</router-link>
     	<router-link to="#" tag='em' style="font-size: 14px;border-right: 1px solid #8C8C8C;padding: 0 20px;">立即购买</router-link>
     </footer>
	</div>
	
</template>

<script>
	export default {
		name:'ShopCart',
     data() {
     return {
        startX:0,   //触摸位置
        endX:0,     //结束位置
        moveX: 0,   //滑动时的位置
        disX: 0,    //移动距离
        deleteSlider: '',//滑动时的效果,使用v-bind:style="deleteSlider"
     }
    
     },
     methods:{
         touchStart(ev){
                ev= ev || event
          //tounches类数组，等于1时表示此时有只有一只手指在触摸屏幕
    
            if(ev.touches.length == 1){
                    // 记录开始位置
                    this.startX = ev.touches[0].clientX;
                }
            },
         touchMove(ev){
                ev = ev || event;
                   //获取删除按钮的宽度，此宽度为滑块左滑的最大距离
                let wd=this.$refs.remove.offsetWidth;
                    if(ev.touches.length == 1) {
                        // 滑动时距离浏览器左侧实时距离
                        this.moveX = ev.touches[0].clientX
                
                        //起始位置减去 实时的滑动的距离，得到手指实时偏移距离
                        this.disX = this.startX - this.moveX;
                   console.log(this.disX)
                        // 如果是向右滑动或者不滑动，不改变滑块的位置
                        if(this.disX < 0 || this.disX == 0) {
                            this.deleteSlider = "transform:translateX(0px)";
                        // 大于0，表示左滑了，此时滑块开始滑动 
                        }else if (this.disX > 0) {
                             //具体滑动距离我取的是 手指偏移距离*5。
                            this.deleteSlider = "transform:translateX(-" + this.disX*5 + "px)";
                            
                            // 最大也只能等于删除按钮宽度 
                            if (this.disX*5 >=wd) {
                                this.deleteSlider = "transform:translateX(-" +wd+ "px)";
                             
                            }
                        }
                    }
              },
         touchEnd(ev){
              ev = ev || event;
              let wd=this.$refs.remove.offsetWidth;
              if (ev.changedTouches.length == 1) {
                    let endX = ev.changedTouches[0].clientX;
                      
                        this.disX = this.startX - endX;
                        console.log(this.disX)
                        //如果距离小于删除按钮一半,强行回到起点
                        
                        if ((this.disX*5) < (wd/2)) {
                          
                            this.deleteSlider = "transform:translateX(0px)";
                        }else{
                            //大于一半 滑动到最大值
                             this.deleteSlider = "transform:translateX(-"+wd+ "px)";
                        }
                    }
                }      
     }
     }
</script>

<style scoped >
.delete{
        margin-top:10px ;
        height: 20%;
}
.slider{
        width: 100%;
        height:140px;
        position: relative;

         user-select: none;
         }
         
.slider .content{
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background:#F8F8F8;
            z-index: 100;
            /*//    设置过渡动画*/
            transition: 0.3s;
        }
.slider  .remove{
            position: absolute;
            width:80px;
            height:80px;
            background:red;
            right: 0;
            top: 0;
            color:#fff;
            text-align: center;
            font-size: 20px;
            line-height: 80px;
        }
    
</style>