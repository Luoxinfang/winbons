<!--
@author roy
@time 2016.11.03
-->
<style lang="less" rel="stylesheet/less" scoped>
  @menu-width: 140px;
  @header-height: 67px;
  @bg-container:#eff7f7;
  .page {
    position: relative;
    .left {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: @menu-width;
    }
    .right {
      position: absolute;
      top: 0;
      left: @menu-width;
      bottom: 0;
      right: 0;
      > .container {
        position: absolute;
        top: @header-height;
        bottom: 0;
        width: 100%;
        background-color: @bg-container;
      }
    }
  }
</style>
<template>
  <div class="page">
    <div class="left">
      <menu-left></menu-left>
    </div>
    <div class="right">
      <header class="header">
        <nav-bar></nav-bar>
      </header>
      <div class="container">
        <router-view class="view"></router-view>
      </div>

    </div>
  </div>
</template>

<script>
  import './assets/style/normalize.css'
  import './assets/style/global.less'
  import NavBar from './components/nav/nav'
  import MenuLeft from './components/menu/menu'

  export default {
    name: 'app',
    data() {
      return {}
    },
    components: {
      NavBar,
      MenuLeft
    },
    methods: {}
  }

</script>
