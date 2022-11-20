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
      <el-aside :width="isCollapse ? '65px' : '200px'">
        <!-- 侧边栏菜单区域 -->
        <el-menu
          background-color="#373d41"
          text-color="#eaedfe"
          :unique-opened="true"
          :collapse="isCollapse"
          :collapse-transition="false"
        >
          <div class="toggle_top" @click="toggle_show">|||</div>
          <!-- 一级菜单 -->
          <el-submenu
            :index="item.id + ''"
            v-for="item in menulist"
            :key="item.id"
          >
            <template slot="title">
              <!-- 图标 -->
              <i :class="iconsObj[item.id]"></i>
              <span>{{ item.authName }}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item
              :index="subItem.id + ''"
              v-for="subItem in item.children"
              :key="subItem.id"
            >
              <i class="el-icon-menu"> </i>
              {{ subItem.authName }}
            </el-menu-item>
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
  data() {
    return {
      //目录的数组
      menulist: [],
      //一级目录的图标
      iconsObj: {
        125: "iconfont icon-wode",
        103: "iconfont icon-tupian",
        101: "iconfont icon-xinxi",
        102: "iconfont icon-dingdan",
        145: "iconfont icon-rili",
      },
      //侧边栏不折叠
      isCollapse: false,
    };
  },
  created() {
    this.getMenuList();
  },
  methods: {
    //侧边栏的显示与折叠
    toggle_show() {
      this.isCollapse = !this.isCollapse;
    },
    //退出登录
    loginout() {
      //清除token
      window.sessionStorage.clear();
      //跳转登陆页面
      this.$router.push("/login");
    },
    //获取目录的数据
    async getMenuList() {
      //请求数据
      const { data: res } = await this.$http.get("menus");
      console.log(res);
      //判断状态码
      if (res.meta.status !== 200) return this.$message.error(res.meta.meg);
      this.menulist = res.data;
    },
  },
};
</script>

<style lang="less" scoped>
.toggle_top {
  color: #fff;
  font-size: 10px;
  line-height: 30px;
  letter-spacing: 2px;
  cursor: pointer;
  text-align: center;
  background-color: #424b5c;
}
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
.em-menu {
  border-right: none;
}
.el-main {
  background-color: #eaedfe;
}
</style>
