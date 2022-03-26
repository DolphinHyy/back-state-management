<template>
  <el-dialog
    title="编辑用户信息"
    :visible="setDialog"
    width="30%"
    @close="onClose"
  >

    <el-form ref="form" :model="currentUser" label-width="80px">
      <el-form-item label="当前用户:">
        {{ currentUser.username }}
      </el-form-item>
      <el-form-item label="当前角色:">
        {{ currentUser.role_name }}
      </el-form-item>
      <el-form-item label="分配角色:">
        <el-select v-model="userRole" placeholder="请选择">
          <el-option
            v-for="item in rolesList"
            :key="item.id"
            :label="item.roleName"
            :value="item.roleDesc"
          />
        </el-select>

      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="onClose">取 消</el-button>
      <el-button type="primary" @click="onPut">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { getRolesListAPI, setRoleAPI } from '@/api/roles'
export default {
  name: 'SetDialog',
  components: {

  },
  props: {
    setDialog: {
      type: Boolean,
      required: true
    },
    currentUser: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      rolesList: [],
      userRole: '超级管理员'
    }
  },
  async created() {
    await this.getRolesList()
    // this.userRole = this.currentUser.role_name
  },
  methods: {
    async getRolesList() {
      this.rolesList = await getRolesListAPI()
    },
    onClose() {
      this.$refs.form.resetFields()
      this.$emit('update:setDialog', false)
    },
    async onPut() {
      try {
        await setRoleAPI({ id: this.currentUser.id, roleName: this.userRole })
        this.$emit('更改成功')
      } catch (error) {
        console.dir(error)
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
