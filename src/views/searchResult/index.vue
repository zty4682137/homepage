<template>
  <div class="searchResult">
    <searchBar v-model="searchKey" @search="searchHandle"/>
    <div class="searchResultContainer">
      <div class="left">
        <div class="card" style="display: flex;flex-flow: column nowrap;align-items: center;" v-loading="loading">
          <h4 class="searchTitle">全站搜索结果</h4>
          <div class="cat">
            <div class="catItem" v-for="(item,index) in catData" :key="index" @click="catClickHandle(item.key)" :class="{active:item.key===catActive}">{{item.name}}</div>
          </div>
          <!-- 分类页签 -->
          <div v-if="searchResultListData.length>0">
            <searchResultList :data="searchResultListData"/>
            <el-pagination
              style="margin: 10px 0 30px;text-align:center;"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage"
              :page-size="size"
              layout="total, prev, pager, next"
              :total="totle">
              </el-pagination>
          </div>
          <div v-else style="height:400px;line-height:400px;text-align:center;">
            未搜索到相关内容
          </div>
        </div>
      </div>
      <div class="right">
        <div class="card marginB20">
          <recommendCourse :data="recommendCourse"/>
        </div>
        <div class="card">
          <recommendCourse :data="recommendCourse"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 通讯实例
// import { getCourseList } from '@/api/course'
import searchBar from '@/components/searchBar'
import searchResultList from '@/components/searchResultList'

export default {
  name: 'searchResult',
  components: {
    searchBar,
    searchResultList
  },
  data () {
    return {
      catData: [
        { key: 1, name: '全部' },
        { key: 2, name: '系统课程' },
        { key: 3, name: '推荐课程' },
        { key: 4, name: '学习路线' }
      ],
      catActive: 1, // 如有需要  查询方法中可加入分类参数
      searchKey: '',
      currentPage: 1,
      size: 8,
      totle: 0,
      loading: false,
      searchResultListData: [],
      searchResultListHTMLData: [],
      recommendCourse: this.$store.state.allCourse.filter(item => item.badge === '推荐好课').splice(0, 6)// replace方法影响了recommm结果 写到这里
    }
  },
  methods: {
    searchHandle () {
      if (this.searchKey) {
        this.currentPage = 1
        this.getListFun(this.currentPage, this.size, this.searchKey)
      }
    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.getListFun(this.currentPage, this.size, this.searchKey)
    },
    catClickHandle (key) {
      this.catActive = key
    },
    getListFun (page, size, keyIn) {
      this.loading = true
      this.$nextTick(() => {
        setTimeout(() => {
          const key = keyIn.toLocaleLowerCase()
          const tempArr = this.$store.state.allCourse.filter(item => item.title.toLocaleLowerCase().includes(key) || item.detail.toLocaleLowerCase().includes(key))
          this.totle = tempArr.length
          this.searchResultListData = tempArr.slice((page - 1) * size, page * size)
          this.searchResultListHTMLData = this.searchResultListData.map(item => {
            const keyReg = new RegExp(keyIn, 'gi')
            item.titleHTML = item.title.replaceAll(keyReg, '<span class="light">' + keyIn + '</span>')// 这里被替换的高亮项应该是原项而不是参数项
            item.detailHTML = item.detail.replaceAll(keyReg, '<span class="light">' + keyIn + '</span>')
            return item
          })
          this.loading = false
        }, 1000)
      })
    }
  },
  created () {
    this.searchKey = this.$store.state.searchKey
    this.searchHandle()
  }
}
</script>
<style lang="scss" scoped>
.searchResult{
  .searchResultContainer{
    width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-flow: row nowrap;
    padding: 20px 0;
    .left{
      width: 70%;
      .searchTitle{
        height: 60px;
        font-size: 20px;
        letter-spacing: 1.3px;
        line-height: 60px;
        border-bottom: 1px solid #ebeeef;
        margin: 0;
        width: 100%;
        box-sizing: border-box;
        padding: 0 20px;
      }
      .cat{
        display: flex;
        flex-flow: row nowrap;
        width: 100%;
        padding: 14px 38px 0;
        box-sizing: border-box;
        .catItem{
          height: 20px;
          font-size: 14px;
          border-radius: 14px;
          padding: 2px 10px;
          background: #ddd;
          color: #fff;
          margin: 0 10px 0 0;
          transition: background 0.2s;
          cursor: pointer;
          &.active{
            background: #059ADB;
          }
        }
      }
    }
    .right{
      width: 30%;
      margin:0 0 0 15px;
    }
  }
}
</style>
