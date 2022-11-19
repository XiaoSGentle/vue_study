<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="login_page">
    <div class="login_box">
      <el-form
        class="login_form"
        ref="loginFromRef"
        :model="usermess"
        :rules="messRules"
      >
        <h1>LOGIN</h1>
        <el-form-item prop="username">
          <el-input
            prefix-icon="el-icon-user-solid"
            placeholder="请输入用户名"
            v-model="usermess.username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            prefix-icon="el-icon-lock"
            type="password"
            placeholder="请输入密码"
            v-model="usermess.password"
          ></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" round @click="login">登录</el-button>
          <el-button type="danger" round>注册</el-button>
          <el-button type="warning" round @click="resetLoginFrom"
            >清除</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      usermess: {
        username: "admin",
        password: "123456",
      },
      messRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "change" },
          {
            min: 3,
            max: 11,
            message: "长度在 3 到 11 个字符",
            trigger: "change",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "change" },
          {
            min: 3,
            max: 11,
            message: "长度在 3 到 11 个字符",
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {
    //重置登录表单
    resetLoginFrom() {
      this.$refs.loginFromRef.resetFields();
    },
    login() {
      this.$refs.loginFromRef.validate(async (valid) => {
        if (!valid) return;
        const { data: res } = await this.$http.post("login", this.usermess);
        if (res.meta.status !== 200) return this.$message.error("登陆失败");
        window.sessionStorage.setItem("token", res.data.token);
        this.$router.push("/home");
        return this.$message.success("登陆成功");
      });
    },
  },
};
</script>

<style lang="less" scoped>
.login_page {
  height: 100vh;
  background-color: rgb(166, 161, 155);
}
.login_box {
  width: 500px;
  height: 350px;
  background-color: aliceblue;
  border-radius: 4px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
}
.login_form {
  position: absolute;
  bottom: 20%;
  width: 93%;
  box-sizing: border-box;
}
.btns {
  display: flex;
  justify-content: space-between;
}
h1 {
  text-align: center;
}
</style>