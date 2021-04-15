<template>
    <div class="banner">
      <div class="menu">
        <el-menu :collapse="false" background-color="#2B2B2B" text-color="#fff" @select="menuSelectHandle">
          <el-menu-item index="1">
            <span slot="title">Java开发 / Java架构</span>
          </el-menu-item>
          <el-menu-item index="2">
            <span slot="title">数据库 / sql / nosql</span>
          </el-menu-item>
          <el-menu-item index="3">
            <span slot="title">Web前端 / JS  /Jquery</span>
          </el-menu-item>
          <el-menu-item index="4">
            <span slot="title">大数据 / 云计算 / 系统</span>
          </el-menu-item>
          <el-menu-item index="5">
            <span slot="title">运维 / 测试 / 服务器</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="carousel">
        <el-carousel :interval="5000" height="360px">
          <el-carousel-item v-for="(item,index) in data" :key="index" @click="carouselClickHandle(item.url)">
            <img :src="item.src" :alt="item.alt" @click="carouselClickHandle(item.url)">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  props: {
    data: {
      type: Array,
      default: () => {
        return [
          {
            alt: '',
            src: ''
          },
          {
            alt: '',
            src: ''
          },
          {
            alt: '',
            src: ''
          }
        ]
      }
    }
  },
  created () {
  },
  methods: {
    carouselClickHandle (url) {
      window.open(url)
    },
    menuSelectHandle (index, indexPath) {
      const indexStr = index + ''
      if (indexStr === '1' || indexStr === '2' || indexStr === '4' || indexStr === '5') {
        this.$store.dispatch('setCourseFilter', ['back', 'all'])
        this.$router.push({ name: 'onTheJob' })
      } else if (indexStr === '3') {
        this.$store.dispatch('setCourseFilter', ['front', 'all'])
        this.$router.push({ name: 'onTheJob' })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.banner{
  min-width: 1280px;
  width: 100%;
  height: 360px;
  background: #2B2B2B;
  display: flex;
  border-radius: 5px;
  overflow: hidden;
  .menu{
    min-width: 200px;
    //复写el样式使其可以再collapse状态下显示内容
    ::v-deep.el-menu--collapse{
      width: inherit;
      border-right: none;
      // >.el-menu-item span{

      // }
      .el-submenu{
        .el-submenu__title{
          height: 72px;
          line-height: 70px;
          span{
            width: inherit;
            max-width: 150px;
            height: inherit;
            visibility:inherit;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .el-submenu__icon-arrow{
            display: inline-block !important;
          }
        }
      }
    }
    ::v-deep.el-menu{
      border-right: none;
      .el-menu-item{
        height: 72px;
        line-height: 70px;
        span{
            width: inherit;
            max-width: 150px;
            height: inherit;
            visibility:inherit;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
      }
    }
  }
  .carousel{
    width: 880px;
    .el-carousel__item{
      text-align: center;
      cursor: pointer;
      img{
        height: 100%;
      }
    }
  }
}
</style>
