<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <el-container class="home-container">
    <!-- 头部区 -->
    <el-header>
      <div>电商管理系统</div>
      <el-button type="info" @click="loginout()">退出</el-button>
    </el-header>
    <!--主体 -->
    <el-container>
      <!-- 左侧边栏 -->
      <el-aside width="200px">
        <!-- 侧边栏菜单区域 -->
        <el-menu background-color="#373d41" text-color="#eaedfe">
          <!-- 一级菜单 -->
          <el-submenu index="1">
            <template slot="title">
              <!-- 图标 -->
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item index="1-4-1">
              <i class="el-icon-location"> </i>
              选项1
            </el-menu-item>
            <el-menu-item index="1-4-1">
              <i class="el-icon-location"> </i>
              选项1</el-menu-item
            >
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧主体 -->
      <el-main> </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    loginout() {
      //清除token
      window.sessionStorage.clear();
      //跳转登陆页面
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="less" scoped>
.home-container {
  height: 100vh;
}
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  color: #eaedfe;
  font-size: 25px;
  > div {
    text-indent: 3vh;
    display: flex;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
  }
}
.el-aside {
  background-color: #333744;
}
.el-main {
  background-color: #eaedfe;
}
</style>
