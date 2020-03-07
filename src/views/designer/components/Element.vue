<template>
    <el-row class="component" :class="{active: active}" v-if="'row' == obj.name" @click.native="clickHandler(obj.children)">
      <xkx-element v-for="(child, index) in obj.children" :path="path + '-' + index" :obj="child" :key="index" @click="clickEvent"></xkx-element>
    </el-row>
    <el-col class="component" :class="{active: active}" :span="obj.span" v-else-if="'col' == obj.name" @click.native="clickHandler(obj.children)">
    </el-col>
    <div class="component" :class="{active: active}" v-else @click="clickHandler(obj.children)"></div>
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
        if(list) return false
        // console.log(this.path)
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
  .component {
    border: 1px dashed #000;
    min-height: 50px;
    min-width: 10px
  }
  .active {
    border-color: red;
  }
</style>
