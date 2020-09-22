<template>
  <div>
    <el-form label-width="90px" v-loading="loadding">
      <el-form-item label="字符串:">
        <el-input v-model="form.str" placeholder="请输入一段文字" @keyup.enter.native="query">
          <el-button slot="append" icon="el-icon-search" @click="query()"></el-button>
        </el-input>
      </el-form-item>
      <el-form-item label="字符串:">
        {{detail.str}}
      </el-form-item>
      <el-form-item label="unicode:">
        {{detail.unicode}}
      </el-form-item>
      <el-form-item label="utf16:">
        {{detail.utf16}}
      </el-form-item>
      <el-form-item label="utf8:">
        {{detail.utf8}}
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {
    encodeToUnicode,
  } from '@/api'
  export default {
    data() {
      return {
        loadding: false,
        form: {
          str: '',
        },
        detail: {
          str: "",
          unicode: "",
          utf16: "",
          utf8: ""
        },
      }
    },
    methods: {
      async query() {
        this.loadding = true
        try{
          const {
            data
          } = await encodeToUnicode(this.form)
          this.detail = data
          this.detail.str = this.form.str
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
