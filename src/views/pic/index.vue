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
import gitCalendar from '@/assets/images/pic/gitCalendar.jpg'
import sheep from '@/assets/images/sheep.png'
import cloud from '@/assets/images/cloud.png'
import IDcard from '@/assets/images/IDcard.png'
import test1 from '@/assets/images/pic/test1.jpg'
import test2 from '@/assets/images/pic/test2.jpg'
import test3 from '@/assets/images/pic/test3.jpg'
import test4 from '@/assets/images/pic/test4.gif'
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
      ]
    }
  },
  methods: {
  },
  computed: {
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
