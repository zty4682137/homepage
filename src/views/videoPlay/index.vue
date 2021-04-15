<template>
<div class="coursePlay 没错这就是个cosplay的谐音梗">
  <div class="videoHeader"><div class="returnBtn" @click="returnHandle"><i class="el-icon-arrow-left"></i> 返回</div> <p style="margin: 0 32px 0 128px;font-weight: bold;">正在播放：{{$store.state.currentVideo.title}}</p><p>时长：{{$store.state.currentVideo.time}}</p></div>
  <div class="left" :class="{collapse:ifCollapse}">
    <div class="collapseBtn" @click="ifCollapse=!ifCollapse"><i class="el-icon-caret-left"></i></div>
    <div class="menuContainer" :class="{collapse:ifCollapse}">
      <!-- <div class="videoMenu">
        <div class="videoMenuItem"></div>
      </div> -->
      <el-menu
        :default-openeds="comOpenNodes"
        @open="handleOpen"
        @close="handleClose"
        background-color="#222629"
        text-color="#fff"
        active-text-color="#ffd04b">
        <!-- return {
                courseId: item.courseId,
                title: item.title,
                sumTime: duration,
                courseList: item.videos.map(ite => {
                  duration += ite.duration
                  return {
                    chapterId: ite.chapterId,
                    title: ite.title,
                    time: ite.duration,
                    freeFlag: !!ite.isFree
                  }
                })
              } -->
        <el-submenu v-for="(item,index) in $store.state.videoList" :key="index" :index="index+''">
          <template slot="title">
            <span>{{item.title}}</span>
          </template>
          <!-- <el-menu-item-group> -->
            <!-- <template slot="title">分组一</template> -->
            <el-menu-item  v-for="(ite,index2) in item.courseList" :key="index2" :index="index+'-'+index2">{{ite.title}}</el-menu-item>
          <!-- </el-menu-item-group> -->
        </el-submenu>
      </el-menu>
    </div>
  </div>
  <div class="right"><myVideo/></div>
</div>
</template>

<script>
// 通讯实例
// import { getCourseList } from '@/api/course'
import myVideo from '@/components/vueVideoPlayer'
export default {
  name: 'coursePlay',
  components:{myVideo},
  data () {
    return {
      ifCollapse:false
    }
  },
  computed:{
    comOpenNodes(){
      let arrLength=this.$store.state.videoList.length
      let arr=[]
      for (let i = 0; i < arrLength; i++) {
        arr.push(i+'')
      }
      return arr
    }
  },
  methods: {
    handleOpen(){},
    handleClose(){},
    returnHandle(){
      this.$router.go(-1)
    }
  },
  created () {
    // const courseId = this.$store.state.currentCourse?.courseId
    const courseId = this.$store.state.currentCourse.courseId
    if (!courseId) {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
<style lang="scss" scoped>
.coursePlay{
  background: #222629;
  color: #fff;
  display: flex;
  padding: 60px 0 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  .videoHeader{
    background: #222629;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    height: 60px;
    color: #fff;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    .returnBtn{
      line-height: 60px;
      padding: 0 30px;
      cursor: pointer;
      &:hover{
        color: #ddd;
      }
    }
  }
  .left{
    flex: 0 0 240px;
    height: 100%;
    width: 240px;
    color: #fff;
    transition: all .2s;
    position: relative;
    &.collapse{
      width: 0;
      flex: 0 0 0;
    }
    .collapseBtn{
      position: absolute;
      width: 20px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      right: -20px;
      top: 40px;
      border-radius: 0 5px 5px 0;
      background: #222629;
      cursor: pointer;
      border: 2px solid #fff;;
    }
    .menuContainer{
      width: 240px;
      overflow: hidden;
      transition: all .2s;
      ::v-deep.el-menu{
        border-right:none !important;
      }
      &.collapse{
        width: 0;
      }
    }
  }
  .right{
    width: 100%;
    display: flex;
    align-items: center;
  }
}
</style>
