<template>
  <div>
    <el-form label-width="90px" v-loading="loadding">
      <el-form-item label="数字:">
        <el-input v-model="form.str" placeholder="请输入一个数字" @keyup.enter.native="query">
          <el-select v-model="form.originalBaseNum" slot="prepend" placeholder="请选择">
            <el-option label="二进制" value="2"></el-option>
            <el-option label="八进制" value="8"></el-option>
            <el-option label="十进制" value="10"></el-option>
            <el-option label="十六进制" value="16"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search" @click="query()"></el-button>
        </el-input>
      </el-form-item>
      <el-form-item label="二进制:">
        {{detail.num2}}
      </el-form-item>
      <el-form-item label="八进制:">
        {{detail.num8}}
      </el-form-item>
      <el-form-item label="十进制:">
        {{detail.num10}}
      </el-form-item>
      <el-form-item label="十六进制:">
        {{detail.num16}}
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {
    getNumber,
  } from '@/api'
  export default {
    data() {
      return {
        loadding: false,
        form: {
          originalBaseNum: '10',
          str: '',
        },
        detail: {
          num2: "",
          num8: "",
          num10: "",
          num16: ""
        },
      }
    },
    methods: {
      async query() {
        this.loadding = true
        try{
          const {
            data
          } = await getNumber(this.form)
          this.detail = data
        }catch(e){
          console.log('接口调用失败！')
        }
        this.loadding = false
      },
    }
  }
</script>

<style scoped>
  .el-select {
    width: 110px;
  }
</style>
