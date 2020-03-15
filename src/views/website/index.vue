<template>
  <el-container>
    <el-aside width="200px" class="hidden-xs-only">
    </el-aside>
    <el-main>
      <h1>网址大全</h1>
      <el-row>
        <el-col :sm="4" :xs="24"><h3>CDN</h3></el-col>
        <el-col :sm="20" :xs="24">
          <el-tag><el-link :underline="false" target="_blank" href="https://www.jsdelivr.com/">jsdelivr</el-link></el-tag>
          <el-tag><el-link :underline="false" target="_blank" href="https://www.bootcdn.cn/">BootCDN</el-link></el-tag>
        </h3></el-col>
      </el-row>
      <el-divider></el-divider>
      <el-row>
        <el-col :sm="4" :xs="24"><h3>下载</h3></el-col>
        <el-col :sm="20" :xs="24">
          <el-tag><el-link :underline="false" target="_blank" href="https://archive.eclipse.org/eclipse/downloads/">eclipse</el-link></el-tag>
        </h3></el-col>
      </el-row>
      <el-divider></el-divider>
      <el-row>
        <el-col :sm="4" :xs="24"><h3>MAVEN仓库</h3></el-col>
        <el-col :sm="20" :xs="24">
          <el-tag><el-link :underline="false" target="_blank" href="http://maven.aliyun.com/mvn/view">阿里云镜像</el-link></el-tag>
          <el-tag><el-link :underline="false" target="_blank" href="http://repository.jboss.org/nexus/content/groups/public/">jboss镜像</el-link></el-tag>
          <el-tag><el-link :underline="false" target="_blank" href="https://search.maven.org/">Central搜索</el-link></el-tag>
          <el-tag><el-link :underline="false" target="_blank" href="https://mvnrepository.com/">mvnrepository搜索</el-link></el-tag>
          <el-tag><el-link :underline="false" target="_blank" href="http://repo.spring.io/release/">spring仓库</el-link></el-tag>
          <el-tag><el-link :underline="false" target="_blank" href="https://repository.apache.org/content/groups/public/">apache仓库</el-link></el-tag>
        </h3></el-col>
      </el-row>
      <el-divider></el-divider>
      <el-row>
        <el-col :sm="4" :xs="24"><h3>Linux</h3></el-col>
        <el-col :sm="20" :xs="24">
          <el-tag><el-link :underline="false" target="_blank" href="http://man.linuxde.net/">命令man</el-link></el-tag>
        </h3></el-col>
      </el-row>
      <el-divider></el-divider>
      <el-row>
        <el-col :sm="4" :xs="24"><h3>画图</h3></el-col>
        <el-col :sm="20" :xs="24">
          <el-tag><el-link :underline="false" target="_blank" href="https://www.websequencediagrams.com/">时序图制作</el-link></el-tag>
          <el-tag><el-link :underline="false" target="_blank" href="https://www.processon.com/">在线画图</el-link></el-tag>
          <el-tag><el-link :underline="false" target="_blank" href="http://fontstore.baidu.com/store">百度字体平台</el-link></el-tag>
        </h3></el-col>
      </el-row>
      <el-divider></el-divider>
      <el-row>
        <el-col :sm="4" :xs="24"><h3>教程</h3></el-col>
        <el-col :sm="20" :xs="24">
          <el-tag><el-link :underline="false" target="_blank" href="http://www.runoob.com/">菜鸟教程</el-link></el-tag>
          <el-tag><el-link :underline="false" target="_blank" href="http://www.yiibai.com/">易百教程</el-link></el-tag>
          <el-tag><el-link :underline="false" target="_blank" href="https://www.liaoxuefeng.com/">廖雪峰</el-link></el-tag>
          <el-tag><el-link :underline="false" target="_blank" href="http://www.w3cschool.cn/">w3cschool</el-link></el-tag>
          <el-tag><el-link :underline="false" target="_blank" href="http://www.w3school.com.cn/">w3school</el-link></el-tag>
        </h3></el-col>
      </el-row>
      <el-divider></el-divider>
      <el-row>
        <el-col :sm="4" :xs="24"><h3>前端网站</h3></el-col>
        <el-col :sm="20" :xs="24">
          <el-tag><el-link :underline="false" target="_blank" href="https://wangdoc.com/javascript/">JS</el-link></el-tag>
          <el-tag><el-link :underline="false" target="_blank" href="http://es6.ruanyifeng.com/">ES6</el-link></el-tag>
          <el-tag><el-link :underline="false" target="_blank" href="http://jquery.cuishifeng.cn/">JQuery</el-link></el-tag>
          <el-tag><el-link :underline="false" target="_blank" href="https://v3.bootcss.com/getting-started/">Bootstrap3</el-link></el-tag>
          <el-tag><el-link :underline="false" target="_blank" href="https://www.cnblogs.com/tim-li/archive/2012/08/06/2580252.html">canvas</el-link></el-tag>
          <el-tag><el-link :underline="false" target="_blank" href="http://nodejs.cn/api/">NodeJs</el-link></el-tag>
          <el-tag><el-link :underline="false" target="_blank" href="https://cn.vuejs.org/v2/guide/">Vue</el-link></el-tag>
          <el-tag><el-link :underline="false" target="_blank" href="http://www.axios-js.com/zh-cn/docs/">Axios</el-link></el-tag>
          <el-tag><el-link :underline="false" target="_blank" href="http://mockjs.com/">Mockjs</el-link></el-tag>
          <el-tag><el-link :underline="false" target="_blank" href="https://www.webpackjs.com/concepts/">webpack</el-link></el-tag>
        </h3></el-col>
      </el-row>
      <el-divider></el-divider>
      <el-row>
        <el-col :sm="4" :xs="24"><h3>VUE</h3></el-col>
        <el-col :sm="20" :xs="24">
          <el-tag><el-link :underline="false" target="_blank" href="https://cn.vuejs.org/v2/guide/">Vue</el-link></el-tag>
          <el-tag><el-link :underline="false" target="_blank" href="https://router.vuejs.org/zh/">Vue Router</el-link></el-tag>
          <el-tag><el-link :underline="false" target="_blank" href="https://vuex.vuejs.org/zh/">Vuex</el-link></el-tag>
          <el-tag><el-link :underline="false" target="_blank" href="https://cli.vuejs.org/zh/">Vue CLI</el-link></el-tag>
          <el-tag><el-link :underline="false" target="_blank" href="https://vue-loader.vuejs.org/zh/">Vue Loader</el-link></el-tag>
          <el-tag><el-link :underline="false" target="_blank" href="https://element.eleme.cn/#/zh-CN/component/installation">饿了么ElementUI</el-link></el-tag>
          <el-tag><el-link :underline="false" target="_blank" href="http://mint-ui.github.io/#!/zh-cn">饿了么Mint UI</el-link></el-tag>
          <el-tag><el-link :underline="false" target="_blank" href="https://nutui.jd.com/">京东Nut UI</el-link></el-tag>
          <el-tag><el-link :underline="false" target="_blank" href="https://dafrok.github.io/vue-baidu-map/#/zh/index">百度Map</el-link></el-tag>
        </h3></el-col>
      </el-row>
      <el-divider></el-divider>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: 'Website',
    data() {
      return {
        msg: '网址大全'
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
</style>
