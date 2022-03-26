<template>
  <el-dialog
    title="编辑用户信息"
    :visible="editDialog"
    width="30%"
    @close="onClose"
  >

    <el-form ref="form" :model="infoForm" :rules="rules" label-width="80px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="infoForm.username" disabled />
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="infoForm.email" />
      </el-form-item>
      <el-form-item label="手机号" prop="mobile">
        <el-input v-model="infoForm.mobile" />
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="onClose">取 消</el-button>
      <el-button type="primary" @click="onPut">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'EditDialog',
  components: {

  },
  props: {
    editDialog: {
      type: Boolean,
      required: true
    },
    infoForm: {
      type: Object,
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
    return {
      rules: {
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
      this.$emit('update:editDialog', false)
      this.$refs.form.resetFields()
    },
    async onPut() {
      await this.$refs.form.validate()
      console.log('编辑校验通过')
      this.$emit('putUser', this.infoForm)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
