<template>
  <div class="mail-wrapper">
    <h3 class="title">邮件</h3>
    <mail-side></mail-side>
    <div class="mail-box" :class="{'show-contacts':writeModel}">
      <component :is="head"></component>
      <component :is="body"></component>
    </div>
    <mail-contacts v-show="writeModel"></mail-contacts>
    <el-dialog title="提示" v-model="dialogVisible" size="tiny">
      <span>确定要删除所选邮件吗？</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click.native="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click.native="dialogVisible=false">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>
<script>
  import './index.less'
  import listHead from './list/head.vue'
  import listBody from './list/body.vue'
  import writeHead from './write/head.vue'
  import writeBody from './write/body.vue'
  import mailContacts from './contacts.vue'
  import mailSide from './side.vue'

  export default{
    components: {
      mailContacts,
      mailSide,
      listHead,
      listBody,
      writeHead,
      writeBody
    },
    computed: {
      head() {
        return this.writeModel ? 'writeHead' : 'listHead'
      },
      body() {
        return this.writeModel ? 'writeBody' : 'listBody'
      }
    },
    methods: {
      showDialog() {
        this.dialogVisible = true
      },
      showDetail(data, event) {
        if(event.target.className.indexOf('el-checkbox') === -1) {
          this.$alert(JSON.stringify(data))
        }
      }
    },
    data() {
      return {
        writeModel: false,
        dialogVisible: false,
        dialogData: '',
        mailList: [
          {
            from: '张三',
            flag: 1,
            title: 'Test',
            date: '2016-10-11',
            customer: '中国人民银行',
            attached: 1,
            reply: 1
          },
          {
            from: '伊拉克',
            flag: 1,
            title: 'Secret',
            date: '2016-10-11',
            customer: '白宫',
            attached: 1,
            reply: 1
          }
        ]
      }
    }
  }
</script>