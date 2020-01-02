<template>
  <div>
    <el-row>
      <el-col :span="10">
        <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="content">
        </el-input>
      </el-col>
      <el-col :span="4">
        <el-row>
          <el-col :span="24">
            <el-select v-model="charset" placeholder="请选择">
                <el-option
                  v-for="item in charsetList"
                  :key="item"
                  :label="item"
                  :value="item">
                </el-option>
              </el-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-button type="primary" v-on:click="encode">MD5摘要<i class="el-icon-arrow-right el-icon--right"></i></el-button>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="10">
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

<style>
  .el-row {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }
</style>
