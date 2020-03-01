<template>
  <div>
    <el-row>
      <el-col :span="10" :xs="24">
        <el-input type="textarea" :rows="15" placeholder="请输入未编码的内容" v-model="urlDecodedText">
        </el-input>
      </el-col>
      <el-col :span="4" :xs="24">
        <el-row>
          <el-col :span="24" :xs="8">
            <el-button type="primary" v-on:click="encodeBySmart" size="mini">
              智能编码
              <i class="el-icon-arrow-right hidden-xs-only"></i>
              <i class="el-icon-arrow-down hidden-sm-and-up"></i>
            </el-button>
          </el-col>
          <el-col :span="24" :xs="8">
            <el-button type="primary" v-on:click="encodeByDirect" size="mini">
              编码
              <i class="el-icon-arrow-right hidden-xs-only"></i>
              <i class="el-icon-arrow-down hidden-sm-and-up"></i>
            </el-button>
          </el-col>
          <el-col :span="24" :xs="8">
            <el-button type="primary" v-on:click="decode" size="mini">
              <i class="el-icon-arrow-left hidden-xs-only"></i>
              <i class="el-icon-arrow-up hidden-sm-and-up"></i>
              解码
            </el-button>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="10" :xs="24">
        <el-input type="textarea" :rows="15" placeholder="请输入已编码的内容" v-model="urlEncodedText">
        </el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Qs from 'qs'

  export default {
    name: 'URL',
    data() {
      return {
        urlDecodedText: '',
        urlEncodedText: ''
      }
    },
    methods: {
      encodeBySmart() {
        let data = {
          str: this.urlDecodedText,
          charsetStr: 'UTF-8'
        }
        this.axios.post('/url/encode/smart', Qs.stringify(data)).then((res) => {
          console.log(res)
          this.urlEncodedText = res.data
        })
      },
      encodeByDirect() {
        let data = {
          str: this.urlDecodedText,
          charsetStr: 'UTF-8'
        }
        this.axios.post('/url/encode/direct', Qs.stringify(data)).then((res) => {
          console.log(res)
          this.urlEncodedText = res.data
        })
      },
      decode() {
        let data = {
          str: this.urlEncodedText,
          charsetStr: 'UTF-8'
        }
        this.axios.post('/url/decode', Qs.stringify(data)).then((res) => {
          console.log(res)
          this.urlDecodedText = res.data
        })
      }
    }
  }
</script>

<style scoped>
  .el-button {
    margin: 10px 10px;
  }
</style>
