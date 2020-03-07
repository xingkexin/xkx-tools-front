<template>
    <el-row class="container" :class="{active: obj.active}" v-if="'row' == obj.name">
      <xkx-element v-for="(child, index) in obj.children" :path="path + '-' + index" :obj="child" :key="index" @click="clickEvent"></xkx-element>
    </el-row>
    <el-col class="component select" :class="{active: obj.active}" :span="obj.span" v-else-if="'col' == obj.name" @click.self.native="clickHandler(obj.children)">
      <xkx-element v-for="(child, index) in obj.children" :path="path + '-' + index" :obj="child" :key="index" @click="clickEvent"></xkx-element>
    </el-col>
    <div class="component select" :class="{active: obj.active}" v-else @click.self="clickHandler(obj.children)">
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
        active: false
      }
    },
    methods: {
      clickHandler(list) {
        // if(list.length > 0) return false
        console.log(this.path)
        this.active = !this.active
        this.$emit('click', this.path)
      },
      clickEvent(path) {
        this.$emit('click', path)
      }
    }
  }
</script>

<style scoped lang="less">
  .container {
    margin: 5px 0;
  }
  .component {
    border: 1px dashed #000;
    min-height: 50px;
    min-width: 10px
  }
  .select {
    padding: 5px;
  }
  .active {
    border-color: red;
  }
</style>
