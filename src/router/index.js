import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },

  {
    path: '*',
    component: () => import('../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 导航守卫  -- 全局
// router.beforeEach((to, from, next) => {
//   console.log('beforeEach', to, from, next)
//   if (to.meta.auth) {
//     // 判断是否登录
//     if (window.isLogin) {
//       next();
//     } else {
//       // fullPath 为完整路径
//       next('/login?redirect=' + to.fullPath);
//     }
//   } else {
//     next();
//   }
// })

// 导航守卫 --- 全局  --- 控制没登录必须去登录，登陆了不能去登录页
router.beforeEach((to, from, next) => {
  if (window.isLogin) {
    if (to.path === '/login') {
      next('/');
    } else {
      next();
    }
  } else {
    if (to.path === '/login') {
      next();
    } else {
      next('/login')
    }
  }
})

export default router
