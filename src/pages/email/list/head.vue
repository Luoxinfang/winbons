<template>
  <div class="mail-box-head">
    <el-button type="text">已删除</el-button>
    |
    <el-button type="text">彻底删除</el-button>
    |
    <el-button type="text" @click="$parent.showDialog(this)">全部删除</el-button>
    |
    <el-dropdown trigger="click">
        <span class="el-dropdown-link">
        标记为<i class="el-icon-caret-bottom el-icon--right"></i>
       </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item>双皮奶</el-dropdown-item>
        <el-dropdown-item>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    |
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        移动到<i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item>双皮奶</el-dropdown-item>
        <el-dropdown-item>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    |
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        查看<i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item>双皮奶</el-dropdown-item>
        <el-dropdown-item>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>