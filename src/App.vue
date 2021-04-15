<template>
  <div id="app">
    <table></table>
    <pageHeader />
    <router-view class="appCtn" />
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
  },
  watch: {
    $route() {
      document.body.scrollTop = document.documentElement.scrollTop = 0
    }
  }
}
</script>
<style lang="scss">
#app {
  // height: 100%;
  width: 100%;
  margin: 60px auto 0;
  padding: 0 0 300px;
  // & > canvas {
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   z-index: -9999;
  // }
}
.appCtn {
  width: 1280px;
  margin: 0 auto 0;
  // position: absolute;
  // top: 60px;
  // right: 0;
  // bottom: 0;
  // left: 0;
}
</style>
