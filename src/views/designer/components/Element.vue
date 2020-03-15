<template>
    <el-row class="layout-container" :class="{active: obj.active}" v-if="'row' == obj.name" @click.self.native="clickHandler('layout')">
      <xkx-element v-for="(child, index) in obj.children" :path="path + '-' + index" :obj="child" :key="index" @click="clickEvent"></xkx-element>
    </el-row>
    <el-col class="content-container" :class="{active: obj.active}" :span="obj.span" :offset="obj.offset" v-else-if="'col' == obj.name" @click.self.native="clickHandler('content')">
      <xkx-element v-for="(child, index) in obj.children" :path="path + '-' + index" :obj="child" :key="index" @click="clickEvent"></xkx-element>
    </el-col>
    <div class="content-container" :class="{active: obj.active}" v-else @click.self="clickHandler('content')">
      <xkx-element v-for="(child, index) in obj.children" :path="path + '-' + index" :obj="child" :key="index" @click="clickEvent"></xkx-element>
    </div>
</template>

<script>
  export default {
    name: 'XkxElement',
    props: ['path', 'obj'],
    components: {
    },
    data() {
      return {
      }
    },
    methods: {
      clickHandler(type) {
        // if(list.length > 0) return false
        console.log(this.path)
        this.$emit('click', this.path, type)
      },
      clickEvent(path, type) {
        this.$emit('click', path, type)
      }
    }
  }
</script>

<style scoped lang="less">
  .layout-container {
    margin-bottom: 10px;
    background-color: gray;
    border: 1px dotted #000;
  }
  .content-container {
    margin-top: 5px;
    background-color: white;
    border: 1px solid #000;
    min-height: 50px;
    min-width: 10px
  }
  .active {
    border-color: red;
    border-width: 2px;
  }
</style>
