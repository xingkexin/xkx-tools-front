<template>
  <div>
    <el-form label-width="90px">
      <el-form-item label="时间戳(ms):">
        <el-input v-model="timestamp" placeholder="" @keyup.enter.native="getDateTime('timestamp')">
          <el-button slot="append" icon="el-icon-search" v-on:click="getDateTime('timestamp')"></el-button>
        </el-input>
      </el-form-item>
      <el-form-item label="日期:">
        <el-input v-model="date" placeholder="格式:yyyy-MM-dd" @keyup.enter.native="getDateTime('date')">
          <el-button slot="append" icon="el-icon-search" v-on:click="getDateTime('date')"></el-button>
        </el-input>
      </el-form-item>
      <el-form-item label="日期时间:">
        <el-input v-model="datetime" placeholder="格式:yyyy-MM-dd HH:mm:ss" @keyup.enter.native="getDateTime('datetime')">
          <el-button slot="append" icon="el-icon-search" v-on:click="getDateTime('datetime')"></el-button>
        </el-input>
      </el-form-item>
      <el-form-item label="当前时区:">
        {{detail.zoneId}}({{detail.zoneOffset}})
      </el-form-item>
      <el-form-item label="日期时间:">
        {{detail.datetime}}
      </el-form-item>
      <el-form-item label="时间戳(ms):">
        {{detail.timestamp}}
      </el-form-item>
      <el-form-item label="星期几:">
        {{detail.dayOfWeek}}
      </el-form-item>
      <el-form-item label="当年第几天:">
        {{detail.dayOfYear}}
      </el-form-item>
      <el-form-item label="当月第几周:">
        {{detail.weekOfMonth}}
      </el-form-item>
      <el-form-item label="当年第几周:">
        {{detail.weekOfYear}}
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {
    getDateTime,
  } from '@/api'
  export default {
    data() {
      return {
        timestamp: null,
        date: null,
        datetime: null,
        form: {
          type: null,
          val: null,
          zoneId: null,
        },
        detail: {
          zoneId: "Asia/Shanghai",
          zoneOffset: "+08:00",
          timestamp: 1598886973932,
          date: "2020-08-31",
          time: "23:16:13",
          datetime: "2020-08-31 23:16:13",
          dayOfWeek: 1,
          dayOfYear: 244,
          weekOfMonth: 6,
          weekOfYear: 36
        },
      }
    },
    mounted() {
      this.getDateTime()
    },
    methods: {
      async getDateTime(type) {
        if(type) {
          this.form.type = type
          this.form.val = this[type]
        }
        // console.log(this.form)
        try{
          const {
            data
          } = await getDateTime(this.form)
          this.detail = data
        }catch(e){
          console.log('接口调用失败！')
        }
      },
    }
  }
</script>

<style scoped>
</style>
