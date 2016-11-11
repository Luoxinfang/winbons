<template>
  <div class="mail-box-body">
    <el-form class="mail-write" ref="form" :model="form" label-width="80px" @submit.prevent="onSubmit">
      <el-form-item label="收件人">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="抄送">
        <el-input v-model="form.copy"></el-input>
      </el-form-item>
      <el-form-item label="密送">
        <el-input v-model="form.secret"></el-input>
      </el-form-item>
      <el-form-item label="" class="form-label-thin">
        <el-button type="text">删除抄送</el-button>
        <el-button type="text">删除密送</el-button>
      </el-form-item>
      <el-form-item label="主题">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <h3>===上传组件===</h3>
      <el-form-item label="正文">
        <el-input type="textarea" v-model="form.content"></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-button type="success">发送</el-button>
        <el-checkbox label="紧急" v-model="form.important"></el-checkbox>
        <label class="inline-input">
          邮件将于
          <el-input size="small" v-model="form.sendTime"></el-input>
          发送到对方邮箱
        </label>
        <el-dropdown trigger="click" class="fr">
          <span class="el-dropdown-link">
            发件人<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item>双皮奶</el-dropdown-item>
            <el-dropdown-item>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
          <el-input size="small" v-model="form.from"></el-input>
        </el-dropdown>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default{
    data() {
      return {
        form: {
          name: '',
          copy: '',
          secret: '',
          title: '',
          content: '',
          important: false,
          sendTime: '',
          from: ''
        }
      }
    }
  }
</script>