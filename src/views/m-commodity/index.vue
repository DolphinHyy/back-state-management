<template>
  <div>
    <el-card class="box-card">
      <div style="margin-top: 15px;" class="input-add">
        <el-input v-model="pageParams.query" style="width:50%;marginRight:50px" placeholder="请输入内容">
          <el-button slot="append" class="search" icon="el-icon-search" @click="onSearch" />
        </el-input>
        <el-button class="add-user" type="primary" @click="addDialog=true">添加用户</el-button>
      </div>
      <user-list :table-data="tableData" :search-val="searchVal" @onShowEdit="onShowEdit" @onEdit="onEdit" @delSuccess="delSuccess" @onSet="onSet" />
      <el-pagination
        layout="prev, pager, next"
        :total="total"
        :page-size="pageParams.pagesize"
        @current-change="onPageChange"
      />
    </el-card>
    <!-- dialog -->
    <add-dialog :add-dialog.sync="addDialog" @addSuccess="addSuccess" />
    <edit-dialog :info-form="currentUser" :edit-dialog.sync="editDialog" @putUser="putUser" />
    <set-dialog :current-user="currentUser" :set-dialog.sync="setDialog" @putUser="putUser" />
  </div>
</template>

<script>
import AddDialog from './components/AddDialog.vue'
import EditDialog from './components/EditDialog.vue'
import SetDialog from './components/SetDialog.vue'
import UserList from './components/UserList.vue'
import { getUsersListAPI, getUserAPI, putUserAPI } from '@/api/user.js'
export default {
  components: {
    UserList,
    EditDialog,
    AddDialog,
    SetDialog
  },
  data() {
    return {
      tableData: [],
      searchVal: '',
      editDialog: false,
      addDialog: false,
      setDialog: false,
      pageParams: {
        query: '',
        pagenum: 1,
        pagesize: 5
      },
      total: 0,
      currentUser: {}
    }
  },
  created() {
    this.getUsersList(this.pageParams)
  },
  methods: {
    async getUsersList(params) {
      const res = await getUsersListAPI(params)
      this.tableData = res.users
      this.total = res.total
    },
    onShowEdit() {
      console.log(1)
      this.editDialog = true
    },
    addSuccess() {
      this.addDialog = false
      this.getUsersList(this.pageParams)
    },
    async onPageChange(val) {
      // console.log(val)
      this.pageParams.pagenum = val
      // console.log(this.pageParams)
      await this.getUsersList(this.pageParams)
    },
    async onEdit(id) {
      const res = await getUserAPI(id)
      this.currentUser = res
      this.editDialog = true
    },
    async putUser(data) {
      await putUserAPI(data)
      this.$message.success('更新数据成功')
      this.editDialog = false
      this.getUsersList(this.pageParams)
    },
    async delSuccess() {
      await this.getUsersList(this.pageParams)
    },
    onSet(item) {
      // const res = await getUserAPI(id)
      // this.currentUser = res
      this.currentUser = item
      this.setDialog = true
    },
    async onSearch() {
      await this.getUsersList(this.pageParams)
    }
  }
}
</script>

<style scoped lang="scss">
.box-card{
  margin-top: 15px;
}
input-add{
  display: flex;
.add-user{
  border-left: 1px solid #ccc !important;
}
}
</style>
