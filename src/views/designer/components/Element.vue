<template>
    <el-container class="layout-container" :class="{active: obj.active}" v-if="'container' == obj.name" @click.self.native="clickHandler('layout', path)">
      <template v-for="(child, index) in obj.children">
        <el-header class="content-container" :class="{active: child.active}" v-if="'header' == child.name">
        header
        </el-header>
        <el-aside class="content-container" :class="{active: child.active}" v-else-if="'aside' == child.name" width="50px">
        aside
        </el-aside>
        <el-main class="content-container" :class="{active: child.active}" v-else-if="'main' == child.name" @click.self.native="clickHandler('content', path + '-' + index)">
          <xkx-element v-for="(child2, index2) in child.children" :path="path + '-' + index + '-' + index2" :obj="child2" :key="index2" @click="clickEvent"></xkx-element>
        </el-main>
        <el-footer class="content-container" :class="{active: child.active}" v-else-if="'footer' == child.name">
        footer
        </el-footer>
      </template>
    </el-container>
    <el-row class="layout-container" :class="{active: obj.active}" v-else-if="'row' == obj.name" @click.self.native="clickHandler('layout', path)">
      <xkx-element v-for="(child, index) in obj.children" :path="path + '-' + index" :obj="child" :key="index" @click="clickEvent"></xkx-element>
    </el-row>
    <el-col class="content-container" :class="{active: obj.active}" :span="obj.span" :offset="obj.offset" v-else-if="'col' == obj.name" @click.self.native="clickHandler('content', path)">
      <xkx-element v-for="(child, index) in obj.children" :path="path + '-' + index" :obj="child" :key="index" @click="clickEvent"></xkx-element>
    </el-col>
    <div class="content-container" :class="{active: obj.active}" v-else @click.self="clickHandler('content', path)">
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
      clickHandler(type, path) {
        // if(list.length > 0) return false
        // console.log(this.path + ':' + path)
        this.$emit('click', type, path)
      },
      clickEvent(type, path) {
        this.$emit('click', type, path)
      }
    }
  }
</script>

<style scoped lang="less">
  .layout-container {
    margin-bottom: 10px;
    padding: 0;
    background-color: gray;
    border: 1px dotted #000;
  }
  .content-container {
    margin-top: 5px;
    padding: 0;
    background-color: white;
    border: 1px solid #000;
    min-height: 50px;
    min-width: 10px;
    text-align: center;
  }
  .active {
    border-color: red;
    border-width: 2px;
  }
</style>
