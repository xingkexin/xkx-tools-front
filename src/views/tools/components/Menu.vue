<template>
  <div>
    <el-menu :default-active="$route.path" router>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">编解码</span>
        </template>
        <el-menu-item index="./base64">Base64</el-menu-item>
        <el-menu-item index="./url">URL</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">摘要</span>
        </template>
        <el-menu-item index="./md5">MD5</el-menu-item>
        <el-menu-item index="./sha">SHA</el-menu-item>
      </el-submenu>
      <el-submenu index="99">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">其他小工具</span>
        </template>
        <el-menu-item index="./uuid">UUID</el-menu-item>
        <el-menu-item index="./datetime">日期时间</el-menu-item>
        <el-menu-item index="./number">数字进制转换</el-menu-item>
        <el-menu-item index="./string">字符串编码</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'Menu',
    data() {
      return {
        isCollapse: false
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath)
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style>
</style>
