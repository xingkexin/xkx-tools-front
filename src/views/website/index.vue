<template>
  <el-container>
    <el-aside width="200px" class="hidden-xs-only">
    </el-aside>
    <el-main>
      <h1>网址大全</h1>
      <template v-for="folder in website.list">
        <el-row>
          <el-col :sm="4" :xs="24"><h3>{{folder.folderName}}</h3></el-col>
          <el-col :sm="20" :xs="24">
            <template v-for="item in folder.websiteList">
              <el-tag><el-link :underline="false" target="_blank" :href="item.websiteUrl">{{item.websiteName}}</el-link></el-tag>
            </template>
          </h3></el-col>
        </el-row>
        <el-divider></el-divider>
      </template>
    </el-main>
  </el-container>
</template>

<script>
  import {getWebsiteList} from '@/api/index.js'
  export default {
    data() {
      return {
        msg: '网址大全',
        website: {
          list: []
        }
      }
    },
    mounted() {
      this.getList()
    },
    methods: {
      async getList() {
        const {data} = await getWebsiteList()
        this.website.list = data
        console.log(data)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3{
    margin: 5px 0;
  }

  .el-divider--horizontal{
    margin: 10px 0;
  }

  .el-tag+.el-tag {
    margin-left: 5px;
  }
</style>
