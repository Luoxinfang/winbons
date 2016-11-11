<!--
@author roy
-->
<style rel="stylesheet/less" lang="less" scoped>
  @bg-menu: #1c262e;
  @act-menu-green: #24bd82;
  @menu-text-color: #9aa7ae;
  @bg-logo: #3eb8f2;
  @logo-height: 67px;
  .menu-left {
    height: 100%;
    background-color: @bg-menu;
    .logo {
      height: @logo-height;
      line-height: @logo-height;
      background-color: @bg-logo;
      color: #ffffff;
    }
    .el-menu-item:not(.logo) {
      color: @menu-text-color;
      &.is-active {
        background-color: #232f38;
        border-left: 3px solid @act-menu-green;
        color: #ffffff;
      }
    }
  }
  .square {
    height: 80px;
    line-height: 20px;
    text-align: center;
    i {
      margin-top: 26px;
      margin-right: 0;
    }
  }
</style>
<template>
  <el-menu :router="true" mode="vertical" theme="dark"
           :default-active="defaultMenu" class="menu-left">
    <el-menu-item index="/index" class="logo">
      <i class="el-icon-upload"></i>华邦云
    </el-menu-item>
    <el-menu-item index="/index" class="square">
      <i class="el-icon-menu"></i><br>首页
    </el-menu-item>
    <el-menu-item index="/sales" class="square">
      <i class="el-icon-menu"></i><br>销售管理
    </el-menu-item>
    <el-menu-item index="/office" class="square">
      <i class="el-icon-menu"></i><br>协同办公
    </el-menu-item>
    <el-menu-item index="/backstage" class="square">
      <i class="el-icon-menu"></i><br>后台管理
    </el-menu-item>
    <el-menu-item index="/email" class="square">
      <i class="el-icon-message"></i><br>邮件
    </el-menu-item>

    <el-menu-item-group title="经常使用">
      <el-menu-item index="3"><i class="el-icon-message"></i>统计分析</el-menu-item>
      <el-menu-item index="4"><i class="el-icon-message"></i>统计分析</el-menu-item>
      <el-menu-item index="4"><i class="el-icon-message"></i>统计分析</el-menu-item>
      <el-menu-item index="4"><i class="el-icon-message"></i>统计分析</el-menu-item>
      <el-menu-item index="4"><i class="el-icon-message"></i>统计分析</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="最近使用">
      <el-menu-item index="3"><i class="el-icon-message"></i>[客户]三叶草</el-menu-item>
      <el-menu-item index="4"><i class="el-icon-message"></i>[客户]三叶草</el-menu-item>
      <!--      <el-submenu index="5">
              <template slot="title">导航五</template>
              <el-menu-item-group title="分组一">
                <el-menu-item index="5-1">选项1</el-menu-item>
                <el-menu-item index="5-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组二">
                <el-menu-item index="5-3">选项3</el-menu-item>
              </el-menu-item-group>
            </el-submenu>-->
    </el-menu-item-group>
  </el-menu>
</template>
<script>
  export default {
    created() {
      this.defaultMenu = window.location.pathname
    },
    data() {
      return {
        defaultMenu: '/email'
      }
    },
    methods: {}
  }
</script>
