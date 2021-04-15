<template>
<div class="searchList">
  <div v-for="(item,index) in data" :key="index" class="searchListItem" @click="clickHandle(item)">
    <img :src="item.src" alt="">
    <div class="right_text">
      <h4 v-html="item.titleHTML"></h4>
      <p v-html="item.detailHTML"></p>
    </div>
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
        return [{
          title: 'java初级工程师',
          titleHTML: '', // 搜索结果用HTML插入项
          detailHTML: '', // 搜索结果用HTML插入项
          badge: '1', // 系统课程
          price: '462.00',
          oldPrice: '999.00',
          visited: '1824',
          collection: '294',
          detail: '【6大调优专题】：数据库 | Tomcat | JVM参数 | JVM-GC | Netty | Nginx ；1套高频调优面试集锦，为你的实力代言！',
          time: '3:15',
          rate: '4.8',
          freeFlag: false,
          direct: 'back',
          category: ['java'],
          src: ''
        }]
      }
    }
  },
  watch: {
    $route () {
    }
  },
  created () {
  },
  methods: {
    clickHandle (courseObj) {
      this.$store.dispatch('setCurrentCourse', courseObj)
      this.$router.push({ name: 'courseDetail' })
    }
  }
}
</script>

<style lang="scss">
.searchList{
  box-sizing: border-box;
  padding: 10px 20px;
  min-height: 400px;
  .searchListItem{
    cursor: pointer;
    padding: 15px 20px;
    display: flex;
    flex-flow: row nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    img{
      width: 210px;
      height: 120px;
      border-radius: 5px;
    }
    .right_text{
      margin: 0 0 0 30px;
      h4{
        margin: 10px 0 0 0;
        .light{
          color: red;
        }
      }
      p{
        color: #aaa;
        margin: 20px 0 0 0;
        max-height: 44px;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
      }
    }
    &:hover{
      background: #fbfbfb;
    }
    &:not(:last-child){
      border-bottom: 1px solid #f3f3f3;
    }
    .light{
      color: red;
    }
  }
}
</style>
