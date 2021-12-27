<template>
  <div class="picCtn">
    <div v-for="(item, index) in dataList" :key="index" class="picCard">
      <img :src="item.src" alt="" />
      <p>{{ item.name }}</p>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  props: {
    data: {
      type: Object,
      default() {
        return {
          title: '2048',
          detail: '2048小游戏',
          src: work_2048,
          type: 'code',
          tag: ['css', 'html', 'js'],
          href: '/mypro/2048/2048.html'
        }
      }
    }
  },
  watch: {
    $route() {
    }
  },
  created() {
  },
  methods: {
    wrokCardClickHandle(item) {
      window.open(item.href)
    }
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
