<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="5" style="text-align: center;">
            <span style="line-height: 60px;">小天狼x</span>
          </el-col>
          <el-col :span="19">
            <el-menu mode="horizontal" class="hidden-xs-only" router>
              <el-menu-item index="/">首页</el-menu-item>
              <el-menu-item index="/tools">小工具</el-menu-item>
              <el-menu-item index="/designer">代码设计器</el-menu-item>
              <el-menu-item index="/doc.html">
                <a href="/doc.html" target="_blank">
                  接口文档
                </a>
              </el-menu-item>
            </el-menu>
            <el-menu default-active="0" mode="horizontal" class="hidden-sm-and-up" style="float: right;" router>
              <el-submenu index="0">
                <template slot="title"><i class="fa fa-bars"></i></template>
                <el-menu-item index="/">首页</el-menu-item>
                <el-menu-item index="/tools">小工具</el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>
        <el-link href="http://www.beian.miit.gov.cn/" target="_blank" :underline="false">冀ICP备20000748号</el-link>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {
    }
  }
</script>

<style lang="less">
  body {
    margin: 0;
    padding: 0;
  }

  #app {}

  .el-footer {
    text-align: center;
  }
</style>
