<template>
  <div>
    <el-row>
      <el-col :span="10" :xs="24">
        <el-input type="textarea" :rows="15" placeholder="请输入内容" v-model="content">
        </el-input>
      </el-col>
      <el-col :span="4" :xs="24">
        <el-row>
          <el-col :span="24" :xs="12">
            <el-select v-model="algorithm" placeholder="请选择">
              <el-option
                v-for="item in algorithmList"
                :key="item"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="24" :xs="12">
            <el-button type="primary" v-on:click="encode">
              摘要
              <i class="el-icon-arrow-right hidden-xs-only"></i>
              <i class="el-icon-arrow-down hidden-sm-and-up"></i>
            </el-button>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="10" :xs="24">
        <el-input type="textarea" :rows="15" placeholder="此处会显示SHA摘要内容" v-model="shaEncodedText" readonly>
        </el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import shajs from 'sha.js'

  export default {
    name: 'SHA',
    data() {
      return {
        algorithmList: ['sha1', 'sha224', 'sha256', 'sha384', 'sha512'],
        algorithm: 'sha1',
        content: '',
        shaEncodedText: ''
      }
    },
    methods: {
      encode() {
        this.shaEncodedText = shajs(this.algorithm).update(this.content).digest('hex')
      }
    }
  }
</script>

<style scoped>
  .el-button, .el-select {
    margin: 10px 10px;
  }
</style>
