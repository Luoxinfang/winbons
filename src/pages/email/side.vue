<template>
  <div class="mail-side">
    <div class="mail-opt">
      <div class="center">
        <el-button type="text" :style="isList" icon="edit" @click="setWriteModel(0)">收信</el-button>
        <el-button type="text" :style="isWrite" icon="message" @click="setWriteModel(1)">写信
        </el-button>
      </div>
    </div>
    <el-col :span="4" class="mail-nav">
      <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo">
        <el-menu-item-group title="">
          <el-menu-item index="1">收件箱</el-menu-item>
          <el-menu-item index="2">红旗邮件</el-menu-item>
          <el-menu-item index="3">草稿箱</el-menu-item>

        </el-menu-item-group>
        <el-menu-item-group title="">
          <el-menu-item index="4">已发送</el-menu-item>
          <el-menu-item index="5">已删除</el-menu-item>
          <el-menu-item index="6">垃圾邮件</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="">
          <el-submenu index="7">
            <template slot="title">其他文件夹</template>
            <el-menu-item-group title="">
              <el-menu-item index="7-1">文件夹一</el-menu-item>
              <el-menu-item index="7-2">文件夹2</el-menu-item>
              <el-menu-item index="7-3">文件夹3</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="8">
            <template slot="title">邮件标签</template>
            <el-menu-item-group title="">
              <el-menu-item index="8-1">文件夹一</el-menu-item>
              <el-menu-item index="8-2">文件夹2</el-menu-item>
              <el-menu-item index="8-3">文件夹3</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="9">
            <template slot="title">联系人邮件</template>
            <el-menu-item-group title="">
              <el-menu-item index="9-1">文件夹一</el-menu-item>
              <el-menu-item index="9-2">文件夹2</el-menu-item>
              <el-menu-item index="9-3">文件夹3</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu-item-group>
      </el-menu>
    </el-col>
  </div>
</template>
<script>
  const normalColor = '#8c96a0'
  export default{
    computed: {
      isList() {
        return {
          color: this.$parent.writeModel && normalColor || ''
        }
      },
      isWrite() {
        return {
          color: !this.$parent.writeModel && normalColor || ''
        }
      }
    },
    methods: {
      setWriteModel(v) {
        this.$parent.writeModel = !!v
      }
    }
  }
</script>