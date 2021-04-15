<template>
<div class="recommendCourse">
    <h2>推荐课程</h2>
    <ul>
        <li v-for="(item,index) in data" :key="index">
            <img :src="item.src">
            <!-- <img :src="require(item.src)"> -->
            <div class="mbc-text">
                <h3>{{item.title}}</h3>
                <span class="mbc-text-money">
                    ￥<span>{{item.price}}</span>
                </span>
                <i class="mbc-text-line">|</i>
                <span class="mbc-text-info">
                        <i class="iconfont icon-yonghu1">·</i>
                    <span>{{item.visited}}</span>
                </span>
            </div>
        </li>
    </ul>
</div>
</template>

<script>
import tuijianhaoke1 from '@/assets/images/free-course/tui-jian-hao-ke/tuijianhaoke1.jpg'

export default {
  data () {
    return {
    }
  },
  props: {
    data: {
      type: Array,
      default () {
        return [
          {
            title: 'dba初级课程',
            badge: '',
            price: '462.00',
            oldPrice: '999.00',
            visited: '1824',
            collection: '294',
            detail: '【6大调优专题】：数据库 | Tomcat | JVM参数 | JVM-GC | Netty | Nginx ；1套高频调优面试集锦，为你的实力代言！',
            time: '3:15',
            rate: '4.8',
            freeFlag: false,
            direct: 'back',
            category: ['db'],
            src: tuijianhaoke1
          }
        ]
      }
    }
  }
//   watch: {
//     $route () {
//     }
//   },
//   created () {
//   },
//   methods: {
//   }
}
</script>

<style lang="scss" scoped>
.recommendCourse{
    min-width: 300px;
    h2 {
        height: 60px;
        font-size: 20px;
        letter-spacing: 1.3px;
        text-align: center;
        line-height: 60px;
        border-bottom: 1px solid #ebeeef;
        margin: 0;
    }
    ul{
        li {
            padding: 10px 20px;
            border-bottom: 1px solid #ebeeef;
            display: flex;
            flex-flow: nowrap;
            cursor: pointer;
            &:hover{
                background: #f6f6f6;
            }
            img {
                width: 110px;
                height: 55px;
                border-radius: 5px;
            }
            .mbc-text{
                margin: 0 0 0 20px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                h3 {
                    font-size: 16px;
                    font-weight: bold;
                    color: #93999f;
                    margin: 0 10px 10px 5px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .mbc-text-money {
                    color: #059ADB;
                    font-size: 16px;
                    margin-right: 10px;
                }
                .mbc-text-line {
                    font-size: 15px;
                    color: #93999f;
                }
                .mbc-text-info {
                    color: #93999f;
                    font-size: 14px;
                    margin-left: 10px;
                }
            }
        }
    }
}
</style>
