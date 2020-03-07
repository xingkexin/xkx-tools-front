<template>
  <el-container>
    <el-aside width="260px">
      <div style="text-align: center; margin: 5px;">
        <el-button type="primary" @click="genCode">生成代码</el-button>
      </div>
      <el-collapse :value="['1']">
        <el-collapse-item title="ElementUI布局" name="1">
          <div>
            <p>快速生成等宽列数：</p>
            <el-button type="primary" size="mini" round @click="addRow(1, 1)" style="width: 46px;">1</el-button>
            <el-button type="primary" size="mini" round @click="addRow(1, 2)" style="width: 46px;">2</el-button>
            <el-button type="primary" size="mini" round @click="addRow(1, 3)" style="width: 46px;">3</el-button>
            <el-button type="primary" size="mini" round @click="addRow(1, 4)" style="width: 46px;">4</el-button>
            <el-button type="primary" size="mini" round @click="addRow(1, 6)" style="width: 46px;">6</el-button>
            <el-button type="primary" size="mini" round @click="addRow(1, 8)" style="width: 46px;">8</el-button>
            <el-button type="primary" size="mini" round @click="addRow(1, 12)" style="width: 46px;">12</el-button>
            <el-button type="primary" size="mini" round @click="addRow(1, 24)" style="width: 46px;">24</el-button>
            <p>自定义列宽（分隔符：非数字即可）</p>
            <el-input v-model="customRow" placeholder="如：6 12 6"></el-input>
            <el-button type="primary" size="mini" round @click="addRow(2)">添加</el-button>
            <el-button type="primary" size="mini" round @click="customRow = ''">清空</el-button>
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-aside>
    <el-main>
      <el-tabs type="border-card" @tab-click="tabChange">
        <el-tab-pane label="设计">
          <xkx-element :path="root" :obj="rootEle" @click="clickHandler"></xkx-element>
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
  import XkxElement from './components/Element.vue'
  export default {
    components: {
      XkxElement
    },
    data() {
      return {
        customRow: null,
        rowList: [],
        html: null,
        rootEle: {
          name: 'div',
          active: true,
          children: []
        },
        currPath: 'root',
        currEle: this.rootEle
      }
    },
    methods: {
      addRow(type, value) {
        if(!this.currEle) this.currEle = this.rootEle
        const row = {
          name: 'row',
          active: false,
          children: []
        }
        if(1 == type) {
          // col平均分，value支持：1、2、3、4、6、8、12、24
          const colspan = 24/value
          for(let i=0; i<value; i++){
            const col = {
              name: 'col',
              span: new Number(colspan),
              active: false,
              children: []
            }
            row.children.push(col)
          }
        } else if(type == 2) {
          const cols = this.customRow.split(/\D/)
          for(let i in cols){
            const colspan = cols[i]
            const col = {
              name: 'col',
              span: new Number(colspan),
              active: false,
              children: []
            }
            row.children.push(col)
          }
        }
        this.currEle.children.push(row)
        // console.log(JSON.stringify(this.currEle))
        // console.log(JSON.stringify(this.rowList))
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
      },
      clickHandler(path) {
        // 根据path，定位到当前选中的元素
        this.currEle.active = false
        this.currEle = this.rootEle
        const indexList = path.split('-')
        for(let i=1; i<indexList.length; i++) {
          const index = indexList[i]
          this.currEle = this.currEle.children[index]
        }
        this.currEle.active = true
        this.currPath = path
      },
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
      .el-button {
        margin: 3px;
      }
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
