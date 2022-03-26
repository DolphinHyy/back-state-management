<template>
  <div>
    <el-table
      :data="tableData"
      border
      style="width: 100%; marginTop:25px"
    >
      <el-table-column
        prop="id"
        label="#"
        width="50"
      />
      <el-table-column
        prop="username"
        label="姓名"
      />
      <el-table-column
        prop="mobile"
        label="电话"
      />
      <el-table-column
        prop="role_name"
        label="角色"
      />
      <el-table-column
        prop="mg_state"
        label="状态"
      >
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.mg_state"
            active-color="#13ce66"
            inactive-color="#ff4949"
            @change="changeVal(scope.row.id,scope.row.mg_state)"
          />
        </template>
        <!-- <el-switch
          :value="mg_state"
          active-color="#13ce66"
          inactive-color="#ff4949"
          @click.native="changeVal(id,mg_state)"
        /> -->
      </el-table-column>
      <el-table-column
        prop="operation"
        label="操作"
      >
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" @click="$emit('onEdit',scope.row.id)" />
          <el-button type="danger" icon="el-icon-delete" @click="delUser(scope.row.id)" />
          <el-button type="warning" icon="el-icon-setting" @click="$emit('onSet',scope.row)" />
        </template>
      </el-table-column>
    </el-table>

    <!-- 弹层 -->
  </div>
</template>

<script>
import { changeUserStateAPI, delUserAPI } from '@/api/user'
export default {
  name: 'UserList',
  components: {

  },
  props: {
    tableData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {

    }
  },
  created() {
  },
  methods: {

    async changeVal(id, state) {
      console.log(id, state)
      const res = await changeUserStateAPI(id, state)
      state = !state
      console.log(res)
    },
    async delUser(id) {
      await this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async() => {
        await delUserAPI(id)
        this.$emit('delSuccess')
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    filterHandler(value, row, column) {
      const property = column['property']
      return row[property] === value
    },
    fn() {
      console.log('点击有效')
    }
  }
}
</script>

<style scoped lang="scss">

</style>
