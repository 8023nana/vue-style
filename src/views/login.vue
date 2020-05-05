<template>
  <div>
    <div>
      <input type="text" v-model="userName" />
    </div>
    <div>
      <input type="password" v-model="password" />
    </div>
    <div>
      <button v-if="!isLogin" @click="login">登录</button>
      <button v-else @click="logout">注销</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      password: "",
    };
  },
  methods: {
    login() {
      if (this.userName === "Mina" && this.password === "admin") {
        window.isLogin = true;
        // 动态添加路由
        this.$router.addRoutes([
          {
            path: "/admin",
            name: "admin",
            component: () => import("../views/admin.vue"),
            children: [
              {
                path: "/admin/detail/:name",
                name: "detail",
                component: () => import("../views/detail.vue"),
              },
            ],
            meta: {
              auth: true,
            },
            // 单个路由守卫
            // beforeEnter(to, form, next) {
            //   if (window.isLogin) {
            //     next();
            //   } else {
            //     next('/login?redirect=' + to.fullPath);
            //   }
            // }
          },
        ]);
        this.$router.push("/");
      } else {
        alert("用户名密码错误，请重新输入！");
      }
    },
    logout() {
      window.isLogin = false;
    },
  },
  computed: {
    isLogin() {
      return window.isLogin;
    },
  },
};
</script>

<style lang="scss" scoped></style>
