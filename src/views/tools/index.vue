<template>
  <div>
    <el-aside width="200px" class="hidden-xs-only">
      <Menu/>
    </el-aside>
    <el-main>
      <router-view/>
    </el-main>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'

export default {
  components: {
    Menu
  }
}
</script>

<style>
</style>
