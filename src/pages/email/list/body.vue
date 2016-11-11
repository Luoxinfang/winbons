<template>
  <div class="mail-box-body">
    <el-table
        stripe
        :data="mailList"
        @row-click="$parent.showDetail"
        style="width: 100%">
      <el-table-column
          type="selection"
          width="50">
      </el-table-column>
      <el-table-column
          prop="from"
          label="发件人">
      </el-table-column>
      <el-table-column
          prop="flag"
          label="红旗"
          width="50">
      </el-table-column>
      <el-table-column
          prop="title"
          label="主题">
      </el-table-column>
      <el-table-column
          prop="date"
          label="时间">
      </el-table-column>
      <el-table-column
          prop="customer"
          label="客户">
      </el-table-column>
      <el-table-column
          prop="attached"
          label="附件">
      </el-table-column>
      <el-table-column
          prop="reply"
          label="回复">
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
          @size-change=""
          @current-change=""
          :current-page="5"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
      </el-pagination>
    </div>
  </div>
</template>
<script>
  export default{
    computed: {
      mailList() {
        return this.$parent.mailList
      }
    }
  }
</script>