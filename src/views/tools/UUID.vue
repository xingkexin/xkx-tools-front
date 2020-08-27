<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-button type="primary" v-on:click="getUuid" size="mini">
          刷新
        </el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <span>标准UUID</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <span>{{uuid}}</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <span>无中划线的UUID</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <span>{{uuidWithoutLine}}</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {
    getUuid,
    getUuidWithoutLine,
  } from '@/api'
  export default {
    data() {
      return {
        uuid: '',
        uuidWithoutLine: '',
      }
    },
    mounted() {
      this.getUuid()
    },
    methods: {
      async getUuid() {
        this.uuid = await getUuid()
        this.uuidWithoutLine = await getUuidWithoutLine()
      },
    }
  }
</script>

<style scoped>
  .el-button, .el-select {
    margin: 10px 10px;
  }
</style>
