<template>
<div class="elevator">
    <div class="eleCtn" v-for="(item,index) in anchorMap" :key="index" :class="{active:item.active}" @click="pointClickEvent(item)">
        <div  class="elePoint"></div>
        <div  class="text">{{item.title}}</div>
    </div>
</div>
</template>

<script>
export default {
    data () { 
        return {
            anchorMap:[
                {height:0,active:true,title:'TOP'}
            ],
            deviation:120//锚点偏差
        }
    },
    props:{
        mark: {// class名称
            type: String,
            default: () => {
                return 'class'
            }
        }             
    },
  watch: {
    // $route () {

    // }
  },
  mounted () {
    //渲染时获取所有锚点高度生成map
    document.querySelectorAll("."+this.mark).forEach((item)=>{
        this.anchorMap.push({height:item.offsetTop-this.deviation,active:false,title:item.innerHTML})
    })
    //向全页面绑定滚动监听
    // window.onscroll=()=>{
    //     let scrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop
    //     //判断在哪个区间点亮elevator
    //     this.lightUpPoint(scrollTop)
    //     console.log(scrollTop);
    // }
    let oldMethod=window.onscroll
    window.onscroll = ()=>{
        if(typeof oldMethod == 'function'){
            oldMethod.call(window);
        }
        this.scrollEvent.call(window)
    }
  },
  methods: {
    pointClickEvent(item){
        //放弃向外传递点击事件 在组件内完成滚动动作
        // document.querySelector('body').animate({scrollTop: item.height == 0 ? 0 : (item.height + 10)}, 'slow');
        window.scrollTo({ 
            top: item.height === 0 ? 0 : item.height, 
            behavior: "smooth" 
        });
    },
    scrollEvent(){
        let scrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop
        this.lightUpPoint(scrollTop)
    },
    lightUpPoint(currScorllTop){
        for (let i = 0; i < this.anchorMap.length; i++) {
            const item = this.anchorMap[i];
            const itemNext = this.anchorMap[i+1];
            if (currScorllTop>=item.height&&currScorllTop<(itemNext?itemNext.height:Infinity)) {
                if (!item.active) {
                    for (let k = 0; k < this.anchorMap.length; k++) {
                        const element = this.anchorMap[k];
                        element.active=false
                    }
                    item.active=true
                }
            }
        }
    }
  }
}
</script>

<style lang="scss" scoped>
.elevator{
	position: fixed;
	left: 1rem;
    top: 50%;
    transform: translateY(-50%);
	// top: 0;
	// bottom: 0;
	// margin: auto 0;
	background: rgba(0,0,0,.3);
	border-radius: 3px;
	transition: opacity .3s;
	z-index: 999;
    display: flex;
    flex-flow: column nowrap;
    padding: 20px 8px;
    .eleCtn{
        margin: 6px 0;
        cursor: pointer;
        display: flex;
        align-items: center;
        &.active{
            .elePoint{
                background: rgba(255,255,255,1);
                box-shadow: #fff 0 0 15px 4px;
            }
            .text{
                color: #fff;
                text-shadow: #fff 0 0 4px 4px;
            }
        }
        .elePoint{
            width: 12px;
            height: 12px;
            background: rgba(255,255,255,.6);
            border-radius: 50%;
            transition: all .3s;
        }
        .text{
            color: #d3d3d3;
            overflow: hidden;
            white-space: nowrap;
            font-size: 12px;
            width: 0;
            transition: all .3s;
        }
        &:hover{
            .text{
                color: #fff;
            }
        }
    }
    &:hover{
        .text{
            width: inherit;
            padding: 0 0 0 12px;
        }
    }
}
</style>
