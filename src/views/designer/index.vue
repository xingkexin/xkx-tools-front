<template>
  <el-container>
    <el-aside width="260px">
      <div style="text-align: center; margin: 5px;">
        <el-button type="primary" @click="reset">重置</el-button>
      </div>
      <el-collapse :value="['1']">
        <el-collapse-item title="ElementUI布局" name="1">
          <div>
            <p>布局容器：</p>
            <el-button type="primary" size="mini" round @click="addContainer('1')">完整container</el-button>
            <el-button type="primary" size="mini" round @click="addContainer('2')">左右container</el-button>
            <p>常用等宽列数：</p>
            <el-button type="primary" size="mini" round @click="addRow(1, 1)" style="width: 46px;">1</el-button>
            <el-button type="primary" size="mini" round @click="addRow(1, 2)" style="width: 46px;">2</el-button>
            <el-button type="primary" size="mini" round @click="addRow(1, 3)" style="width: 46px;">3</el-button>
            <el-button type="primary" size="mini" round @click="addRow(1, 4)" style="width: 46px;">4</el-button>
            <el-button type="primary" size="mini" round @click="addRow(1, 6)" style="width: 46px;">6</el-button>
            <el-button type="primary" size="mini" round @click="addRow(1, 8)" style="width: 46px;">8</el-button>
            <el-button type="primary" size="mini" round @click="addRow(1, 12)" style="width: 46px;">12</el-button>
            <el-button type="primary" size="mini" round @click="addRow(1, 24)" style="width: 46px;">24</el-button>
            <p>常用列宽：</p>
            <el-button type="primary" size="mini" round @click="addRow(2, '3-18-3')">3-18-3</el-button>
            <el-button type="primary" size="mini" round @click="addRow(2, '3:18')">3:18</el-button>
            <el-button type="primary" size="mini" round @click="addRow(2, '6-12-6')">6-12-6</el-button>
            <p>自定义列宽（分隔符：非数字即可）</p>
            <el-input v-model="customRow" placeholder="如：6 12 6"></el-input>
            <el-button type="primary" size="mini" round @click="addRow(2, null)">添加</el-button>
            <el-button type="primary" size="mini" round @click="customRow = ''">清空</el-button>
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-aside>
    <el-main>
      <span>说明：虚线为布局容器；实线为内容容器。</span>
      <el-tabs type="border-card" @tab-click="tabChange">
        <el-tab-pane label="设计">
          <div v-if="'layout' == currType">
            <el-button type="primary" icon="el-icon-delete" @click="deleteCurr">删除当前元素</el-button>
          </div>
          <div v-else-if="'content' == currType">
            <el-button type="primary" icon="el-icon-delete" @click="clearChildren">清空内部元素</el-button>
          </div>
          <xkx-element path="root" :obj="rootEle" @click="clickHandler"></xkx-element>
        </el-tab-pane>
        <el-tab-pane label="代码" name="code">
          <el-input type="textarea" autosize :value="html" readonly>
          </el-input>
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
        html: null,
        rootEle: {
          name: 'div',
          active: true,
          children: []
        },
        currType: 'content',
        // currPath: 'root',
        currEle: this.rootEle,
        currEleIndex: 0,
        parentEle: null
      }
    },
    methods: {
      reset() {
        this.rootEle = {
          name: 'div',
          active: true,
          children: []
        }
        // this.currPath = 'root',
        this.currEle = this.rootEle
        this.html = null
      },
      addContainer(type) {
        if(!this.currEle) this.currEle = this.rootEle
        const container = {
          name: 'container',
          active: false,
          children: []
        }
        const header = {
          name: 'header',
          active: false,
          children: []
        }
        const aside = {
          name: 'aside',
          active: false,
          children: []
        }
        const main = {
          name: 'main',
          active: false,
          children: []
        }
        const footer = {
          name: 'footer',
          active: false,
          children: []
        }
        if(type == '1') {
          // 添加完整容器
          container.children.push(header)
          // container.children.push(aside)
          container.children.push(main)
          container.children.push(footer)
        } else if(type == '2') {
          // 添加左右布局容器
          container.children.push(aside)
          container.children.push(main)
        } else {
          return
        }
        if(this.currType == 'content') {
          this.currEle.children.push(container)
        } else if(this.currType == 'layout') {
          this.parentEle.children.splice(this.currEleIndex, 0, container)
        }
      },
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
          value = value?value:this.customRow
          const cols = value.split(/[-\s]/)
          for(let i in cols){
            const offsetAndColspan = cols[i].split(':')
            let offset = 0
            let colspan = 1
            if(offsetAndColspan.length == 1){
              colspan = offsetAndColspan[0]
            } else {
              offset = offsetAndColspan[0]
              colspan = offsetAndColspan[1]
            }
            const col = {
              name: 'col',
              offset: new Number(offset),
              span: new Number(colspan),
              active: false,
              children: []
            }
            row.children.push(col)
          }
        }
        if(this.currType == 'content') {
          this.currEle.children.push(row)
        } else if(this.currType == 'layout') {
          this.parentEle.children.splice(this.currEleIndex, 0, row)
        }
      },
      tabChange(tab) {
        if(tab.name == 'code') this.genCode()
      },
      deleteCurr() {
        this.currEle.active = false
        this.parentEle.children.splice(this.currEleIndex, 1)
        this.currType = 'content'
        this.currEle = this.rootEle
        this.currEleIndex = 0
        this.currEle.active = true
      },
      clearChildren() {
        this.currEle.children = []
      },
      genCode() {
        const html = this._genChild(this.rootEle.children, 1)
        this.html = html
      },
      _genChild(children, level) {
        let childrenStr = ''
        if(null == children) return childrenStr
        for(let i in children) {
          let childStr
          const ele = children[i]
          if(ele.name == 'col') {
            childStr = this._genCol(ele, level)
          } else {
            childStr = this._genEle(ele, level)
          }
          childrenStr += childStr
        }
        return childrenStr
      },
      _genEle(ele, level) {
        const blankSpace = this._genBlank(level)
        let html = '\n'
        html += blankSpace + '<el-' + ele.name + '>'
        html += this._genChild(ele.children, level+1)
        html += '\n' + blankSpace + '</el-' + ele.name + '>'
        return html
      },
      _genCol(ele, level) {
        const blankSpace = this._genBlank(level)
        let html = ''
        // 开始标签
        html += '\n' + blankSpace + '<el-col'
        // 开始标签的属性
        html += ' :span="' + ele.span + '"'
        if(ele.offset > 0) html += ' :offset="' + ele.offset + '"'
        html += '>'
        // 子标签
        html += this._genChild(ele.children, level+1)
        // 结束标签
        html += '\n' + blankSpace + '</el-col>'
        // let html = '<el-col :span="' + ele.span + '">' + this._genChild(ele.children, level+1) + '</el-col>'
        // console.log(html)
        return html
      },
      _genBlank(num) {
        let result = ''
        for(let i=1; i<num; i++) {
          result += '  '
        }
        return result
      },
      clickHandler(type, path) {
        // 根据path，定位到当前选中的元素
        console.log(this.currEle)
        console.log(JSON.stringify(this.currEle))
        console.log(path)
        this.currEle.active = false
        this.currEle = this.rootEle
        const indexList = path.split('-')
        for(let i=1; i<indexList.length; i++) {
          this.parentEle = this.currEle
          const index = indexList[i]
          this.currEle = this.currEle.children[index]
          this.currEleIndex = index
        }
        console.log(JSON.stringify(this.currEle))
        this.currType = type
        this.currEle.active = true
        // this.currPath = path
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
  }
</style>
