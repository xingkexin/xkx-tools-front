<template>
  <div id="app">
    <el-container>
      <el-header>小天狼x的网站</el-header>
      <el-container>
        <el-aside width="200px">
          <Menu/>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
      <el-footer>冀ICP备20000748号</el-footer>
    </el-container>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'

export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style>
#app {
}

.el-footer {
  text-align: center;
}

@media only screen and (max-width: 768px) {
    .el-aside {
      display: none;
    }
}
</style>
