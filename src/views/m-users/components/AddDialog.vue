<template>
  <el-dialog
    title="添加用户"
    :visible="addDialog"
    width="30%"
    @close="onClose"
  >
    <el-form ref="form" :model="addForm" :rules="rules" label-width="80px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="addForm.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="addForm.password" />
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="addForm.email" />
      </el-form-item>
      <el-form-item label="手机号" prop="mobile">
        <el-input v-model="addForm.mobile" />
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="onClose">取 消</el-button>
      <el-button type="primary" @click="register">注 册</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { addUserAPI } from '@/api/user'
export default {
  name: 'AddDialog',
  components: {

  },
  props: {
    addDialog: {
      type: Boolean,
      required: true
    }
  },
  data() {
    const checkMobile = (rule, value, callback) => {
      const mobileReg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
      if (mobileReg.test(value)) {
        callback()
      }
      callback(new Error('请输入正确的手机号码'))
    }
    const checkEMail = (rule, value, callback) => {
      const EMailReg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
      if (EMailReg.test(value)) {
        callback()
      }
      callback(new Error('请输入正确的邮箱地址'))
    }
    const checkPassword = (rule, value, callback) => {
      const passwordReg = /^\w{5,16}$/
      if (passwordReg.test(value)) {
        callback()
      }
      callback(new Error('用户名和密码只能由6-16位的数字、英文、下划线组成'))
    }
    return {
      addForm: {
        username: '',
        password: '',
        email: '',
        mobile: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 5, max: 16, message: '用户名和密码只能由6-16位的数字、英文、下划线组成', validator: checkPassword, trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 5, max: 16, message: '用户名和密码只能由6-16位的数字、英文、下划线组成', validator: checkPassword, trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { min: 5, max: 20, message: '请输入正确的邮箱地址', validator: checkEMail, trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { min: 3, max: 5, message: '请输入正确的手机号码', validator: checkMobile, trigger: 'blur' }
        ]
      }
    }
  },
  created() {

  },
  methods: {
    onClose() {
      this.$emit('update:addDialog', false)
      this.$refs.form.resetFields()
    },
    async register() {
      console.log(1)
      await this.$refs.form.validate()
      console.log('校验成功', this.addForm)
      await addUserAPI(this.addForm)
      this.$message.success('添加用户成功')
      this.$emit('addSuccess')
    }
  }
}
</script>

<style scoped lang="scss">

</style>
