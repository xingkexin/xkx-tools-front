<template>
  <el-container>
    <el-aside width="260px">
      <div style="text-align: center; margin: 5px;">
        <el-button type="primary" @click="genCode">生成代码</el-button>
      </div>
      <el-collapse :value="['1']">
        <el-collapse-item title="ElementUI布局" name="1">
          <div>
            <!-- <el-tag>container</el-tag>
            <el-tag>header</el-tag>
            <el-tag>aside</el-tag>
            <el-tag>main</el-tag>
            <el-tag>footer</el-tag> -->
            <el-tag v-popover:rowPopover>row</el-tag>
          </div>
        </el-collapse-item>
      </el-collapse>
      <el-popover placement="top" width="160" ref="rowPopover">
        <p>
          <el-button type="primary" size="mini" round @click="add('col', 1, 1)">1</el-button>
          <el-button type="primary" size="mini" round @click="add('col', 1, 2)">2</el-button>
          <el-button type="primary" size="mini" round @click="add('col', 1, 3)">3</el-button>
          <el-button type="primary" size="mini" round @click="add('col', 1, 4)">4</el-button>
          <el-button type="primary" size="mini" round @click="add('col', 1, 6)">6</el-button>
          <el-button type="primary" size="mini" round @click="add('col', 1, 8)">8</el-button>
          <el-button type="primary" size="mini" round @click="add('col', 1, 12)">12</el-button>
          <el-button type="primary" size="mini" round @click="add('col', 1, 24)">24</el-button>
        </p>
      </el-popover>
    </el-aside>
    <el-main>
      <el-tabs type="border-card" @tab-click="tabChange">
        <el-tab-pane label="设计">
          <el-row v-for="(row, index) in rowList" :key="index" class="component">
            <el-col v-for="(col, index) in row.children" :key="index" :span="col.span" class="component"></el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="代码" name="code">
          <div>
            {{html}}
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        rowList: [],
        html: null
      }
    },
    methods: {
      add(eleName, type, value) {
        const row = {
          name: 'row',
          children: []
        }
        if(1 == type) {
          // col平均分，value支持：1、2、3、4、6、8、12、24
          const colspan = 24/value
          for(let i=0; i<value; i++){
            const col = {
              name: eleName,
              span: colspan,
              width: null,
              children: null
            }
            row.children.push(col)
          }
        }
        this.rowList.push(row)
        // console.log(this.rowList)
      },
      tabChange(tab) {
        if(tab.name == 'code') this.genCode()
      },
      genCode() {
        const html = this._genChild(this.rowList)
        this.html = html
      },
      _genChild(children) {
        let childrenStr = ''
        if(null == children) return childrenStr
        for(let i in children) {
          let childStr
          const ele = children[i]
          if(ele.name == 'row') {
            childStr = this._genRow(ele)
          }else if(ele.name == 'col') {
            childStr = this._genCol(ele)
          }
          childrenStr += childStr
        }
        return childrenStr
      },
      _genRow(ele) {
        let html = '<el-row>' + this._genChild(ele.children) + '</el-row>'
        // console.log(html)
        return html
      },
      _genCol(ele) {
        let html = '<el-col :span="' + ele.span + '">' + this._genChild(ele.children) + '</el-col>'
        // console.log(html)
        return html
      }
    }
  }
</script>

<style scoped lang="less">
  .el-aside {
    padding: 10px;
    background-color: #F3F3F3;
    border-right-width: 10px;
    border-right-style: groove;

    .el-collapse {}

    .el-collapse-item {
      background-color: #F3F3F3;

      .el-tag {
        margin: 5px;
        width: 80px;
        text-align: center;
      }
    }
  }

  .el-main {
    margin: 0;
    padding: 0;
    min-height: 600px;
    background-color: #F3F3F3;
    .el-tabs {
      margin: 10px;
    }
    .el-tab-pane {
      min-height: 500px;
    }
    .component {
      border: 1px dashed #000;
      min-height: 50px;
      min-width: 10px
    }
  }
</style>
