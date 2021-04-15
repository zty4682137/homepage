<template>
<div class="videoContainer">
  <!-- 不能添加下面这个暂停cover的div元素 在暂停时会导致视频重置 原因不明 -->
  <!-- <div v-show="showCover" class="videoCover" @click="continuePlayHandle"><i class="el-icon-video-pause"></i></div> -->
  <div class="video-player-box" 
    ref="videoPlayer"
    @play="onPlayerPlay($event)"
    @pause="onPlayerPause($event)"
    @ready="playerReadied"
    @statechanged="playerStateChanged($event)"
    v-video-player:myVideoInstance="playerOptions">
  </div>
</div>
</template>
<script>
  export default {
    data() {
      return {
        myVideoInstance:'',
        showCover:false,
        playerOptions: {
          // videojs options
          muted: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          }],
          poster: "/static/images/author.jpg",
        }
      }
    },
    computed: {
      // player() {
      //   return this.$refs.videoPlayer.player
      // }
    },
    methods: {
      // listen event
      onPlayerPlay(player) {
        // console.log('player play!', player)
        this.showCover=false
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
        this.showCover=true
      },
      // ...player event
 
      // or listen state event
      playerStateChanged(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },
 
      // player is ready
      playerReadied(player) {
        console.log('the player is readied', player)
        // you can use it to do something...
        // player.[methods]
      },
      continuePlayHandle(){
        // 让视频重新播放
        // 没找到对应api 详情见 https://www.npmjs.com/package/vue-video-player
        // console.log(this.myVideoInstance);
      }
    }
    // mounted() {
    //   console.log('this is current videojs instance object', this.myVideoInstance)
    // }
  }
</script>
<style lang="scss" scoped>
.videoContainer{
  margin:0 auto;
  position: relative;
  .videoCover{
    position: absolute;
    z-index: 999;
    background: rgba(0,0,0,.6);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    cursor: pointer;
    i{
      font-size: 36px;
      height: 36px;
      width: 36px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
    }
    &:hover{
      i{
        color: #ccc;
      }
    }
  }
  ::v-deep.video-player-box{
    >div{
      max-width: 800px;
      max-height: 450px;
    }
    .vjs-big-play-button{
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
    }
  }
}
</style>
