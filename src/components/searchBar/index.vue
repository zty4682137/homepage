<template>
  <div class="searchBar">
    <el-input v-model="searchKey" class="searchInp" @keydown.enter.native="searchHandle" @input="inputHandle"></el-input>
    <el-button @click="searchHandle" class="searchBtn">搜索</el-button>
  </div>
</template>

<script>

export default {
  data () {
    return {
      searchKey: ''
    }
  },
  props: {
    searchKeyProp: {
      type: String,
      default: () => {
        return ''
      }
    }
  },
  model: {
    prop: 'searchKeyProp',
    event: 'input'
  },
  watch: {
    searchKeyProp () {
      this.searchKey = this.searchKeyProp
    }
  },
  created () {
    this.searchKey = this.searchKeyProp
  },
  methods: {
    searchHandle () {
      this.$emit('search', this.searchKey)
    },
    inputHandle (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="scss" scoped>
.searchBar{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  padding: 60px 0 0 0;
  background: #fff;
  box-shadow: 0 2px 8px 0 rgba(7, 17, 27, 0.1);
  .searchInp{
    width: 600px;
    ::v-deep .el-input__inner{
      height: 42px;
      border: none;
      background: #f1f1f1;
      border-radius: 5px 0 0 5px;
    }
  }
  .searchBtn{
    height: 42px;
    border: none;
    border-radius: 0 5px 5px 0;
    color: #fff;
    background: #059ADB;
  }
}
</style>
