<template>
  <div>
    <el-row>
      <el-col :span="10" :xs="24">
        <el-input type="textarea" :rows="5" placeholder="请输入未编码的内容" v-model="base64DecodedText">
        </el-input>
      </el-col>
      <el-col :span="4" :xs="24">
        <el-row>
          <el-col :span="24" :xs="12">
            <el-button type="primary" v-on:click="encode" size="mini">
              编码
              <i class="el-icon-arrow-right hidden-xs-only"></i>
              <i class="el-icon-arrow-down hidden-sm-and-up"></i>
            </el-button>
          </el-col>
          <el-col :span="24" :xs="12">
            <el-button type="primary" v-on:click="decode" size="mini">
              <i class="el-icon-arrow-left hidden-xs-only"></i>
              <i class="el-icon-arrow-up hidden-sm-and-up"></i>
              解码
            </el-button>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="10" :xs="24">
        <el-input type="textarea" :rows="5" placeholder="请输入已编码的内容" v-model="base64EncodedText">
        </el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  let Base64 = require('js-base64').Base64
  export default {
    name: 'Base64',
    data() {
      return {
        base64DecodedText: '',
        base64EncodedText: ''
      }
    },
    methods: {
      encode() {
        this.base64EncodedText = Base64.encode(this.base64DecodedText)
      },
      decode() {
        this.base64DecodedText = Base64.decode(this.base64EncodedText)
      }
    }
  }
</script>

<style scoped>
  .el-button {
    margin: 10px 10px;
  }
</style>
