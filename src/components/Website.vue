<template>
  <div>
    <h1>网址大全</h1>
    <el-row>
      <el-col :sm="4" :xs="24"><h3>CDN</h3></el-col>
      <el-col :sm="20" :xs="24">
        <el-tag><a target="_blank" href="https://www.jsdelivr.com/">jsdelivr</a></el-tag>
      </h3></el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row>
      <el-col :sm="4" :xs="24"><h3>下载</h3></el-col>
      <el-col :sm="20" :xs="24">
        <el-tag><a target="_blank" href="https://archive.eclipse.org/eclipse/downloads/">eclipse</a></el-tag>
      </h3></el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row>
      <el-col :sm="4" :xs="24"><h3>MAVEN仓库</h3></el-col>
      <el-col :sm="20" :xs="24">
        <el-tag><a target="_blank" href="https://search.maven.org/">Central</a></el-tag>
        <el-tag><a target="_blank" href="https://mvnrepository.com/">mvnrepository</a></el-tag>
        <el-tag><a target="_blank" href="http://maven.aliyun.com/mvn/view">阿里云</a></el-tag>
        <el-tag><a target="_blank" href="http://repo.spring.io/release/">spring</a></el-tag>
        <el-tag><a target="_blank" href="https://repository.apache.org/content/groups/public/">apache</a></el-tag>
        <el-tag><a target="_blank" href="http://repository.jboss.org/nexus/content/groups/public/">jboss</a></el-tag>
      </h3></el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row>
      <el-col :sm="4" :xs="24"><h3>Linux</h3></el-col>
      <el-col :sm="20" :xs="24">
        <el-tag><a target="_blank" href="http://man.linuxde.net/">命令man</a></el-tag>
      </h3></el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row>
      <el-col :sm="4" :xs="24"><h3>画图</h3></el-col>
      <el-col :sm="20" :xs="24">
        <el-tag><a target="_blank" href="https://www.websequencediagrams.com/">时序图制作</a></el-tag>
        <el-tag><a target="_blank" href="https://www.processon.com/">在线画图</a></el-tag>
        <el-tag><a target="_blank" href="http://fontstore.baidu.com/store">百度字体平台</a></el-tag>
      </h3></el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row>
      <el-col :sm="4" :xs="24"><h3>教程</h3></el-col>
      <el-col :sm="20" :xs="24">
        <el-tag><a target="_blank" href="http://www.runoob.com/">菜鸟教程</a></el-tag>
        <el-tag><a target="_blank" href="http://www.yiibai.com/">易百教程</a></el-tag>
        <el-tag><a target="_blank" href="https://www.liaoxuefeng.com/">廖雪峰</a></el-tag>
        <el-tag><a target="_blank" href="http://www.w3cschool.cn/">w3cschool</a></el-tag>
        <el-tag><a target="_blank" href="http://www.w3school.com.cn/">w3school</a></el-tag>
      </h3></el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row>
      <el-col :sm="4" :xs="24"><h3>前端网站</h3></el-col>
      <el-col :sm="20" :xs="24">
        <el-tag><a target="_blank" href="http://jquery.cuishifeng.cn/">JQuery</a></el-tag>
        <el-tag><a target="_blank" href="https://www.cnblogs.com/tim-li/archive/2012/08/06/2580252.html">canvas</a></el-tag>
        <el-tag><a target="_blank" href="https://cn.vuejs.org/v2/guide/">Vue</a></el-tag>
        <el-tag><a target="_blank" href="https://router.vuejs.org/zh/">Vue Router</a></el-tag>
        <el-tag><a target="_blank" href="https://element.eleme.cn/#/zh-CN/component/installation">ElementUI</a></el-tag>
      </h3></el-col>
    </el-row>
    <el-divider></el-divider>
  </div>
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
