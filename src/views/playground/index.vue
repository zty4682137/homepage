<template>
  <div class="playground">
    <h1
      style="
        margin: 60px auto 40px;
        text-align: center;
        font-size: 54px;
        border-bottom: 1px solid #eee;
        padding: 20px;
      "
    >
      PLAYGROUND
    </h1>
    <workFilter v-model="category" />
    <div id="otherwork">
      <div class="workCtn">
        {{ files }}
        <workCard v-for="(item, index) in showList" :key="index" :data="item" />
      </div>
    </div>
  </div>
</template>

<script>
// import banana from '@/assets/images/work_img/work_banana.png'
import work_banana from '@/static/mypro/banana/work_banana.png'
import work_2048 from '@/static/mypro/2048/work_2048.png'
import work_sunAndEarth from '@/static/mypro/canvasSunEarth/work_sunAndEarth.png'
import work_cube from '@/static/mypro/cube/work_cube.png'
import work_saolei from '@/static/mypro/saolei/work_saolei.png'
import work_3dcontrol from '@/static/mypro/threeTest/work_3dcontrol.png'
import work_halo from '@/static/mypro/threeTest/work_halo.png'
// import bananaPage from '@/assets/mypro/banana.html'
// var fs = require("fs");
// import fs from 'fs'


export default {
  // layout: 'default',
  name: 'playground',
  components: {
  },
  data() {
    // 引入bili api request.context遍历引入 更改html入口index
    // 引用vue video 尝试视频展示 
    // 做分类 （代码/视频/画）（二级细化 后台管理/展示页）
    // 此页面无法用require做循环引入 这里的资源放在static文件夹
    return {
      category: ['all', 'all'],
      dataList: [
        {
          title: 'BANANA!!!!!',
          detail: '全部用html/css渐变、倒角、阴影构成',
          src: work_banana,
          type: 'code',
          tag: ['css', 'html'],
          href: '/mypro/banana/index.html'//在static中的项目会放在根目录中 https://zh.nuxtjs.org/docs/2.x/directory-structure/static
        },
        {
          title: '2048',
          detail: '2048小游戏 方向键控制',
          src: work_2048,
          type: 'code',
          tag: ['css', 'html', 'js'],
          href: '/mypro/2048/index.html'
        },
        {
          title: 'canvs小地球',
          detail: 'canvs小地球 基于svg绘图',
          src: work_sunAndEarth,
          type: 'code',
          tag: ['svg'],
          href: '/mypro/canvasSunEarth/index.html'
        },
        {
          title: 'CUBE',
          detail: 'CUBE',
          src: work_cube,
          type: 'code',
          tag: ['css', 'html'],
          href: '/mypro/cube/index.html'
        },
        {
          title: '扫雷',
          detail: '扫雷',
          src: work_saolei,
          type: 'code',
          tag: ['js'],
          href: '/mypro/saolei/index.html'
        },
        {
          title: '3D镜头',
          detail: '基于three.js',
          src: work_3dcontrol,
          type: 'code',
          tag: ['canvas', 'js'],
          href: '/mypro/threeTest/index.html'
        },
        // {
        //   title: '光环绕',
        //   detail: '基于three.js的光源移动渲染',
        //   src: work_halo,
        //   type: 'code',
        //   tag: ['canvas', 'js'],
        //   href: '/mypro/threeTest/index.html'
        // },
      ],
      showList: []
    }
  },
  methods: {
    updateShowList() {
      this.showList = this.dataList.filter(item => {
        let temp1 = this.category[0] === 'all' || item.type === this.category[0]
        let temp2 = this.category[1] === 'all' || item.tag.includes(this.category[1])
        return temp1 && temp2
      })
    },
    // getStaticFile() {
    //   fs.readdir(__dirname, (err, files) => {
    //     if (err) {
    //       console.log(err);
    //     } else {
    //       files.forEach(function (file) {
    //         console.log(file);
    //         // var filePath = path.normalize(__dirname + '/' + file);
    //         // fs.stat(filePath, function (err, stat) {
    //         //   if (stat.isFile()) {
    //         //     console.log(filePath + ' is: ' + 'file');
    //         //   }
    //         //   if (stat.isDirectory()) {
    //         //     console.log(filePath + ' is: ' + 'dir');
    //         //   }
    //         // });
    //       });
    //     }
    //   })
    // }
  },
  watch: {
    category() {
      this.updateShowList()
    }
  },
  created() {
    this.updateShowList()
  }
}
</script>
<style lang="scss" scoped>
#otherwork {
  width: 100%;
  .workCtn {
    display: flex;
    flex-flow: row wrap;
  }
}
</style>
