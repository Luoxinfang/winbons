<!--
@author roy
-->
<style rel="stylesheet/less" lang="less" scoped>
  .demo {
    padding: 10px;
  }
</style>
<template>
  <div class="demo">
    <h3>消息框</h3>
    <el-tag @click.native="openMessage(1)">提示</el-tag>
    <el-tag @click.native="openMessage(2)">确认</el-tag>
    <el-tag @click.native="openMessage(3)">输入</el-tag>
    <el-tag @click.native="openMessage(4)">自定义</el-tag>
    <h3>对话框</h3>
    <el-tag type="primary" @click.native="openDialog(1)">提示</el-tag>


    <el-button type="text" @click.native="openDialog(1)">打开嵌套表格的 Dialog</el-button>
    <el-button type="text" @click.native="closeDialog">关闭嵌套表格的 Dialog</el-button>
    <el-dialog title="收货地址" v-model="dialogTableVisible" ref="dialog-1">
      <el-table :data="gridData">
        <el-table-column property="date" label="日期" width="150"></el-table-column>
        <el-table-column property="name" label="姓名" width="200"></el-table-column>
        <el-table-column property="address" label="地址"></el-table-column>
      </el-table>
    </el-dialog>
    <!-- Form -->
    <el-button type="text" @click.native="dialogFormVisible = true">打开嵌套表单的 Dialog
    </el-button>
    <el-dialog title="收货地址" v-model="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click.native="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click.native="dialogFormVisible = false">确 定</el-button>
      </span>
    </el-dialog>


    <h3>弹出框</h3>
    <el-popover
      placement="top"
      title="标题"
      width="200"
      trigger="click"
      content="is that ok">
      <el-button slot="reference">click激活上方</el-button>
    </el-popover>
    <el-popover
      ref="popover4"
      placement="right"
      width="560"
      trigger="click">
      <el-table :data="gridData">
        <el-table-column width="150" property="date" label="日期"></el-table-column>
        <el-table-column width="100" property="name" label="姓名"></el-table-column>
        <el-table-column width="300" property="address" label="地址"></el-table-column>
      </el-table>
    </el-popover>
    <el-button v-popover:popover4>click 激活</el-button>
    <el-popover
      ref="popover5"
      placement="top"
      width="160">
      <p>这是一段内容这是一段内容确定删除吗？</p>
      <div style="text-align: right; margin: 0">
        <el-button size="mini" type="text">取消</el-button>
        <el-button type="primary" size="mini" @click="closeDialog">确定</el-button>
      </div>
      <el-button slot="reference">删除</el-button>
    </el-popover>


    <el-dialog title="提示" v-model="dialogVisible" size="tiny">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click.native="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click.native="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  import Core from '../../assets/js/core'
  export default{
    data() {
      return {
        msg: 'Hi,Vue!',
        dialogVisible: false,
        dialogTableVisible: false,
        dialogFormVisible: false,
        formLabelWidth: '80px',
        gridData: [
          {date: '2016-11-7', name: 'roy', address: '@china'},
          {date: '2016-11-7', name: 'roy', address: '@china'},
          {date: '2016-11-7', name: 'roy', address: '@china'}
        ],
        form: {}
      }
    },
    methods: {
      //打开消息框
      openMessage(type) {
        switch(type) {
          case 1:
            this.$alert('this is a message box', {
              callback: action => {
                this.$message({
                  type: 'info',
                  message: `action: ${action}`
                })
              }
            })
            break
          case 2:
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
              type: 'warning'
            }).then(() => {
              this.$message({
                type: 'success',
                message: '删除成功!'
              })
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消删除'
              })
            })
            break
          case 3:
            this.$prompt('请输入邮箱', '提示', {
              inputPattern: Core.RegExp.email,
              inputErrorMessage: '邮箱格式不正确'
            }).then(({value}) => {
              this.$message({
                type: 'success',
                message: '你的邮箱是: ' + value
              })
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '取消输入'
              })
            })
            break
          case 4:
            this.$msgbox({
              title: '消息',
              lockScroll: true,
              message: this['msg'],
              showCancelButton: true
            }).then(action => {
              this.$message({
                type: 'info',
                message: 'action: ' + action
              })
            })
            break
        }
      },
      //打开对话框
      openDialog(type) {
        console.log(type)
        switch(type) {
          case 1:
            this['$refs']['dialog-1'].open()
        }
      },
      //关闭对话框
      closeDialog() {
        this['$refs']['dialog-1'].close()
      }
    }
  }
</script>
