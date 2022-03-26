<template>
  <div>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column
        type="index"
        label="#"
        width="180"
      />
      <el-table-column
        prop="authName"
        label="权限名称"
        width="180"
      />
      <el-table-column
        prop="path"
        label="路径"
      />
      <el-table-column
        label="权限等级"
      >
        <template slot-scope="{row}">
          <div>
            {{ AuthLevel(row.level) }}
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getAuthorityListAPI } from '@/api/authority'
export default {
  components: {

  },
  data() {
    return {
      tableData: []
    }
  },
  computed: {

  },
  created() {
    this.getAuthorityList()
  },
  methods: {
    async getAuthorityList() {
      this.tableData = await getAuthorityListAPI('list')
    },
    AuthLevel(val) {
      if (val === '0') {
        return '等级一'
      } else if (val === '1') {
        return '等级二'
      } else {
        return '等级三'
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
