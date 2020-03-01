<template>
  <div>
    <el-row>
      <el-col :span="10">
        <el-input type="textarea" :rows="15" placeholder="请输入内容" v-model="content">
        </el-input>
      </el-col>
      <el-col :span="4">
        <el-row>
          <el-col :span="24">
            <el-button type="primary" v-on:click="encode('sha1')">SHA-1<i class="el-icon-arrow-right el-icon--right"></i></el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-button type="primary" v-on:click="encode('sha224')">SHA-224<i class="el-icon-arrow-right el-icon--right"></i></el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-button type="primary" v-on:click="encode('sha256')">SHA-256<i class="el-icon-arrow-right el-icon--right"></i></el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-button type="primary" v-on:click="encode('sha384')">SHA-384<i class="el-icon-arrow-right el-icon--right"></i></el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-button type="primary" v-on:click="encode('sha512')">SHA-512<i class="el-icon-arrow-right el-icon--right"></i></el-button>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="10">
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
        content: '',
        shaEncodedText: ''
      }
    },
    methods: {
      encode(algorithm) {
        this.shaEncodedText = shajs(algorithm).update(this.content).digest('hex')
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
