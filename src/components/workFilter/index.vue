<template>
  <div class="courseFilter">
    <div class="courseFilterContainer">
      <categoryContainer
        :data="directData"
        v-model="directKey"
        @select="selectHandle"
      />
      <categoryContainer
        :data="categoryData"
        v-model="categoryKey"
        @select="selectHandle"
      />
    </div>
  </div>
</template>

<script>
import categoryContainer from './categoryContainer'
export default {
  components: { categoryContainer },
  data() {
    return {
      /**
       * 基础数据
       * 可以封装后从上层传入数据
       * 但不建议for循环categoryContainer 每个categoryContainer之间并不全是级联关系 在此组件中需要特殊处理
       */
      directArr: [
        { key: 'code', name: '代码' },
        { key: 'video', name: '视频' }
      ],
      categoryArr: [
        { key: 'html', name: 'HTML', directFlag: 'code' },
        { key: 'css', name: 'Css', directFlag: 'code' },
        { key: 'js', name: 'js', directFlag: 'code' },
        { key: 'svg', name: 'svg', directFlag: 'code' },
        { key: 'canvas', name: 'canvas', directFlag: 'code' },
        { key: 'vue', name: 'Vue', directFlag: 'code' },
        { key: 'sec', name: '二创', directFlag: 'video' },
        { key: 'se', name: '特效', directFlag: 'video' },
      ],
      // 持久层
      directKey: '',
      directData: {
        name: '分类',
        data: []
      },
      categoryKey: '',
      categoryData: {
        name: '细分',
        data: []
      }
    }
  },
  props: {
    propData: {
      type: Array,
      default: () => {
        return ['all', 'all']
      }
    }
  },
  watch: {
    directKey() {
      this.filterCat()
    }
  },
  created() {
    this.directKey = this.propData[0]
    this.categoryKey = this.propData[1]
    this.directData.data = JSON.parse(JSON.stringify(this.directArr))
  },
  model: {
    prop: 'propData',
    event: 'change'
  },
  methods: {
    selectHandle() {
      this.$nextTick(() => {
        this.$emit('select', [this.directKey, this.categoryKey])
        this.$emit('change', [this.directKey, this.categoryKey])
      })
    },
    filterCat() {
      this.categoryData.data = this.categoryArr.filter(item => this.directKey === 'all' || item.directFlag === this.directKey)
    }
  }
}
</script>

<style lang="scss" scoped>
.courseFilter {
  // background: #fff;
  box-sizing: border-box;
  padding: 20px 0;
  // box-shadow: 0 2px 8px 0 rgba(7, 17, 27, 0.1);
  .courseFilterContainer {
    max-width: 76%;
    margin: 0 auto;
  }
}
</style>
