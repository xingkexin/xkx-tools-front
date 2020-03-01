<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="5">
            <span style="line-height: 60px;">小天狼x</span>
          </el-col>
          <el-col :span="19">
            <el-menu default-active="1" mode="horizontal" class="hidden-xs-only">
              <el-menu-item index="1">
                <router-link to="/">首页</router-link>
              </el-menu-item>
              <el-menu-item index="2">
                <router-link to="/tools">小工具</router-link>
              </el-menu-item>
              <el-submenu index="3">
                <template slot="title">前端设计</template>
                <el-menu-item index="3-1">Element UI</el-menu-item>
              </el-submenu>
            </el-menu>
            <el-menu default-active="0" mode="horizontal" class="hidden-sm-and-up">
              <el-submenu index="0">
                <template slot="title">导航</template>
                <el-menu-item index="1">
                  <router-link to="/">首页</router-link>
                </el-menu-item>
                <el-menu-item index="2">
                  <router-link to="/tools">小工具</router-link>
                </el-menu-item>
                <el-submenu index="3">
                  <template slot="title">前端设计</template>
                  <el-menu-item index="3-1">Element UI</el-menu-item>
                </el-submenu>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
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
  body {
    margin: 0;
    padding: 0;
  }
  #app {}

  .el-footer {
    text-align: center;
  }

  /* @media only screen and (max-width: 768px) {
    .el-aside {
      display: none;
    }
} */
</style>
