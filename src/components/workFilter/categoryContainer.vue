<template>
  <div class="categoryContainer">
    <!-- <div class="left">{{data.name}}</div> -->
    <div class="right">
      <span
        v-for="(item, index) in comPropData"
        :key="index"
        class="item"
        :class="{ active: currentKey === item.key }"
        @click="clickHandle(item.key)"
        >{{ item.name }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentKey: ''
    }
  },
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          name: '分类',
          data: [
            { key: 'all', name: '全部' },
            { key: 'javaKey', name: 'java' },
            { key: 'db', name: 'dataBase' }
          ]
        }
      }
    },
    propKey: {
      type: String,
      default: 'all'
    }
  },
  computed: {
    comPropData() {
      return [{ key: 'all', name: '全部' }].concat(this.data.data)
    }
  },
  model: {
    prop: 'propKey',
    event: 'change'
  },
  created() {
    this.currentKey = this.propKey || 'all'
  },
  methods: {
    clickHandle(key) {
      this.$emit('change', key)
      this.$emit('select', key)
    }
  },
  watch: {
    propKey() {
      this.currentKey = this.propKey
    },
    'data.data'() {
      if (!this.data.data.find(item => item.key === this.currentKey)) {
        this.currentKey = 'all'
      }
      this.$emit('change', this.currentKey)
    }
  }
}
</script>

<style lang="scss" scoped>
.categoryContainer {
  display: flex;
  padding: 6px 40px;
  box-sizing: border-box;
  border-bottom: 1px solid #f3f3f3;
  .left {
    width: 94px;
    line-height: 34px;
    font-weight: bold;
  }
  .right {
    display: flex;
    .item {
      cursor: pointer;
      display: block;
      margin: 0 10px 0 0;
      line-height: 14px;
      padding: 10px;
      font-size: 14px;
      border-radius: 2px;
      &.active {
        background: #059adb;
        color: #fff;
        &:hover {
          color: #fff;
        }
      }
      &:hover {
        color: #059adb;
      }
    }
  }
}
</style>
