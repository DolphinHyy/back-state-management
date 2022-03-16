<template>
  <section class="app-main">
    <Addr />
    <!-- <div>
      <strong>首页</strong>
      <span class="nav">
        <i class="el-icon-arrow-right" />
        <span>用户管理</span>
        <i class="el-icon-arrow-right" />
        <span>用户列表</span>
      </span>
    </div> -->

    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
import Addr from './Addr.vue'

export default {
  name: 'AppMain',
  components: { Addr },
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 20PX;
  background-color: #eaedf1;
}
.nav{
  color:#606266;
}
.fixed-header+.app-main {
  padding-top: 50px;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
