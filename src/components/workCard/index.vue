<template>
  <div class="workCard" @click="wrokCardClickHandle(data)">
    <div
      class="liimg"
      :style="{
        backgroundImage: 'url(' + data.src + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        backgroundSize: 'cover',
      }"
    >
      <div class="zhezhao"></div>
    </div>
    <div class="litext">
      <h3 style="margin: 0 0 20px">{{ data.title }}</h3>
      <p>{{ data.detail }}</p>
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
.workCard {
  cursor: pointer;
  width: 50%;
  height: 250px;
  box-sizing: border-box;
  border: 1px transparent solid;
  padding: 15px;
  display: flex;
  transition: all 0.3s;
  .liimg {
    flex-shrink: 0;
    height: 220px;
    width: 220px;
    border-radius: 3px;
    .zhezhao {
      height: 100%;
      width: 100%;
      border-radius: 3px;
      // background: #000;
      // opacity: 0.2;
      transition: all 0.3s;
      box-shadow: 0 0 40px 20px inset rgba(0, 0, 0, 0.2);
    }
  }
  .litext {
    line-height: 25px;
    padding: 15px 40px;
    // word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &:hover {
    border: 1px rgba(0, 0, 0, 0.06) solid;
    background: rgba(0, 0, 0, 0.02);
    .liimg {
      .zhezhao {
        // opacity: 0;
        box-shadow: none;
      }
    }
  }
}
</style>
