<template>
  <div>
    <h1
      style="
        margin: 60px auto 40px;
        text-align: center;
        font-size: 54px;
        border-bottom: 1px solid #eee;
        padding: 20px;
      "
    >
      相册
    </h1>
    <div class="picCtn">
      <!-- <waterfall>
      <waterfallSilde v-for="(item, index) in dataList" :key="index">
        <img :src="item.src" alt="" />
      </waterfallSilde>
    </waterfall> -->
      <!-- <client-only>
      <LazyWaterfall />
    </client-only> -->
      <div v-for="(item, index) in dataList" :key="index" class="picCard">
        <img :src="item.src" alt="" />
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// import { authorRecommend, bangumi, userInfo } from '@/api/bilibili.js'
import gitCalendar from '@/assets/images/pic/gitCalendar.jpg'
import sheep from '@/assets/images/source/sheep.png'
import cloud from '@/assets/images/source/cloud.png'
import test1 from '@/assets/images/pic/test1.jpg'
import test2 from '@/assets/images/pic/test2.jpg'
import test3 from '@/assets/images/pic/test3.jpg'
import test4 from '@/assets/images/pic/test4.gif'
import test5 from '@/assets/images/pic/test5.jpg'
import test6 from '@/assets/images/pic/test6.jpg'
import test7 from '@/assets/images/pic/test7.jpg'
import cat1 from '@/assets/images/pic/cat1.jpg'
import cat2 from '@/assets/images/pic/cat2.jpg'
export default {
  name: 'pic',
  data() {
    return {
      dataList: [
        { name: 'git工作记录', src: gitCalendar },
        { name: '羊', src: sheep },
        { name: 'cloud', src: cloud },
        { name: 'test1', src: test1 },
        { name: 'test2', src: test2 },
        { name: 'test3', src: test3 },
        { name: 'test4', src: test4 },
        { name: 'test5', src: test5 },
        { name: 'test6', src: test6 },
        { name: 'test7', src: test7 },
        { name: 'cat1', src: cat1 },
        { name: 'cat2', src: cat2 },
      ]
    }
  },
  methods: {
  },
  computed: {
  },
  created() {
    // let aid = 'BV19K411c7uo'
    // authorRecommend(aid).then((res) => {
    //   console.log(res);
    // })
  }
}
</script>
<style lang="scss" scoped>
.picCtn {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  .picCard {
    max-width: 50%;
    padding: 40px 20px;
    box-sizing: border-box;
    vertical-align: middle;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0);
    transition: all 0.3s;
    cursor: pointer;
    img {
      max-width: 100%;
      margin: 0 0 24px;
    }
    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.07);
      background: rgba(0, 0, 0, 0.02);
    }
  }
}
</style>
