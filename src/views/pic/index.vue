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
      <div v-for="(item, index) in dataList" :key="index" class="picCard">
        <img :src="item.src" alt="" />
        <p>{{ item.name }}</p>
      </div>
    </div>
    <!-- <img v-show="loading" src="@/assets/images/source/loading.gif" alt="" /> -->
  </div>
</template>

<script>
// import { authorRecommend, bangumi, userInfo } from '@/api/bilibili.js'
export default {
  name: 'pic',
  data() {
    return {
      dataList: [],
      files: require.context('@/assets/images/pic/', false).keys().map((item => item.replace('./', ''))),
      page: 1,
      pageSize: 5,
      loading: false
    }
  },
  methods: {
    async loadmore() {
      this.loading = true
      const tempArr = this.files.slice((this.page - 1) * this.pageSize, this.page * this.pageSize)
      if (tempArr.length == 0) {
        // this.loading = false
        return
      }
      for (let i = 0; i < tempArr.length; i++) {
        const element = tempArr[i];
        this.dataList.push({ name: element, src: await require('@/assets/images/pic/' + element) })
      }
      this.page += 1
      // this.loading = false
    },
    scrollHandle() {
      const container = document.querySelector('html')
      const viewH = container.clientHeight//可见高度
      const contentH = container.offsetHeight//内容高度
      const scrollTop = container.scrollTop;//滚动高度
      if (contentH - viewH - scrollTop <= 100) { //当滚动到距离底部100px时,
        this.loadmore()
      }
    },
  },
  computed: {
  },
  created() {
    // let aid = 'BV19K411c7uo'
    // authorRecommend(aid).then((res) => {
    //   console.log(res);
    // })
    // this.$api.test()
    window.onscroll = this.$debounce(this.scrollHandle, 300)
    this.loadmore()
  },
  beforeDestroy() {

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
