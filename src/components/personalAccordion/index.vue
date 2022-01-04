<template>
  <div
    id="personalCardContainer"
    :style="'background:' + themeList[0][0] + ';'"
  >
    <img
      v-show="firstFlag"
      class="arrow"
      src="@/assets/images/source/arrow.png"
    />
    <div id="bg">
      <div
        v-for="(item, index) in cardObjArr"
        :key="index"
        class="personalCard"
        :class="{ active: activeNum === index }"
        @click="clickHandle(index)"
      >
        <div
          class="imgBox"
          :style="{
            backgroundImage: 'url(' + item.src + ')',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center top',
            backgroundSize: 'cover',
          }"
        ></div>
        <div class="right">
          <h1 style="font-size: 52px; margin: 0 0 40px; font-weight: 400">
            {{ item.name }}
          </h1>
          <p>{{ item.detail }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import avatar from '@/assets/images/avatar/avatar.jpg'

export default {
  data() {
    return {
      activeNum: 0,
      firstFlag: 1,
      vector: {},
      themeList: [
        // ["#002c4a", "#005584"],
        ["#032f4d", "#035887"],
        ["#9A1C05", "#DF8338"]
      ]
    }
  },
  props: {
    cardObjArr: {
      type: Array,
      default: () => {
        return [{
          name: '张天阳',
          detail: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi ipsa adipisci odit hic. Odit itaque sapiente asperiores. Laboriosam nihil, error nisi reiciendis, corporis eligendi adipisci ipsum odio nam dolorum alias!',
          src: avatar
        }, {
          name: '张天阳',
          detail: '        Odit consequuntur, quae delectus autem consequatur deserunt provident iure debitis, illum earum velit! Corrupti officiis impedit delectus odit! Repellat nam dolores quam, veniam non earum. Iste amet aspernatur expedita harum!',
          src: avatar
        }]
      }
    }
  },
  mounted() {
    this.vector = new this.$Vector("personalCardContainer", "personalCardContainer");
    let dom = document.querySelector('#personalCardContainer>canvas')
    // 在一个生命周期钩子内 js按顺序执行
    // this.clickHandle(0)
    // console.log(dom);
    // if (dom) {
    //   dom.style.opacity = 1
    // }
    // window.onload = function () {
    //   document.querySelector('#personalCardContainer>canvas').style.opacity = 1
    // }
    dom.style.opacity = 1
  },
  methods: {
    clickHandle(index) {
      this.firstFlag && (this.firstFlag = 0)
      this.activeNum = index
      this.vector(this.themeList[index]).set()
      this.$emit('changeActive', index)
    },
    // mouseEnterHandle() { this.vector(["#032f4d", "#0d5887"]).set() },
    // mouseLeaveHandle() { this.vector(["#002c4a", "#005584"]).set() },
  }
}
</script>

<style lang="scss" scoped>
::v-deep#personalCardContainer {
  width: 100%;
  height: 640px;
  // background: #ededed;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  color: #fff;
  .arrow {
    position: absolute;
    // animation: leftArrow 8s infinite;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 40px;
    right: 20px;
    // &.left {
    //   left: 20px;
    //   transform-origin: 50% 50%;
    //   transform: rotate(180deg);
    // }
  }
  #bg {
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    box-sizing: border-box;
    padding: 20px;
    position: relative;
    z-index: 20;
    .personalCard {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: center;
      width: 10%;
      height: 600px;
      transition: all 0.3s;
      box-sizing: border-box;
      text-align: center;
      padding: 20px;
      border: 1px solid transparent;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      &:not(:last-child) {
        border-right: 1px solid rgba(255, 255, 255, 0.1);
      }
      .imgBox {
        flex-shrink: 0;
        width: 400px;
        height: 400px;
        border-radius: 50%;
        overflow: hidden;
        position: relative;
        // transition: all .3s;
      }
      .right {
        font-weight: 100;
        flex-shrink: 0;
        width: 514px;
        height: 558px;
        box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 40px;
        // color: #a3a3a3;
      }
      &.active {
        width: 90%;
        cursor: initial;
        .imgBox {
          // margin: 20px auto 34px;
          // height: 120px;
          // width: 120px;
        }
      }
      &:not(.active):hover {
        transition: all 0.3s cubic-bezier(0.555, -0.375, 0, 1.615);
        width: 12%;
        & ~ .personalCard {
          width: 88%;
        }
      }
    }
  }
  & > canvas {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    transition: opacity 0.6s;
    opacity: 0;
  }
}
@keyframes leftArrow {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  15% {
    transform: translate(-20px, 0);
    opacity: 1;
  }
  30% {
    transform: translate(-30px, 0);
    opacity: 0;
  }
  100% {
    transform: translate(-30px, 0);
    opacity: 0;
  }
}
</style>
