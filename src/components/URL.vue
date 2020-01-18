<template>
  <div>
    <el-row>
      <el-col :span="10">
        <el-input type="textarea" :rows="15" placeholder="请输入未编码的内容" v-model="urlDecodedText">
        </el-input>
      </el-col>
      <el-col :span="4">
        <el-row>
          <el-col :span="24">
            <el-button type="primary" v-on:click="encodeComponent">完整编码<i class="el-icon-arrow-right el-icon--right"></i></el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-button type="primary" v-on:click="decodeComponent" icon="el-icon-arrow-left">完整解码</el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-button type="primary" v-on:click="encode">编码<i class="el-icon-arrow-right el-icon--right"></i></el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-button type="primary" v-on:click="decode" icon="el-icon-arrow-left">解码</el-button>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="10">
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
      encodeComponent() {
        this.urlEncodedText = encodeURIComponent(this.urlDecodedText)
      },
      decodeComponent() {
        this.urlDecodedText = decodeURIComponent(this.urlEncodedText)
      },
      encode() {
        let data = {
          str: this.urlDecodedText,
          charsetStr: 'UTF-8'
        }
        this.axios.post('/url/encode', Qs.stringify(data)).then((res) => {
          console.log(res)
          this.urlEncodedText = res.data
        })
        // this.urlEncodedText = encodeURI(this.urlDecodedText)
      },
      decode() {
        this.urlDecodedText = decodeURI(this.urlEncodedText)
      }
    }
  }
</script>

<style>
  .el-row {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }
</style>
