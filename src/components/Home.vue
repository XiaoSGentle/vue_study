<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div><el-button type="info" @click="loginout()">退出</el-button></div>
</template>

<script>
export default {
  methods: {
    loginout() {
      //清除token
      window.sessionStorage.clear()
      //跳转登陆页面
      this.$router.push('/login')
    },
  },
}
</script>

<style lang="less" scoped>
</style>>
