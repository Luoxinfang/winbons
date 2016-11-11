<!--
@author roy
-->
<style rel="stylesheet/less" lang="less" scoped>
  .el-menu {
    background-color: #ffffff;
  }
</style>
<template>
  <div class="nav-bar">
    <el-menu :default-active="navActive" class="el-menu-demo"
             mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">
        <span class="el-icon-arrow-left" @click="goBack"></span>
      </el-menu-item>
      <el-menu-item index="2">
        <span class="el-icon-setting"></span>
      </el-menu-item>
      <el-menu-item index="3">处理中心</el-menu-item>
      <el-submenu index="4">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="5">
        <router-link to="demo">demo</router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
  export default{
    data() {
      return {
        'navActive': 2
      }
    },
    methods: {
      handleSelect() {

      },
      goBack() {
        this['$router'].go(-1)
      }
    }
  }
</script>
