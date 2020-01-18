<template>
  <div>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu default-active="1-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" @select="handleSelect"
      :collapse="isCollapse">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">编解码</span>
        </template>
        <router-link to="/base64"><el-menu-item index="1-1">Base64</el-menu-item></router-link>
        <router-link to="/url"><el-menu-item index="1-2">URL</el-menu-item></router-link>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">摘要</span>
        </template>
        <router-link to="/md5"><el-menu-item index="2-1">MD5</el-menu-item></router-link>
        <router-link to="/sha"><el-menu-item index="2-2">SHA</el-menu-item></router-link>
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
