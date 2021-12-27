<template>
  <div class="header">
    <div class="headerContain">
      <!-- <div class="logo-box" @click="$router.push('/')">
            <img src="@/assets/images/base/logo.png" alt="">
            <i class="el-icon-circle-close" style="color:#aaa;font-size: 20px;"></i>
            <h3>天阳的个人站点</h3>
        </div> -->
      <div class="nav-menu">
        <router-link
          class="nav-item"
          :class="{ active: $route.name === 'info' }"
          :to="{ name: 'info' }"
          >Info</router-link
        >
        <router-link
          class="nav-item"
          :class="{ active: $route.name === 'playground' }"
          :to="{ name: 'playground' }"
          >PlayGround</router-link
        >
        <router-link
          class="nav-item"
          :class="{ active: $route.name === 'pic' }"
          :to="{ name: 'pic' }"
          >相册</router-link
        >
        <a class="nav-item" href="http://zhangtianyang.cn/blog/" target="_blank"
          >blog</a
        >
      </div>
      <!-- <div class="search-box" v-if="$route.name!=='searchResult'">
            <el-input
                size="small"
                @keydown.enter.native="searchEnterHandle"
                placeholder="搜索关键字"
                v-model="headerSearchInput">
                <i slot="suffix" class="el-input__icon el-icon-search"></i>
            </el-input>
        </div> -->
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      headerSearchInput: '',
      user: ''
    }
  },
  watch: {
    // $route () {

    // }
  },
  created() {
  },
  methods: {
    searchEnterHandle(e) {
      if (this.headerSearchInput) {
        this.$store.dispatch('setCurrentSearchKey', this.headerSearchInput)
        this.$router.push({ name: 'searchResult' })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  background-color: #ffffff;
  position: fixed;
  z-index: 999;
  top: 0;
  overflow: hidden;
  box-shadow: 0 2px 8px 0 rgba(7, 17, 27, 0.1);
  justify-content: center;
  .headerContain {
    width: 1280px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }
}

.logo-box {
  cursor: pointer;
  height: 100%;
  width: 220px;
  height: 60px;
  background: #ccc;
}

.nav-menu {
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  height: 100%;
  margin: 0 0 0 20px;
  .nav-item {
    line-height: 60px;
    display: block;
    height: 100%;
    padding-right: 28px;
    text-decoration: none;
    color: #555;
    transition: color 0.2s;
    &.active {
      color: #059adb;
    }
    &:hover {
      color: #059adb;
    }
  }
}

.search-box {
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: auto;
}

.search-box input {
  box-sizing: border-box;
  padding-left: 9px;
  background-color: #e9e9e8;
  border: none;
  border-radius: 7px;
  outline: none;
  width: 340px;
  height: 40px;
}

.search-box span {
  font-size: 20px;
  font-weight: bold;
  color: #545c63;
  position: relative;
  right: 30px;
}

.search-box span:hover {
  cursor: pointer;
  color: #333;
}
</style>
