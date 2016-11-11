<!--
@author: zhangwy
@time: 2016/11/4
-->
<template>
  <div class="mail-box-contacts">
    <h3>通讯录</h3>
    <el-input
      placeholder="搜索名单"
      icon="search"
      v-model="search"
      @click="handleIconClick">
    </el-input>
    <br>
    <el-tree :data="data"
             :props="defaultProps"
             :render-content="renderContent"
    ></el-tree>
  </div>
</template>
<script>
  export default{
    methods: {
      handleIconClick() {
      }
    },
    data() {
      return {
        search: '',
        renderContent(h, node) {
          var avatar = node.node.data.avatar || ''

          var label = h('span', {
            staticClass: 'concat-name'
          }, node.node.data.label)
          if(node.node.level === 1) {
            avatar = h('i', {
              staticClass: 'concat-avatar',
              style: {
                backgroundImage: avatar && `url(${avatar})`
              }
            })
          }
          return h('span', [avatar, label])
        },
        data: [{
          label: '最近联系人（4）',
          children: [
            {label: '本・拉登'},
            {label: '艾曼・扎瓦赫里'},
            {label: '穆罕默德・纳赛尔'},
            {label: '阿里・阿特瓦'}
          ]
        }, {
          label: '公司内部联系人（2）',
          children: [
            {label: '艾萨克·牛顿'},
            {label: '耶稣'}
          ]
        }, {
          label: '公司外部联系人（2）',
          children: [
            {label: '释迦牟尼'},
            {label: '孔子'}
          ]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    }
  }
</script>
<style rel="stylesheet/less" lang="less" scoped></style>

