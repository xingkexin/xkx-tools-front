<template>
  <el-container>
    <el-aside width="200px" class="hidden-xs-only">
      <Menu/>
    </el-aside>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
import Menu from './components/Menu.vue'

export default {
  components: {
    Menu
  }
}
</script>

<style scoped>
  .el-main {
    margin: 0;
    padding: 0;
    padding-left: 10px;
    text-align: center;
  }

  .el-breadcrumb {
    margin-bottom: 20px;
  }
</style>
