<template>
  <div>
    <el-row>
      <el-col :span="10" :xs="24">
        <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="content">
        </el-input>
      </el-col>
      <el-col :span="4" :xs="24">
        <el-row>
          <el-col :span="24" :xs="12">
            <el-select v-model="charset" placeholder="请选择">
              <el-option
                v-for="item in charsetList"
                :key="item"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="24" :xs="12">
            <el-button type="primary" v-on:click="encode">
              MD5摘要
              <i class="el-icon-arrow-right hidden-xs-only"></i>
              <i class="el-icon-arrow-down hidden-sm-and-up"></i>
            </el-button>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="10" :xs="24">
        <el-input type="textarea" :rows="5" placeholder="此处会显示MD5摘要内容" v-model="md5EncodedText" readonly>
        </el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import md5 from 'js-md5'

  export default {
    name: 'MD5',
    data() {
      return {
        content: '',
        md5EncodedText: '',
        charsetList: ['UTF-8', 'GBK'],
        charset: 'UTF-8'
      }
    },
    methods: {
      encode() {
        this.md5EncodedText = md5(this.content)
      }
    }
  }
</script>

<style scoped>
  .el-button, .el-select {
    margin: 10px 10px;
  }
</style>
