<template>
  <div id="app">
    <router-link to="/home">个人站</router-link>
    <a class="nav-item" href="https://www.baidu.com" target="_blank"
      >hexo博客</a
    >

    <!--PC页面-->
    <div class="container">
      <div class="leftCtn fl">
        <h1>张天阳的主页</h1>
        <br />
        <div class="leftTips">
          <span class="glyphicon glyphicon-chevron-left"></span>技术博客
        </div>
      </div>
      <div class="rightCtn fl top">
        <div class="rightTips">
          个人站<span class="glyphicon glyphicon-chevron-right"></span>
        </div>
      </div>
    </div>
    <div class="model"></div>
  </div>
</template>

<script>
// import '@/assets/jsLib/three.min.js'
// import floatBall from '@/assets/jsLib/floatBall.js'
export default {
  name: 'intro',
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
    test() {
      for (let i = 0; i < array.length; i++) {
        const element = array[i];

      }
    }
  },
  watch: {
    $route() {
      document.body.scrollTop = document.documentElement.scrollTop = 0
    }
  },
  mounted() {
    // this.$floatBall() // 暂时废弃
  }
}
</script>
<style lang="scss" scoped>
@media screen and (min-width: 800px) {
  .container {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .site-header {
    position: absolute;
    /*z-index: 200;*/
    top: 0;
    left: 0;
    background: -webkit-linear-gradient(bottom, #ededed, #fff);
    z-index: -1;
    /*background: #000;*/
  }
  .leftCtn {
    width: 60%;
    height: 100%;
    box-sizing: border-box;
    padding: 10rem;
    cursor: pointer;
    transition: all 1s;
  }
  .leftTips {
    position: absolute;
    font-size: 1.2rem;
    color: #444;
    width: 8rem;
    height: 2rem;
    left: 10rem;
    bottom: 10rem;
    opacity: 0;
    transition: 0.5s;
  }
  .leftTips span {
    display: inline-block;
    animation: leftArrow 2s infinite;
  }
  .leftCtn:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0 -13rem 10rem -7rem inset;
  }
  .leftCtn:hover .leftTips {
    opacity: 1;
  }
  .rightCtn {
    width: 40%;
    height: 100%;
    box-sizing: border-box;
    padding: 10rem;
    cursor: pointer;
    transition: all 1s;
    /*border-left: #e0e0e0 1px solid;*/
  }
  .rightTips {
    font-size: 1.2rem;
    color: #444;
    position: absolute;
    width: 12rem;
    height: 2rem;
    right: 10rem;
    bottom: 10rem;
    opacity: 0;
    transition: 0.5s;
  }
  .rightTips span {
    display: inline-block;
    animation: rightArrow 2s infinite;
  }
  .rightCtn:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0 -13rem 10rem -7rem inset;
  }
  .rightCtn:hover .rightTips {
    opacity: 1;
  }
  h1 {
    font-size: 3rem;
    color: #111;
  }
  h4 {
    font-size: 1.5rem;
    color: #444;
  }
  .fl {
    float: left;
  }
  .top {
    position: relative;
    z-index: 300;
  }
  .model {
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    /*transition: background .8s;*/
    z-index: 3000;
    display: none;
  }
  .load {
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: #ededed;
    /*transition: background .8s;*/
    z-index: 4000;
    overflow: hidden;
    box-sizing: border-box;
  }
  .loadImg {
    width: 10rem;
    height: 10rem;
    background: url("./assets/images/avatar.jpg") no-repeat center top;
    background-size: cover;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    animation: loading-Img 2s infinite;
  }
  .alert {
    display: none;
  }
}
/*小屏样式*/
@media screen and (max-width: 800px) {
  .container {
    display: none;
  }
  .site-header {
    display: none;
  }
  .model {
    display: none;
  }
  .load {
    display: none;
  }
  .alert {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: url("./assets/images/avatar.jpg") no-repeat center top;
    background-size: cover;
    text-align: center;
  }
  .alertImg {
    margin-top: 6rem;
    width: 50%;
  }
  .alertText {
    margin-top: 2.5rem;
  }
}
@keyframes fadeIn {
  100% {
    background: #000;
  }
}
@keyframes fadeOut {
  100% {
    opacity: 0;
  }
}
@keyframes loading-Img {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes leftArrow {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  30% {
    transform: translate(-20px, 0);
    opacity: 1;
  }
  100% {
    transform: translate(-30px, 0);
    opacity: 0;
  }
}
@keyframes rightArrow {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  30% {
    transform: translate(20px, 0);
    opacity: 1;
  }
  100% {
    transform: translate(30px, 0);
    opacity: 0;
  }
}
</style>
